"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "▦" },
  { href: "/admin/videos", label: "Videos", icon: "▶" },
  { href: "/admin/news", label: "News", icon: "✎" },
  { href: "/admin/events", label: "Events", icon: "◷" },
  { href: "/admin/gallery", label: "Gallery", icon: "❖" },
  { href: "/admin/registrations", label: "Registrations", icon: "☰" },
  { href: "/admin/settings", label: "Settings", icon: "⚙" },
];

interface AdminInfo {
  name: string;
  username: string;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminInfo | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Login + password-recovery pages render standalone (no sidebar, no auth check)
  const isPublicPage =
    pathname.startsWith("/admin/login") ||
    pathname === "/admin/forgot-password" ||
    pathname.startsWith("/admin/reset-password");

  // Only enforce the session check while actually inside /admin/** —
  // public pages must never be bounced by this layout.
  const inAdminArea = pathname.startsWith("/admin");

  useEffect(() => {
    if (!inAdminArea || isPublicPage) return;
    let cancelled = false;
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return;
        if (d?.admin) setAdmin({ name: d.admin.name, username: d.admin.username });
        else router.replace("/admin/login");
      })
      .catch(() => {
        if (!cancelled) router.replace("/admin/login");
      });
    return () => {
      cancelled = true;
    };
  }, [inAdminArea, isPublicPage, router]);

  if (isPublicPage) return <>{children}</>;

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-[#FDF8EF]">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0A2F1D] text-white flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="relative h-11 w-11 shrink-0">
            <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" />
          </div>
          <div>
            <span className="block text-lg font-bold leading-none">JPBA</span>
            <span className="text-[9px] font-semibold text-white/60 uppercase tracking-[0.18em]">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const active =
              item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-semibold transition-all ${
                  active
                    ? "bg-[#C9A84C] text-[#0A2F1D] shadow-lg shadow-[#C9A84C]/20"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-[13px] w-4 text-center">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer of sidebar */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-[13px] font-semibold text-white">{admin?.name ?? "…"}</p>
          <p className="text-[11px] text-white/50 mb-3">@{admin?.username ?? "…"}</p>
          <div className="flex gap-2">
            <Link
              href="/"
              className="flex-1 text-center px-3 py-2 rounded-lg bg-white/10 text-white text-[12px] font-semibold hover:bg-white/20 transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={logout}
              className="flex-1 px-3 py-2 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[12px] font-bold hover:bg-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Main content ────────────────────────────────────── */}
      <div className="flex-1 lg:pl-64 min-w-0">
        {/* Mobile topbar */}
        <div className="lg:hidden sticky top-0 z-20 flex items-center gap-3 bg-[#0A2F1D] text-white px-4 py-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-lg"
            aria-label="Open menu"
          >
            ☰
          </button>
          <div className="relative h-8 w-8">
            <Image src="/jharkhand.PNG" alt="JPBA" fill className="object-contain" />
          </div>
          <span className="font-bold">JPBA Admin</span>
        </div>

        <main className="p-5 lg:p-8 max-w-[1400px]">{children}</main>
      </div>
    </div>
  );
}
