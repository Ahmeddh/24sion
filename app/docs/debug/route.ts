import { NextResponse, NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

// Temporary debug route — remove after confirming env vars load correctly
export async function GET(_req: NextRequest) {
  const adminPw = process.env.DOCS_ADMIN_PASSWORD ?? ''
  const docPw   = process.env.DOC_PASSWORD_BITCOIN_PAYCHECK ?? ''

  return NextResponse.json({
    DOCS_ADMIN_PASSWORD:          adminPw  ? `set (${adminPw.length} chars, trimmed: ${adminPw.trim().length})` : 'NOT SET',
    DOC_PASSWORD_BITCOIN_PAYCHECK: docPw   ? `set (${docPw.length}  chars, trimmed: ${docPw.trim().length})`  : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
  })
}
