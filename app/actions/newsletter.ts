'use server'

import { headers } from 'next/headers'
import { createSupabaseAdmin } from '@/lib/supabase'
import { getResend, welcomeEmailHtml, welcomeEmailText } from '@/lib/resend'

/* ══════════════════════════════════════════════════════════
   Types
══════════════════════════════════════════════════════════ */
export type SubscribeResult =
  | { ok: true;  message: string }
  | { ok: false; message: string; field?: 'email' }

/* ══════════════════════════════════════════════════════════
   In-memory rate limiter
   — resets per deployment; fine for a portfolio site.
   — For edge/multi-instance, swap to Upstash Redis.
══════════════════════════════════════════════════════════ */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT   = 3
const RATE_WINDOW  = 60_000 // 1 minute in ms

function isRateLimited(ip: string): boolean {
  const now   = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

/* ══════════════════════════════════════════════════════════
   Validation helpers
══════════════════════════════════════════════════════════ */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function sanitizeEmail(raw: string): string {
  return raw.trim().toLowerCase().slice(0, 320)
}

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

/* ══════════════════════════════════════════════════════════
   Server Action — subscribeToNewsletter
══════════════════════════════════════════════════════════ */
export async function subscribeToNewsletter(
  formData: FormData
): Promise<SubscribeResult> {

  // Outer catch — prevents any unhandled throw from producing a digest error
  try {

    /* 1 ── Honeypot check */
    const honeypot = formData.get('website') as string | null
    if (honeypot) return { ok: true, message: "You're subscribed 🎉" }

    /* 2 ── Rate limiting (await headers — required for Next.js 15+) */
    let clientIp = 'unknown'
    try {
      const h = await headers()
      clientIp = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    } catch {
      // headers() unavailable in this context — continue with 'unknown'
    }

    if (isRateLimited(clientIp)) {
      return { ok: false, message: 'Too many attempts. Please wait a minute and try again.' }
    }

    /* 3 ── Extract + validate email */
    const rawEmail = formData.get('email') as string | null
    if (!rawEmail) {
      return { ok: false, message: 'Email address is required.', field: 'email' }
    }

    const email = sanitizeEmail(rawEmail)
    if (!isValidEmail(email)) {
      return { ok: false, message: 'Please enter a valid email address.', field: 'email' }
    }

    /* 4 ── Supabase insert (wrapped — throws if env vars missing) */
    let supabase
    try {
      supabase = createSupabaseAdmin()
    } catch (configErr) {
      console.error('[newsletter] Supabase config error:', configErr)
      return { ok: false, message: 'Service temporarily unavailable. Please try again later.' }
    }

    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, status: 'active' })

    if (dbError) {
      if (dbError.code === '23505') {
        return { ok: false, message: 'This email is already subscribed.', field: 'email' }
      }
      console.error('[newsletter] Supabase insert error:', dbError)
      return { ok: false, message: 'Something went wrong. Please try again shortly.' }
    }

    /* 5 ── Welcome email (non-blocking — failure doesn't affect subscription) */
    try {
      const resend = getResend()
      await resend.emails.send({
        from:    'Ahmed Djobs <hello@djobs.net>',
        to:      email,
        subject: "You're subscribed: Ahmed Djobs Insights",
        html:    welcomeEmailHtml(email),
        text:    welcomeEmailText(email),
      })
    } catch (emailErr) {
      console.error('[newsletter] Resend error:', emailErr)
    }

    return { ok: true, message: "You're subscribed 🎉" }

  } catch (err) {
    console.error('[newsletter] Unexpected error:', err)
    return { ok: false, message: 'Something went wrong. Please try again shortly.' }
  }
}
