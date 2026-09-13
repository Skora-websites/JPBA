"use client";

interface RetroMarqueeProps {
  items: string[];
  className?: string;
  /** duplicated content speed (seconds per loop) */
  duration?: number;
  separator?: string;
}

/**
 * Retro arcade-style marquee — an infinitely scrolling ticker strip.
 * Content is duplicated once so the loop is seamless. Pauses on hover.
 */
export default function RetroMarquee({
  items,
  className = "",
  duration = 40,
  separator = "✦",
}: RetroMarqueeProps) {
  const row = (key: string, ariaHidden: boolean) => (
    <div
      key={key}
      aria-hidden={ariaHidden}
      className="retro-marquee-group"
      style={{ animationDuration: `${duration}s` }}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-12 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-[#0A2F1D]">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`retro-marquee ${className}`}>
      {row("a", false)}
      {row("b", true)}
    </div>
  );
}
