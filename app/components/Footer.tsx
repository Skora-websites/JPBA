"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Pause every decorative animation (Ken Burns heroes, footer ball, marquee)
 * while the tab is hidden so background tabs stop burning battery/CPU.
 * Toggling one class on <html> covers every animated element site-wide.
 */
export function useAnimationPauseOnHidden() {
  useEffect(() => {
    const root = document.documentElement;
    const onVisibility = () => {
      root.classList.toggle("paused", document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      root.classList.remove("paused");
    };
  }, []);
}

export default function Footer() {
  useAnimationPauseOnHidden();

  return (
    <footer className="relative overflow-hidden bg-[#0A2F1D] text-white/90">
      {/* ─── Boccia court motif — bookends the hero treatment ─── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Court surface: faint gold V-line sweep rising from the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 top-[38%]"
          style={{
            background:
              "conic-gradient(from 262deg at 50% 108%, transparent 0deg, rgba(201,168,76,0.09) 18deg, transparent 36deg)",
          }}
        />
        {/* Throwing boxes + jack target box grid (perspective feel via narrow column) */}
        <div
          className="absolute bottom-0 left-1/2 w-[900px] max-w-full -translate-x-1/2 h-[46%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(201,168,76,0.10) 0 1.5px, transparent 1.5px 150px), repeating-linear-gradient(0deg, rgba(201,168,76,0.07) 0 1.5px, transparent 1.5px 44px)",
            maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
          }}
        />
        {/* Court boundary lines */}
        <div className="absolute bottom-0 inset-x-6 md:inset-x-10 h-px bg-[#C9A84C]/20" />
        <div className="absolute bottom-0 left-6 md:left-10 w-px h-[46%] bg-[#C9A84C]/15" />
        <div className="absolute bottom-0 right-6 md:right-10 w-px h-[46%] bg-[#C9A84C]/15" />
        {/* The jack — warm glow, upper right of the court */}
        <div className="absolute right-[18%] top-[30%] h-3.5 w-3.5 rounded-full bg-[#FDF8EF] shadow-[0_0_18px_6px_rgba(253,248,239,0.28)]" />
        {/* A thrown ball rolling from the throwing box toward the jack, then resetting */}
        <div className="footer-ball absolute left-[12%] top-[64%] h-2.5 w-2.5 rounded-full bg-[#C9A84C] shadow-[0_0_10px_2px_rgba(201,168,76,0.35)]" />
        {/* Retro film texture consistent with the site's retro layer */}
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      {/* Gold stripe bookending the hero's retro band */}
      <div className="jpba-stripe relative z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full p-1">
                <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">JPBA</span>
                <span className="text-[8px] font-semibold text-white/60 uppercase tracking-[0.2em]">Jharkhand Para Boccia</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Promoting Para Boccia across Jharkhand and empowering athletes through competitive excellence and inclusion.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors text-xs" aria-label="JPBA on Facebook">f</a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors text-xs" aria-label="JPBA on X">X</a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors text-xs" aria-label="JPBA on LinkedIn">in</a>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-white font-bold mb-2">About JPBA</h3>
            <div className="h-[2px] w-8 bg-[#C9A84C] mb-5" />
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-[#C9A84C] transition-colors">About the Association</Link></li>
              <li><Link href="/about/mission" className="hover:text-[#C9A84C] transition-colors">Mission & Purpose</Link></li>
              <li><Link href="/about/what-we-do" className="hover:text-[#C9A84C] transition-colors">What JPBA Does</Link></li>
              <li><Link href="/about/action-pathway" className="hover:text-[#C9A84C] transition-colors">Action Pathway</Link></li>
              <li><Link href="/about/90-day-plan" className="hover:text-[#C9A84C] transition-colors">90-Day Plan</Link></li>
            </ul>
          </div>

          {/* Column 3: Boccia */}
          <div>
            <h3 className="text-white font-bold mb-2">Learn Boccia</h3>
            <div className="h-[2px] w-8 bg-[#C9A84C] mb-5" />
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/boccia" className="hover:text-[#C9A84C] transition-colors">What is Boccia?</Link></li>
              <li><Link href="/classification" className="hover:text-[#C9A84C] transition-colors">Classification</Link></li>
              <li><Link href="/court" className="hover:text-[#C9A84C] transition-colors">Court & Equipment</Link></li>
              <li><Link href="/competition" className="hover:text-[#C9A84C] transition-colors">Competition</Link></li>
              <li><Link href="/development" className="hover:text-[#C9A84C] transition-colors">Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          {/* Contact — sits beside a dashed V-line like the court's throw line */}
          <div className="relative">
            <div className="absolute -left-4 top-1 bottom-1 w-px border-l border-dashed border-[#C9A84C]/40" aria-hidden="true" />
            <h3 className="text-white font-bold mb-2">Contact Us</h3>
            <div className="h-[2px] w-8 bg-[#C9A84C] mb-5" />
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#C9A84C] text-lg mt-0.5">+</span>
                <span>+91 8510902424</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9A84C] text-lg mt-0.5">@</span>
                <span>Bocciajharkhand@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9A84C] text-lg mt-0.5">*</span>
                <span>Ranchi, Jharkhand - 834001</span>
              </li>
            </ul>
            </div>
          </div>
        <div className="relative mt-16 mb-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/35 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-[7px] flex items-center gap-2 bg-[#0A2F1D] px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FDF8EF] shadow-[0_0_8px_2px_rgba(253,248,239,0.4)]" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; 2026 Jharkhand Para Boccia Association. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/register" className="hover:text-[#C9A84C] transition-colors">Register</Link>
            <Link href="/donate" className="hover:text-[#C9A84C] transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact</Link>
            <Link href="/events" className="hover:text-[#C9A84C] transition-colors">Events</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
