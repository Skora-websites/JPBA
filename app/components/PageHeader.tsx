"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
}

export default function PageHeader({ title, breadcrumb, image = IMG.hero3 }: PageHeaderProps) {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  // GSAP parallax + ken-burns on the header image
  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrap = imgWrapRef.current;
      if (!wrap) return;
      const img = wrap.querySelector("img");
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
      gsap.from(wrap, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative pt-6 pb-16 overflow-hidden flex items-center bg-[#FDF8EF]">
      {/* Full background image (real JPBA photo) with slow Ken Burns */}
      <div ref={imgWrapRef} className="absolute inset-0">
        <div className="absolute inset-0 ken-burns-slow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Boccia court-line texture over the cream side for a premium feel */}
      <div className="absolute inset-0 bg-texture-court pointer-events-none" />
      {/* Cream fade ONLY on the text side (left) → image fully visible on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(253,248,239,0.97) 0%, rgba(253,248,239,0.94) 28%, rgba(253,248,239,0.72) 42%, rgba(253,248,239,0.25) 54%, rgba(253,248,239,0) 68%)",
        }}
      />
      {/* Bottom fade into page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 18%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[12px] font-bold tracking-wider uppercase text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#B8923A] transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-gray-400">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#B8923A] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#B8923A]">{item.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Title with retro underline swipe */}
          <h1 className="text-[40px] md:text-[56px] font-bold text-[#0A2F1D] leading-tight">
            {title}
          </h1>
          <div className="retro-link relative w-24 h-1.5 mt-6" />
        </motion.div>
      </div>
    </div>
  );
}
