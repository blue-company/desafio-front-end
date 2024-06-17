import { NextRequest, NextResponse } from 'next/server';
import { authToken } from './constants/auth';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPage = path === '/login';
  const token = request.cookies.get(authToken)?.value;

  if (isPublicPage && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPage && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/leaderboard']
};
