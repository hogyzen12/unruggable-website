// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Handle favicon requests for alpha subdomain
  if ((hostname === 'alpha.unruggable.io' || hostname.startsWith('alpha.')) && 
      url.pathname === '/favicon.ico') {
    url.pathname = '/app_icon_2.webp'
    return NextResponse.rewrite(url)
  }

  // Handle alpha subdomain
  if (hostname === 'alpha.unruggable.io' || hostname.startsWith('alpha.')) {
    url.pathname = `/alpha${url.pathname === '/' ? '' : url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - app_icon_2.webp (actual favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|app_icon_2.webp).*)',
  ],
}