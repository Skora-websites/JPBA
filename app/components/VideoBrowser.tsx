"use client";
import { useMemo, useState } from "react";
import YouTubeFacade from "./YouTubeFacade";
import ScrollReveal from "./ScrollReveal";

export interface VideoRow {
  id: number;
  title: string;
  description: string | null;
  youtube_id: string | null;
  category: string;
  featured: number;
  views: number;
}

const PLAYED_KEY = "jpba_viewed_videos";

function getPlayed(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    return new Set<number>(JSON.parse(localStorage.getItem(PLAYED_KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

function markPlayed(id: number) {
  try {
    const s = getPlayed();
    s.add(id);
    localStorage.setItem(PLAYED_KEY, JSON.stringify([...s]));
  } catch {
    /* private mode — ignore */
  }
}

function formatViews(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M views`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K views`;
  return `${n} view${n === 1 ? "" : "s"}`;
}

export default function VideoBrowser({ videos }: { videos: VideoRow[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(videos.map((v) => v.category)))],
    [videos]
  );
  const [active, setActive] = useState("All");
  const [views, setViews] = useState<Record<number, number>>(() =>
    Object.fromEntries(videos.map((v) => [v.id, v.views]))
  );

  const filtered = active === "All" ? videos : videos.filter((v) => v.category === active);

  const handlePlay = (id: number) => {
    if (getPlayed().has(id)) return; // count each visitor once per video
    markPlayed(id);
    fetch(`/api/videos/${id}/view`, { method: "POST" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.views != null) setViews((prev) => ({ ...prev, [id]: d.views }));
      })
      .catch(() => null);
  };

  return (
    <>
      {/* Category filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
              active === c
                ? "bg-[#0A2F1D] text-[#C9A84C] shadow-lg shadow-[#0A2F1D]/20 border border-[#0A2F1D]"
                : "bg-white text-[#0A2F1D] border border-[#E2D9C8] hover:border-[#C9A84C] hover:shadow-md"
            }`}
          >
            {c}
            <span className="ml-2 opacity-60 font-semibold">
              {c === "All" ? videos.length : videos.filter((v) => v.category === c).length}
            </span>
          </button>
        ))}
      </div>

      {/* Filtered grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v, i) => (
          <ScrollReveal key={v.id} variant="fade-up" delay={(i % 3) * 80}>
            <div className="group rounded-2xl overflow-hidden bg-white border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div onClick={() => handlePlay(v.id)}>
                <YouTubeFacade youtubeId={v.youtube_id ?? ""} title={v.title} />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold uppercase tracking-wider">
                    {v.category}
                  </span>
                  {v.featured === 1 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold">
                      ★ Featured
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-bold text-[#0A2F1D] leading-snug group-hover:text-[#C9A84C] transition-colors">
                  {v.title}
                </h3>
                {v.description && (
                  <p className="text-[13px] text-[#5C5C5C] mt-2 line-clamp-2 flex-1">{v.description}</p>
                )}
                <p className="text-[11px] text-gray-400 font-semibold mt-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {formatViews(views[v.id] ?? 0)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#5C5C5C]">
          No videos in this category yet.
        </div>
      )}
    </>
  );
}
