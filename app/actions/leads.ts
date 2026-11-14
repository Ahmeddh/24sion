'use server'

import { headers } from 'next/headers'
import { createSupabaseAdmin } from '@/lib/supabase'

/* ══════════════════════════════════════════════════════════
   Lead capture for the free 200-Week Cycle Plan
   Stores name, email and WhatsApp number in Supabase `leads`.
   Messages are returned as codes; the form translates them.
══════════════════════════════════════════════════════════ */

export type LeadField  = 'name' | 'email' | 'whatsapp' | 'consent'
export type LeadResult =
  | { ok: true }
  | { ok: false; code: 'required' | 'invalid' | 'rate' | 'server'; field?: LeadField }

/** Flip to true to make the WhatsApp number mandatory */
const WHATSAPP_REQUIRED = false

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT   = 5
const RATE_WINDOW  = 60_000

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Keeps a leading + and digits only. Returns null when it is not a plausible number. */
function normalizeWhatsapp(raw: string): string | null {
  const trimmed = raw.trim()
  if (!trimmed) return ''
  const digits = trimmed.replace(/[^\d]/g, '')
  if (digits.length < 8 || digits.length > 15) return null
  return `+${digits}`
}

export async function submitLead(formData: FormData): Promise<LeadResult> {
  try {
    /* Honeypot: bots fill it, people never see it */
    if (formData.get('website')) return { ok: true }

    let clientIp = 'unknown'
    try {
      const h = await headers()
      clientIp = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    } catch { /* headers() unavailable: carry on */ }
    if (isRateLimited(clientIp)) return { ok: false, code: 'rate' }

    const name     = String(formData.get('name') ?? '').trim().slice(0, 120)
    const email    = String(formData.get('email') ?? '').trim().toLowerCase().slice(0, 320)
    const waRaw    = String(formData.get('whatsapp') ?? '')
    const consent  = formData.get('consent') === 'on'
    const locale   = String(formData.get('locale') ?? 'en').slice(0, 5)
    const source   = String(formData.get('source') ?? 'unknown').slice(0, 60)

    if (name.length < 2)          return { ok: false, code: 'required', field: 'name' }
    if (!email)                   return { ok: false, code: 'required', field: 'email' }
    if (!EMAIL_REGEX.test(email)) return { ok: false, code: 'invalid',  field: 'email' }

    const whatsapp = normalizeWhatsapp(waRaw)
    if (whatsapp === null)                   return { ok: false, code: 'invalid',  field: 'whatsapp' }
    if (WHATSAPP_REQUIRED && whatsapp === '') return { ok: false, code: 'required', field: 'whatsapp' }
    if (!consent)                            return { ok: false, code: 'required', field: 'consent' }

    let supabase
    try {
      supabase = createSupabaseAdmin()
    } catch (configErr) {
      console.error('[leads] Supabase config error:', configErr)
      return { ok: false, code: 'server' }
    }

    /* Same email again: update the row instead of failing, so nobody is told "already exists" */
    const { error } = await supabase
      .from('leads')
      .upsert(
        { name, email, whatsapp: whatsapp || null, locale, source, consent, updated_at: new Date().toISOString() },
        { onConflict: 'email' },
      )

    if (error) {
      console.error('[leads] Supabase upsert error:', error)
      return { ok: false, code: 'server' }
    }

    return { ok: true }
  } catch (err) {
    console.error('[leads] Unexpected error:', err)
    return { ok: false, code: 'server' }
  }
}
