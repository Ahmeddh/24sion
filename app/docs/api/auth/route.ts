import { NextRequest, NextResponse } from 'next/server'
import { makeToken } from '@/lib/docs-auth'

const DOC_ENV_VARS: Record<string, string> = {
  'bitcoin-paycheck-plan-campaign': 'DOC_PASSWORD_BITCOIN_PAYCHECK',
  'bitcoin-workshop-client':        'DOC_PASSWORD_WORKSHOP_CLIENT',
  'bitcoin-workshop-playbook':      'DOC_PASSWORD_WORKSHOP_PLAYBOOK',
  // Admin-only doc: unlocked by DOCS_ADMIN_PASSWORD, no separate password.
  'dubai-workshop-runway':          'DOCS_ADMIN_PASSWORD',
}

function adminPw()           { return (process.env.DOCS_ADMIN_PASSWORD ?? '').trim() }
function docPw(slug: string) {
  const key = DOC_ENV_VARS[slug]
  return key ? (process.env[key] ?? '').trim() : ''
}

function baseUrl(req: NextRequest) {
  // x-forwarded-host is set by Vercel to the actual domain (djobs.net),
  // whereas req.url can resolve to the internal .vercel.app URL.
  const host  = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? new URL(req.url).host
  const proto = req.headers.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}`
}

function to(req: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, baseUrl(req)), { status: 303 })
}

export async function POST(req: NextRequest) {
  const form     = await req.formData()
  const type     = (form.get('type')     as string ?? '').trim()
  const slug     = (form.get('slug')     as string ?? '').trim()
  const password = (form.get('password') as string ?? '').trim()

  if (type === 'admin') {
    const ap = adminPw()
    if (!password || !ap || password !== ap) return to(req, '/docs?error=1')
    const token = makeToken(ap, 'admin')
    return to(req, `/docs?t=${token}`)
  }

  if (type === 'doc' && slug) {
    const ap = adminPw()
    const dp = docPw(slug)
    const isAdmin  = !!ap && password === ap
    const isPerDoc = !!dp && password === dp
    if (!isAdmin && !isPerDoc) return to(req, `/docs/${slug}?error=1`)
    const pw    = isAdmin ? ap : dp
    const token = makeToken(pw, slug)
    return to(req, `/docs/${slug}/view?t=${token}`)
  }

  return to(req, '/docs')
}
