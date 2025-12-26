import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is an admin route (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Check for session cookie
    const sessionCookie = request.cookies.get('admin_session');

    if (!sessionCookie) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
