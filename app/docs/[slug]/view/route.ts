import { NextRequest, NextResponse } from 'next/server'
import { findDoc } from '@/content/docs-config'
import { getDocHtml } from '@/content/docs-content'
import { verifyDocToken } from '@/lib/docs-auth'

function baseUrl(req: NextRequest) {
  const host  = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? new URL(req.url).host
  const proto = req.headers.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}`
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const doc = findDoc(slug)
  if (!doc) return new NextResponse('Not found', { status: 404 })

  const token = req.nextUrl.searchParams.get('t') ?? ''

  if (!verifyDocToken(token, slug)) {
    return NextResponse.redirect(new URL(`/docs/${slug}`, baseUrl(req)), { status: 303 })
  }

  const html = getDocHtml(slug)
  if (!html) return new NextResponse('Content not found', { status: 404 })

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  })
}
