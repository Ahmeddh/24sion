import { createHmac } from 'crypto'

function sign(key: string, scope: string) {
  return createHmac('sha256', key).update(scope).digest('hex').slice(0, 32)
}

export function makeToken(password: string, scope: string) {
  return sign(password, scope)
}

function adminPw()           { return (process.env.DOCS_ADMIN_PASSWORD ?? '').trim() }
function docPw(slug: string) {
  const map: Record<string, string> = {
    'bitcoin-paycheck-plan-campaign': 'DOC_PASSWORD_BITCOIN_PAYCHECK',
    'bitcoin-workshop-client':        'DOC_PASSWORD_WORKSHOP_CLIENT',
    'bitcoin-workshop-playbook':      'DOC_PASSWORD_WORKSHOP_PLAYBOOK',
    // Admin-only doc: unlocked by DOCS_ADMIN_PASSWORD, no separate password.
    'dubai-workshop-runway':          'DOCS_ADMIN_PASSWORD',
  }
  const key = map[slug]
  return key ? (process.env[key] ?? '').trim() : ''
}

export function verifyAdminToken(token: string) {
  const pw = adminPw()
  return !!pw && token === sign(pw, 'admin')
}

export function verifyDocToken(token: string, slug: string) {
  const ap = adminPw()
  const dp = docPw(slug)
  const adminOk = !!ap && token === sign(ap, slug)
  const docOk   = !!dp && token === sign(dp, slug)
  return adminOk || docOk
}

export function adminDocToken(slug: string) {
  const pw = adminPw()
  return pw ? sign(pw, slug) : null
}
