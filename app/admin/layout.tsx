"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const sidebarLinks = [
  { label: "Overview", href: "/admin", icon: "📊" },
  { label: "Registrations", href: "/admin/registrations", icon: "📋" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  // Auth guard
  useEffect(() => {
    if (pathname === "/admin/login") {
      setAuthed(true);
      return;
    }
    const isAuth = localStorage.getItem("jpba_admin_auth");
    if (!isAuth) {
      router.push("/admin/login");
    } else {
      setAuthed(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("jpba_admin_auth");
    router.push("/admin/login");
  };

  // Login page — no shell
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!authed) return null;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[260px] bg-surface border-r border-border transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 h-[72px] border-b border-border">
          <Image
            src="/jharkhand.PNG"
            alt="JPBA"
            width={36}
            height={36}
            className="object-contain"
          />
          <div>
            <p className="text-sm font-bold text-white">JPBA Admin</p>
            <p className="text-[10px] text-text-secondary">Dashboard</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all ${
                  isActive
                    ? "bg-primary/15 text-primary font-semibold"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors mb-2"
          >
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-[260px]">
        {/* Topbar */}
        <header className="sticky top-0 z-20 h-[72px] bg-surface/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-text-secondary hover:text-white"
            >
              ☰
            </button>
            <h1 className="text-sm font-semibold text-white hidden sm:block">
              {pathname === "/admin"
                ? "Dashboard Overview"
                : pathname.includes("/registrations/")
                  ? "Registration Details"
                  : "Registrations"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
              A
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-text-secondary hover:text-danger transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
