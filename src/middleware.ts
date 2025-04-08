import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for the login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("auth");
  const isLoggedIn = authCookie?.value === "true";

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // this is fine now!
};
