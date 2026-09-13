"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * PageHero — the ONE hero used by every subpage.
 *
 * Replaces the 22 hand-rolled hero <section> blocks with a single component
 * that ships with:
 *   - full-bleed photo (Ken Burns pan, paused when the tab is hidden)
 *   - boccia court-line texture
 *   - cream gradient fade (text side → clear photo on the right)
 *   - bottom fade into the page background
 *   - eyebrow / title / description column
 *   - optional breadcrumbs, CTAs and badge row
 */

export interface PageHeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

interface PageHeroProps {
  /** Photo shown behind the hero (full-bleed, Ken Burns) */
  image: string;
  /** Alt text describing the photo — should match the page topic */
  imageAlt?: string;
  /** Small uppercase kicker above the title, e.g. "ABOUT JPBA" */
  eyebrow?: string;
  /** Page headline (string or rich node, e.g. with a gold-gradient span) */
  title: ReactNode;
  description?: ReactNode;
  /** Optional trailing content (badges, chips) shown under the description */
  badges?: string[];
  /** Optional CTA row under the description */
  ctas?: PageHeroCta[];
  /** Breadcrumb trail: Home / parent / current */
  breadcrumb?: { label: string; href?: string }[];
  /** "cream" (default) matches the light pages; "green" flips to dark page style */
  tone?: "cream" | "green";
  /** Minimum hero height preset */
  size?: "sm" | "md" | "lg";
  /** Alternate Ken Burns direction so consecutive pages don't pulse identically */
  reverse?: boolean;
}

const CREAM_RIGHT_FADE =
  "linear-gradient(to right, rgba(253,248,239,0.97) 0%, rgba(253,248,239,0.94) 30%, rgba(253,248,239,0.7) 44%, rgba(253,248,239,0.2) 56%, rgba(253,248,239,0) 70%)";
const CREAM_BOTTOM_FADE =
  "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 22%)";
const GREEN_RIGHT_FADE =
  "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.82) 30%, rgba(10,47,29,0.55) 44%, rgba(10,47,29,0.18) 58%, rgba(10,47,29,0) 70%)";
const GREEN_BOTTOM_FADE =
  "linear-gradient(to top, rgba(10,47,29,0.9) 0%, rgba(10,47,29,0) 30%)";

const HEIGHTS: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "min-h-[280px] pb-16",
  md: "min-h-[320px] pb-16",
  lg: "min-h-[380px] pb-20",
};

export default function PageHero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  badges,
  ctas,
  breadcrumb,
  tone = "cream",
  size = "md",
  reverse = false,
}: PageHeroProps) {
  const isGreen = tone === "green";

  return (
    <section
      className={`relative overflow-hidden flex items-center border-b border-[#C9A84C]/20 pt-[230px] ${
        isGreen ? "bg-[#0A2F1D] text-[#FDF8EF]" : "bg-[#FDF8EF]"
      } ${HEIGHTS[size]}`}
    >
      {/* Full background photo with slow Ken Burns — paused when the tab is hidden */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${reverse ? "ken-burns-slow-rev" : "ken-burns-slow"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* Boccia court-line texture over the text side */}
      <div className="absolute inset-0 bg-texture-court pointer-events-none" />

      {/* Cream (or green) fade on the text side — photo stays fully visible on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: isGreen ? GREEN_RIGHT_FADE : CREAM_RIGHT_FADE }}
      />
      {/* Bottom fade into the page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: isGreen ? GREEN_BOTTOM_FADE : CREAM_BOTTOM_FADE }}
      />

      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 text-[12px] font-bold tracking-wider uppercase text-[#8A8A8A] mb-5"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#B8923A] transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-[#C9A84C]/60">/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#B8923A] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#B8923A]">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
          {eyebrow && (
            <p className="text-[#B8923A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className={`text-[36px] sm:text-[44px] font-bold leading-tight mb-4 ${isGreen ? "text-[#FDF8EF]" : "text-[#0A2F1D]"}`}>
            {title}
          </h1>
          {description && (
            <p className={`text-[15px] max-w-[600px] leading-relaxed ${isGreen ? "text-[#FDF8EF]/75" : "text-gray-600"}`}>
              {description}
            </p>
          )}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-3 text-[12px] font-bold uppercase tracking-wider mt-7">
              {badges.map((b) => (
                <span key={b} className="px-4 py-2 rounded-full bg-[#0A2F1D] text-[#C9A84C]">
                  {b}
                </span>
              ))}
            </div>
          )}
          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {ctas.map((cta) =>
                cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      cta.variant === "secondary"
                        ? "inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0A2F1D] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-all duration-300 text-[14px] active:scale-[0.97]"
                        : "inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 text-[14px] shadow-xl shadow-[#C9A84C]/30 active:scale-[0.97]"
                    }
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.variant === "secondary"
                        ? "inline-flex px-8 py-3.5 border border-[#C9A84C] text-[#C9A84C] rounded font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors text-[14px]"
                        : "inline-flex px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-colors text-[14px] shadow-lg shadow-[#C9A84C]/20"
                    }
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
