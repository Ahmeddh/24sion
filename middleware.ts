import createMiddleware from 'next-intl/middleware'
import { type NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    // Security headers for all /docs/ requests
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    return response
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(en|ar)/:path*', '/docs', '/docs/:path*'],
}
