import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "jpba_session";

/**
 * Guards the admin area: any /admin path (except the login page and auth
 * APIs) requires a session cookie. Full session validation happens in the
 * API routes / server components — this is the fast redirect layer.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exact admin-page paths only (never /videos, /api, or other public routes).
  // /admin/login and the password-recovery pages are excluded; APIs enforce
  // auth themselves.
  const isPublicAdminPage =
    pathname === "/admin/login" ||
    pathname === "/admin/forgot-password" ||
    pathname === "/admin/reset-password";
  const isAdminPage =
    pathname === "/admin" ||
    (pathname.startsWith("/admin/") && !isPublicAdminPage);

  if (isAdminPage) {
    const hasSession = !!request.cookies.get(SESSION_COOKIE)?.value;
    if (!hasSession) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
