"use client";
import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  photos: { src: string; title: string; category?: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null && index >= 0 && index < photos.length;
  const [mounted, setMounted] = useState(false);

  // Portal target — render into document.body so the fixed overlay escapes
  // any transformed/filtered ancestor (e.g. PageTransition wrapper).
  useEffect(() => setMounted(true), []);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!mounted || !open || index === null) return null;
  const photo = photos[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#06170E]/95 backdrop-blur-md p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-all hover:rotate-90 duration-300 text-xl"
        aria-label="Close gallery"
      >
        ✕
      </button>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 md:left-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-all hover:-translate-x-1 text-2xl"
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 md:right-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-all hover:translate-x-1 text-2xl"
        aria-label="Next photo"
      >
        ›
      </button>

      {/* Image */}
      <figure
        className="max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="animate-fade-in retro-scanlines relative rounded-xl overflow-hidden border-2 border-[#C9A84C]/40 shadow-[0_0_60px_rgba(201,168,76,0.15)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.title}
            className="max-h-[75vh] w-auto max-w-full object-contain animate-fade-in"
          />
        </div>
        <figcaption className="mt-4 flex items-center gap-3 text-white">
          <span className="retro-led" />
          <span className="font-bold">{photo.title}</span>
          {photo.category && (
            <span className="text-[#C9A84C] text-sm uppercase tracking-widest">{photo.category}</span>
          )}
          <span className="text-white/50 text-sm">
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
