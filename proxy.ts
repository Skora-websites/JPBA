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
  // /admin/login is excluded; APIs enforce auth themselves.
  const isAdminPage =
    pathname === "/admin" ||
    (pathname.startsWith("/admin/") && !pathname.startsWith("/admin/login"));

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
