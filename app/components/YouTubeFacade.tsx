"use client";
import { useState } from "react";

interface YouTubeFacadeProps {
  youtubeId: string;
  title: string;
  className?: string;
  eager?: boolean;
}

/**
 * Performance-friendly YouTube embed — renders the real thumbnail image
 * (lazily loaded, with a skeleton shimmer while it streams in) and only
 * mounts the iframe (≈1MB of player JS) after the visitor clicks.
 */
export default function YouTubeFacade({ youtubeId, title, className = "", eager = false }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (playing) {
    return (
      <div className={`aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group relative block w-full aspect-video overflow-hidden retro-scanlines bg-[#0A2F1D] ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* Skeleton shimmer while the thumbnail loads */}
      {!loaded && (
        <span className="absolute inset-0 z-10 block overflow-hidden">
          <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#133824]/60 via-[#0A2F1D]/40 to-[#C9A84C]/20" />
          <span className="absolute inset-y-0 -left-1/2 w-1/2 animate-[shimmer-line_1.6s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </span>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={title}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="h-16 w-16 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg shadow-[#C9A84C]/40 group-hover:scale-110 group-hover:rotate-6 transition-transform">
          <svg className="w-7 h-7 text-[#0A2F1D] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
        YouTube
      </span>
    </button>
  );
}
