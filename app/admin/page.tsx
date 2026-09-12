"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  videos: number;
  news: number;
  events: number;
  photos: number;
  registrations: number;
  pending: number;
}

interface RecentItem {
  kind: string;
  title: string;
  date: string;
  href: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recent, setRecent] = useState<RecentItem[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/videos").then((r) => r.json()).catch(() => null),
      fetch("/api/news").then((r) => r.json()).catch(() => null),
      fetch("/api/events").then((r) => r.json()).catch(() => null),
      fetch("/api/gallery").then((r) => r.json()).catch(() => null),
      fetch("/api/registrations").then((r) => r.json()).catch(() => null),
    ]).then(([v, n, e, g, r]) => {
      const videos = v?.videos ?? [];
      const posts = n?.posts ?? [];
      const events = e?.events ?? [];
      const photos = g?.photos ?? [];
      const regs = r?.registrations ?? [];
      setStats({
        videos: videos.length,
        news: posts.length,
        events: events.length,
        photos: photos.length,
        registrations: regs.length,
        pending: regs.filter((x: { status: string }) => x.status === "pending").length,
      });
      const items: RecentItem[] = [
        ...videos.slice(0, 3).map((x: { title: string; created_at: string }) => ({ kind: "Video", title: x.title, date: x.created_at, href: "/admin/videos" })),
        ...posts.slice(0, 3).map((x: { title: string; published_at: string }) => ({ kind: "News", title: x.title, date: x.published_at, href: "/admin/news" })),
        ...events.slice(0, 3).map((x: { title: string; created_at: string }) => ({ kind: "Event", title: x.title, date: x.created_at, href: "/admin/events" })),
        ...regs.slice(0, 3).map((x: { fullName: string; submittedAt: string }) => ({ kind: "Registration", title: x.fullName, date: x.submittedAt, href: "/admin/registrations" })),
      ];
      items.sort((a, b) => (a.date < b.date ? 1 : -1));
      setRecent(items.slice(0, 8));
    });
  }, []);

  const cards = [
    { label: "Videos", value: stats?.videos, href: "/admin/videos", icon: "▶", accent: "bg-[#0A2F1D]" },
    { label: "News Posts", value: stats?.news, href: "/admin/news", icon: "✎", accent: "bg-[#C9A84C]" },
    { label: "Events", value: stats?.events, href: "/admin/events", icon: "◷", accent: "bg-[#1B4E33]" },
    { label: "Photos", value: stats?.photos, href: "/admin/gallery", icon: "❖", accent: "bg-[#8B6914]" },
    { label: "Registrations", value: stats?.registrations, href: "/admin/registrations", icon: "☰", accent: "bg-[#133824]" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#0A2F1D]">Dashboard</h1>
          <p className="text-[#5C5C5C] text-[14px] mt-1">
            Manage Jharkhand Para Boccia Association content
          </p>
        </div>
        <Link
          href="/admin/videos"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-[#0A2F1D] rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors"
        >
          + Add Video
        </Link>
      </div>

      {/* Pending registrations alert */}
      {stats && stats.pending > 0 && (
        <Link
          href="/admin/registrations?status=pending"
          className="mb-6 flex items-center gap-3 rounded-xl border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-5 py-4 hover:bg-[#C9A84C]/20 transition-colors"
        >
          <span className="retro-led" />
          <span className="text-[14px] font-semibold text-[#0A2F1D]">
            {stats.pending} registration{stats.pending === 1 ? "" : "s"} awaiting review
          </span>
          <span className="ml-auto text-[#C9A84C] font-bold text-[13px]">Review →</span>
        </Link>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group rounded-2xl bg-white border border-[#E2D9C8] p-5 hover:border-[#C9A84C]/50 hover:shadow-lg transition-all depth-hover"
          >
            <div className={`h-9 w-9 rounded-lg ${c.accent} text-white flex items-center justify-center text-[14px] mb-4`}>
              {c.icon}
            </div>
            <p className="text-[30px] font-bold text-[#0A2F1D] leading-none">
              {c.value ?? "…"}
            </p>
            <p className="text-[12px] font-semibold text-[#8A8A8A] uppercase tracking-wider mt-2 group-hover:text-[#C9A84C] transition-colors">
              {c.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl bg-white border border-[#E2D9C8] p-6">
        <h2 className="text-[18px] font-bold text-[#0A2F1D] mb-4">Recent Activity</h2>
        {recent.length === 0 ? (
          <p className="text-[#8A8A8A] text-[14px]">No activity yet — start by adding a video.</p>
        ) : (
          <ul className="divide-y divide-[#F0EBE0]">
            {recent.map((item, i) => (
              <li key={i} className="flex items-center gap-4 py-3">
                <span className="px-2.5 py-1 rounded-full bg-[#0A2F1D]/5 text-[#0A2F1D] text-[11px] font-bold uppercase tracking-wider min-w-[92px] text-center">
                  {item.kind}
                </span>
                <span className="text-[14px] font-semibold text-[#1A1A1A] truncate flex-1">
                  {item.title}
                </span>
                <span className="text-[12px] text-[#8A8A8A] whitespace-nowrap">
                  {item.date?.slice(0, 10)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
