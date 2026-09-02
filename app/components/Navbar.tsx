"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT JPBA", children: [
    { label: "About the Association", href: "/about" },
    { label: "Mission & Purpose", href: "/about/mission" },
    { label: "What JPBA Does", href: "/about/what-we-do" },
    { label: "Action Pathway", href: "/about/action-pathway" },
    { label: "90-Day Plan", href: "/about/90-day-plan" },
  ]},
  { label: "BOCCIA", children: [
    { label: "What is Boccia?", href: "/boccia" },
    { label: "Why Boccia Matters", href: "/boccia/why-boccia" },
    { label: "History", href: "/boccia/history" },
    { label: "How the Game Works", href: "/boccia/how-it-works" },
    { label: "Scoring", href: "/boccia/scoring" },
    { label: "Tactics & Strategy", href: "/boccia/tactics" },
    { label: "Common Misunderstandings", href: "/boccia/myths" },
  ]},
  { label: "CLASSIFICATION", children: [
    { label: "Who Can Play?", href: "/classification" },
    { label: "Eligible Impairments", href: "/classification/impairments" },
    { label: "BC1", href: "/classification/bc1" },
    { label: "BC2", href: "/classification/bc2" },
    { label: "BC3", href: "/classification/bc3" },
    { label: "BC4", href: "/classification/bc4" },
  ]},
  { label: "COURT & EQUIP", children: [
    { label: "Official Court", href: "/court" },
    { label: "Boccia Balls", href: "/court-equipment/balls" },
    { label: "Wheelchair & Seating", href: "/court-equipment/wheelchair-seating" },
    { label: "BC3 Ramp & Pointer", href: "/court-equipment/ramp-pointer" },
    { label: "Equipment Testing", href: "/court-equipment/testing" },
  ]},
  { label: "COMPETITION", children: [
    { label: "Formats", href: "/competition" },
    { label: "Match Procedures", href: "/competition/procedures" },
    { label: "Roles & Responsibilities", href: "/competition/roles" },
    { label: "Rules & Penalties", href: "/competition/rules-penalties" },
  ]},
  { label: "DEVELOPMENT", children: [
    { label: "Development Pathway", href: "/development" },
    { label: "Essential Skills", href: "/development/skills" },
    { label: "Coaching Drills", href: "/development/coaching-drills" },
  ]},
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar({ onRegisterClick }: { onRegisterClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveDD(null); setMobileOpen(false); setMobileSection(null);
      }
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  const hdrCls = `fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${isScrolled ? "bg-[#F5F5DC]/98 backdrop-blur-xl shadow-[0_2px_20px_rgba(27,67,50,0.08)] py-2" : "bg-[#F5F5DC]/95 backdrop-blur-sm py-3"}`;

  return (
    <header className={hdrCls}>
      <div className="jpba-stripe absolute bottom-0 left-0 w-full" />
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 bg-white rounded-full p-1 shadow-sm border border-[#D4AF37]/10">
              <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-[#1B5E20] leading-none tracking-tight">JPBA</span>
              <span className="text-[9px] font-semibold text-gray-600 uppercase tracking-[0.2em] mt-0.5">Jharkhand Para Boccia</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div key={item.label} className="relative mega-menu-trigger" onMouseEnter={() => item.children && setActiveDD(item.label)} onMouseLeave={() => setActiveDD(null)}>
                {item.href ? (
                  <Link href={item.href} className="px-3 py-2 text-[11px] font-bold tracking-wider text-gray-700 hover:text-[#1B5E20] transition-colors">{item.label}</Link>
                ) : (
                  <button className="px-3 py-2 text-[11px] font-bold tracking-wider text-gray-700 hover:text-[#1B5E20] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                )}
                {item.children && activeDD === item.label && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-[#D4AF37]/20 p-5 min-w-[300px]">
                      <div className="grid gap-0.5">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-[#F5F5DC] transition-colors group">
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1B5E20] transition-colors">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <Link href="/register" className="px-5 py-2 bg-[#1B5E20] text-white text-[11px] font-bold tracking-wider rounded-lg hover:bg-[#1B5E20] transition-all duration-200 shadow-sm hover:shadow-md">REGISTER</Link>
          </div>

          <button className="xl:hidden p-2 text-[#1B5E20]" onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null); }} aria-label="Toggle menu">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-[#D4AF37]/20 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            {mobileSection === null ? (
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className="block py-3 text-sm font-bold text-gray-700 hover:text-[#1B5E20] transition-colors border-b border-[#D4AF37]/10" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                    ) : (
                      <button className="w-full text-left py-3 text-sm font-bold text-gray-700 hover:text-[#1B5E20] transition-colors border-b border-[#D4AF37]/10 flex items-center justify-between" onClick={() => setMobileSection(item.label)}>
                        {item.label}
                        <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    )}
                  </div>
                ))}
                <Link href="/register" className="mt-4 block text-center py-3 bg-[#1B5E20] text-white text-sm font-bold rounded-lg" onClick={() => setMobileOpen(false)}>REGISTER</Link>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <button className="flex items-center gap-2 py-3 text-sm font-bold text-[#1B5E20] border-b border-[#D4AF37]/10" onClick={() => setMobileSection(null)}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                {navigation.find((n) => n.label === mobileSection)?.children?.map((child) => (
                  <Link key={child.href} href={child.href} className="block py-3 px-2 text-sm font-semibold text-gray-700 hover:bg-[#F5F5DC] rounded-lg border-b border-[#D4AF37]/10" onClick={() => setMobileOpen(false)}>{child.label}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
