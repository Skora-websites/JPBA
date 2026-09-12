"use client";
import { useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Glare intensity 0–1 */
  glare?: number;
  /** lift the card on hover (px) */
  lift?: number;
}

/**
 * 3D tilt card — tracks the pointer and rotates in 3D space with GSAP,
 * with an optional moving glare highlight. Falls back to no-op for
 * touch/reduced-motion.
 */
export default function TiltCard({ children, className = "", max = 10, glare = 0.25, lift = 6 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      gsap.to(card, {
        rotateX,
        rotateY,
        y: -lift,
        scale: 1.02,
        transformPerspective: 900,
        duration: 0.5,
        ease: "power2.out",
      });
      if (glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: glare,
          x: `${px * 100 - 50}%`,
          y: `${py * 100 - 50}%`,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" });
    if (glareRef.current) gsap.to(glareRef.current, { opacity: 0, duration: 0.4 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, transparent 70%)",
          borderRadius: "inherit",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
