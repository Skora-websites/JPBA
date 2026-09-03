"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant: fade-up (default), fade-in, slide-left, slide-right, scale-in */
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  /** Delay in ms before animation starts (for staggered sequences) */
  delay?: number;
  /** Duration in ms for the animation */
  duration?: number;
  /** Root margin for IntersectionObserver (negative pulls trigger point inward) */
  rootMargin?: string;
  /** Observer threshold (0 = any pixel visible, 1 = fully visible) */
  threshold?: number;
  /** Additional CSS classes to apply to the wrapper */
  className?: string;
}

const variantStyles: Record<string, string> = {
  "fade-up": "sr-fade-up",
  "fade-in": "sr-fade-in",
  "slide-left": "sr-slide-left",
  "slide-right": "sr-slide-right",
  "scale-in": "sr-scale-in",
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  rootMargin = "0px 0px -60px 0px",
  threshold = 0.15,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.style.transitionDuration = `${duration}ms`;
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`sr-hidden ${variantStyles[variant] || ""} ${className}`}
    >
      {children}
    </div>
  );
}
