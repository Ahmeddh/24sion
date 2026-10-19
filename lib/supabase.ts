import { createClient } from '@supabase/supabase-js'

/* ── Public client (anon key) — safe to use in Server Components ── */
export function createSupabaseClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env.local'
    )
  }

  return createClient(url, key)
}

/* ── Service-role client — server-side only, never expose to browser ── */
export function createSupabaseAdmin() {
  const url     = process.env.SUPABASE_URL
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !service) {
    throw new Error(
      'Missing Supabase admin env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
    )
  }

  return createClient(url, service, {
    auth: {
      autoRefreshToken:  false,
      persistSession:    false,
      detectSessionInUrl: false,
    },
  })
}

/* ── Database types ────────────────────────────────────────────── */
export type SubscriberStatus = 'active' | 'unsubscribed'

export interface NewsletterSubscriber {
  id:         string
  email:      string
  created_at: string
  status:     SubscriberStatus
}
