"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", children: [
    { label: "About Boccia", href: "/about/about-boccia" },
    { label: "Board", href: "/about/board" },
    { label: "Affiliations", href: "/about/affiliations" },
    { label: "MYAS Disclosures", children: [
      { label: "Governance", href: "/myas/governance-docs" },
      { label: "Compliance & Regulations", href: "/myas/compliance-regulations-docs" }
    ]}
  ]},
  { label: "Our Sport", children: [
    { label: "Rules", href: "/sport/rules" },
    { label: "Anti-Doping", href: "/sport/anti-doping" },
    { label: "Classification", href: "/sport/classification" },
    { label: "Equipment", href: "/sport/equipment" }
  ]},
  { label: "Get Involved", children: [
    { label: "Membership", href: "/get-involved/membership" },
    { label: "Player Database 2026", href: "/get-involved/player-database" },
    { label: "Officials Database 2026", href: "/get-involved/officials" }
  ]},
  { label: "Competitions", children: [
    { label: "International Events", href: "/competitions/international" },
    { label: "National Events", href: "/competitions/national" },
    { label: "State Competitions", href: "/competitions/state" },
    { label: "Results", href: "/competitions/results" }
  ]},
  { label: "News & Media", children: [
    { label: "News", href: "/news" },
    { label: "Circulars & Notices", href: "/news/circulars" },
    { label: "Gallery", href: "/gallery" },
    { label: "Videos", href: "/videos" },
    { label: "JPBA Tender", href: "/news/tenders" }
  ]},
  { label: "Selection Guidelines", href: "/selection-guidelines" },
  { label: "Contact Us", href: "/contact" },
];

// Callers may still pass onRegisterClick (legacy modal pages); it is
// intentionally not bound — REGISTER always navigates to /register, the
// Player/Official Google Forms choice page.
export default function Navbar({}: { onRegisterClick?: () => void } = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const [activeSubDD, setActiveSubDD] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDD(null);
        setActiveSubDD(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Framer motion variants
  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const subDropdownVariants: Variants = {
    hidden: { opacity: 0, x: -15, scale: 0.95, pointerEvents: "none" },
    visible: { opacity: 1, x: 0, scale: 1, pointerEvents: "auto", transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <>
      {/* ═══ HEADER — green (left) to gold (right), deep green text. Scrolls away naturally. ═══ */}
      <header className="relative z-40">
        <div
          className="w-full relative overflow-hidden"
          style={{
            background: [
              "radial-gradient(80% 240% at 0% 0%, #0A2F1D 0%, rgba(10,47,29,0.55) 28%, rgba(10,47,29,0) 58%)",
              "radial-gradient(80% 240% at 100% 100%, #C9A84C 0%, rgba(201,168,76,0.55) 28%, rgba(201,168,76,0) 58%)",
              "#FDF8EF",
            ].join(", "),
          }}
        >
          <div className="relative max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 py-1.5 sm:py-2 flex items-center">
              {/* Logo — pinned left (smaller on phones so the centered name never collides) */}
            <Link href="/" className="flex items-center gap-3 sm:gap-5 group shrink-0 relative z-10">
              <div className="relative h-16 w-16 shrink-0 sm:h-28 sm:w-28 lg:h-40 lg:w-40 rounded-full p-1">
                <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" priority />
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-[#0A2F1D]/25 mx-1" />
            </Link>
            {/* Text — truly centered in the band regardless of logo width */}
            <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center w-max max-w-[50vw] sm:max-w-[70vw] lg:max-w-none">
              <h1 className="text-[13px] sm:text-[22px] lg:text-[25px] font-bold text-[#0A2F1D] leading-tight sm:tracking-wide font-sans">
                JHARKHAND PARA BOCCIA ASSOCIATION
              </h1>
              <h2 className="text-[11px] sm:text-[15px] lg:text-[17px] font-semibold text-[#1B4E33] mt-0.5 sm:mt-1">
                झारखंड पैरा बोच्चिया एसोसिएशन
              </h2>
            </Link>
          </div>
        </div>
        {/* Gold accent line under the band */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#0A2F1D] via-[#E8D5A3] to-[#C9A84C]" />
      </header>

      {/* ═══ NAVBAR — rounded container straddling the header's bottom edge; sticks to the top when scrolled past ═══ */}
      <div ref={navRef} className="sticky top-0 z-[100] -mt-7 lg:-mt-8">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-3">

            {/* Rounded dark-green nav container */}
            <nav className="flex-1 flex items-center justify-between h-14 lg:h-16 bg-[#0A2F1D] rounded-full border border-[#C9A84C]/30 pl-3 pr-2 lg:pl-8 lg:pr-4 overflow-visible shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_rgba(10,47,29,0.28)]">

              {/* Compact brand — keeps the pill balanced on mobile/tablet */}
              <Link href="/" className="xl:hidden flex items-center gap-2.5 pl-1 min-w-0">
                <div className="relative h-9 w-9 shrink-0">
                  <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" />
                </div>
                <span className="font-black tracking-wider text-white text-sm">JPBA</span>
              </Link>

              {/* Desktop Navigation — links distributed with equal gaps between them */}
              <div className="hidden xl:flex items-center justify-between flex-1 h-full pl-2 mr-4">
                {navigation.map((item) => (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => { if(item.children) setActiveDD(item.label); setActiveSubDD(null); }}
                    onMouseLeave={() => setActiveDD(null)}
                  >
                    {item.href && !item.children ? (
                      <Link href={item.href} className="px-3 xl:px-3 2xl:px-4 text-[12px] font-bold tracking-wider text-white hover:text-[#C9A84C] focus-visible:text-[#C9A84C] focus-visible:outline-none transition-colors uppercase h-full flex items-center relative group">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      </Link>
                    ) : (
                      <button
                        aria-haspopup="true"
                        aria-expanded={activeDD === item.label}
                        className="px-3 xl:px-3 2xl:px-4 text-[12px] font-bold tracking-wider text-white hover:text-[#C9A84C] focus-visible:text-[#C9A84C] focus-visible:outline-none transition-colors uppercase h-full flex items-center gap-1.5 relative group">
                        {item.label}
                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDD === item.label ? 'rotate-180 text-[#C9A84C]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        {activeDD === item.label && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C9A84C]" />}
                      </button>
                    )}

                    {/* Desktop Dropdown */}
                    {item.children && (
                      <AnimatePresence>
                        {activeDD === item.label && (
                          <motion.div
                            className="absolute top-[100%] left-0 pt-3 z-50 min-w-[260px]"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <div className="bg-white rounded-b-xl shadow-xl border-t-4 border-[#C9A84C] p-3">
                              <div className="flex flex-col gap-1">
                                {item.children.map((child) => (
                                  <div
                                    key={child.label}
                                    className="relative group/sublink"
                                    onMouseEnter={() => child.children ? setActiveSubDD(child.label) : setActiveSubDD(null)}
                                  >
                                    {child.href ? (
                                      <Link
                                        href={child.href}
                                        className="px-4 py-2.5 text-[13px] font-semibold text-[#133824] hover:bg-[#FDF8EF] hover:text-[#C9A84C] rounded-md transition-colors flex items-center justify-between"
                                        onClick={() => {
                                          setActiveDD(null);
                                          setActiveSubDD(null);
                                          if (child.href?.startsWith('/#')) {
                                            const id = child.href.slice(2);
                                            const el = document.getElementById(id);
                                            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                                          }
                                        }}
                                      >
                                        {child.label}
                                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/sublink:opacity-100 group-hover/sublink:translate-x-0 transition-all text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                      </Link>
                                    ) : (
                                      <button
                                        className="w-full px-4 py-2.5 text-[13px] font-semibold text-[#133824] hover:bg-[#FDF8EF] hover:text-[#C9A84C] rounded-md transition-colors flex items-center justify-between"
                                      >
                                        {child.label}
                                        <svg className={`w-4 h-4 transition-all text-[#C9A84C] ${activeSubDD === child.label ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                      </button>
                                    )}

                                    {/* Sub-dropdown */}
                                    {child.children && (
                                      <AnimatePresence>
                                        {activeSubDD === child.label && (
                                          <motion.div
                                            className="absolute top-0 left-full pl-2 z-50 min-w-[240px]"
                                            variants={subDropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                          >
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                                              {child.children.map((subChild) => (
                                                <Link
                                                  key={subChild.href}
                                                  href={subChild.href!}
                                                  className="block px-4 py-2 text-[12px] font-semibold text-[#133824] hover:bg-[#FDF8EF] hover:text-[#C9A84C] rounded-md transition-colors"
                                                >
                                                  {subChild.label}
                                                </Link>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Donate pill (desktop) */}
              <div className="hidden xl:flex items-center">
                <Link href="/donate" className="flex items-center gap-2 px-5 py-2 mr-1 rounded-full border border-[#C9A84C]/80 text-[#C9A84C] text-[12px] font-bold tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] hover:border-[#C9A84C] active:scale-95 transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  DONATE
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="xl:hidden p-2.5 -mr-1 text-white ml-auto rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </nav>

            {/* Register — standalone pill button (outside the nav container) */}
            <Link
              href="/register"
              className="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[11px] sm:text-[12px] font-bold tracking-wider hover:bg-[#E8D5A3] hover:scale-[1.03] active:scale-95 transition-all shadow-md shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
              REGISTER
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="xl:hidden absolute top-full left-0 w-full bg-[#133824] shadow-2xl border-t border-[#C9A84C]/20 rounded-b-2xl overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="max-h-[75vh] overflow-y-auto px-4 py-4 flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.label} className="border-b border-white/5 last:border-0">
                    {item.href && !item.children ? (
                      <Link
                        href={item.href}
                        className="block py-3.5 px-2 text-[13px] font-bold text-white tracking-widest hover:text-[#C9A84C]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          aria-expanded={mobileExpanded === item.label}
                          className="w-full flex items-center justify-between py-3.5 px-2 text-[13px] font-bold text-white tracking-widest hover:text-[#C9A84C]"
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        >
                          {item.label}
                          <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180 text-[#C9A84C]' : 'opacity-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && item.children && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-[#0A2F1D]/50 rounded-lg mx-2 mb-2"
                            >
                              <div className="flex flex-col py-2">
                                {item.children.map((child) => (
                                  <div key={child.label}>
                                    {child.href ? (
                                      <Link
                                        href={child.href}
                                        className="block py-2.5 px-4 text-[13px] font-semibold text-white/80 hover:text-[#C9A84C] hover:bg-white/5"
                                        onClick={() => {
                                          setMobileOpen(false);
                                          if (child.href?.startsWith('/#')) {
                                            const id = child.href.slice(2);
                                            const el = document.getElementById(id);
                                            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                                          }
                                        }}
                                      >
                                        {child.label}
                                      </Link>
                                    ) : (
                                      <>
                                        <button
                                          className="w-full flex items-center justify-between py-2.5 px-4 text-[13px] font-semibold text-white/80 hover:text-[#C9A84C] hover:bg-white/5"
                                          onClick={() => setMobileSubExpanded(mobileSubExpanded === child.label ? null : child.label)}
                                        >
                                          {child.label}
                                          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubExpanded === child.label ? 'rotate-180 text-[#C9A84C]' : 'opacity-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        <AnimatePresence>
                                          {mobileSubExpanded === child.label && child.children && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: "auto", opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden bg-[#0A2F1D]/30 mx-2 rounded"
                                            >
                                              {child.children.map((subChild) => (
                                                <Link
                                                  key={subChild.href}
                                                  href={subChild.href!}
                                                  className="block py-2 px-6 text-[12px] font-medium text-white/60 hover:text-[#C9A84C] hover:bg-white/5"
                                                  onClick={() => setMobileOpen(false)}
                                                >
                                                  {subChild.label}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10 px-2 flex gap-3">
                  <Link
                    href="/donate"
                    className="flex flex-1 justify-center items-center gap-2 py-3 rounded-full border border-[#C9A84C]/80 text-[#C9A84C] text-[12px] font-bold tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    DONATE
                  </Link>
                  <Link
                    href="/register"
                    className="flex flex-1 justify-center items-center gap-2 py-3 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[12px] font-bold tracking-wider hover:bg-[#E8D5A3] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    REGISTER
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
