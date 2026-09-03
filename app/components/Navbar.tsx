"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: "Player Database 2026", href: "/get-involved/players-database" },
    { label: "Officials Database 2026", href: "/get-involved/officials" }
  ]},
  { label: "Competitions", children: [
    { label: "International Events", href: "/competitions/international" },
    { label: "National Events", href: "/competitions/national" },
    { label: "State Competitions", href: "/competitions/state" },
    { label: "Results", href: "/competitions/results" }
  ]},
  { label: "News & Media", children: [
    { label: "News", href: "/#official-federation-updates" },
    { label: "Circulars & Notices", href: "/news/circulars" },
    { label: "Gallery", href: "/#photo-gallery" },
    { label: "JPBA Tender", href: "/news/tenders" }
  ]},
  { label: "Selection Guidelines", href: "/selection-guidelines" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ onRegisterClick }: { onRegisterClick?: () => void } = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const [activeSubDD, setActiveSubDD] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveDD(null);
        setActiveSubDD(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Framer motion variants
  const dropdownVariants: any = {
    hidden: { opacity: 0, y: 15, scale: 0.95, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const subDropdownVariants: any = {
    hidden: { opacity: 0, x: -15, scale: 0.95, pointerEvents: "none" },
    visible: { opacity: 1, x: 0, scale: 1, pointerEvents: "auto", transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const mobileMenuVariants: any = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* TOP LOGO BAR */}
      <motion.div 
        className="w-full relative z-20 flex items-center justify-center overflow-hidden" style={{background: "linear-gradient(135deg, #0A2F1D 0%, #1B4E33 30%, #C9A84C 50%, #E8D5A3 65%, #FFFFFF 80%, #C9A84C 90%, #0A2F1D 100%)"}}
        initial={{ height: 105 }}
        animate={{ height: isScrolled ? 0 : 105, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-[1400px] w-full px-4 flex items-center justify-between h-full">
          {/* Logo Group */}
          <Link href="/" className="flex items-center gap-4 group h-full py-2">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full p-1">
              <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" priority />
            </div>
            {/* Vertical Separator */}
            <div className="hidden sm:block w-[1px] h-[60%] bg-white/20 mx-2" />
            <div className="flex flex-col justify-center">
              <h1 className="text-[14px] sm:text-[20px] font-bold text-white leading-tight tracking-wide font-sans">
                JHARKHAND PARA BOCCIA ASSOCIATION
              </h1>
              <h2 className="text-[11px] sm:text-[14px] font-semibold text-white/70 mt-1">
                झारखंड पैरा बोच्चिया एसोसिएशन
              </h2>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* NAVBAR ROW */}
      <div 
        ref={ref}
        className={`w-full transition-all duration-300 relative z-10 ${isScrolled ? 'bg-[#0A2F1D] shadow-lg' : 'bg-[#0A2F1D]'}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-14">
            
            {/* Mobile Logo (Visible only when scrolled) */}
            <div className="lg:hidden flex items-center">
              <AnimatePresence>
                {isScrolled && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link href="/" className="text-white font-bold tracking-widest text-sm">JPBA</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              {navigation.map((item) => (
                <div 
                  key={item.label} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => { if(item.children) setActiveDD(item.label); setActiveSubDD(null); }}
                  onMouseLeave={() => setActiveDD(null)}
                >
                  {item.href && !item.children ? (
                    <Link href={item.href} className="px-4 text-[12px] font-bold tracking-wider text-white hover:text-[#C9A84C] transition-colors uppercase h-full flex items-center relative group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  ) : (
                    <button className="px-4 text-[12px] font-bold tracking-wider text-white hover:text-[#C9A84C] transition-colors uppercase h-full flex items-center gap-1.5 relative group">
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
                          className="absolute top-[100%] left-0 pt-2 z-50 min-w-[260px]"
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

            {/* Login / Register Pill */}
            <div className="hidden lg:flex items-center">
              <Link href="/register" className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[12px] font-bold tracking-wider hover:bg-white transition-all shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                REGISTER
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white ml-auto" 
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
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 w-full bg-[#133824] shadow-2xl border-t border-[#C9A84C]/20 overflow-hidden"
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
                <div className="mt-4 pt-4 border-t border-white/10 px-2">
                  <Link 
                    href="/register" 
                    className="flex justify-center items-center gap-2 w-full py-3 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold tracking-wider"
                    onClick={() => setMobileOpen(false)}
                  >
                    PLAYER REGISTRATION
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gold stripe at bottom of nav row */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] opacity-50" />
      </div>

      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] z-30" style={{ background: "linear-gradient(to right, #0A2F1D 0%, #C9A84C 30%, #E8D5A3 50%, #C9A84C 70%, #0A2F1D 100%)" }} />
    </header>
  );
}


