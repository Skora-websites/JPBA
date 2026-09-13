"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function CourtEquipmentPage() {
  const [showReg, setShowReg] = useState(false);
  const sections = [
    {icon: "ðŸ“", title: "Official Court", desc: "12.5m Ã— 6m playing area with throwing boxes, V-lines, cross, and boundary markings.", href: "/court", color: "#0A2F1D"},
    {icon: "ðŸ”´", title: "Boccia Balls", desc: "13-ball set (6 red, 6 blue, 1 white jack) with detailed specifications for weight, size, and behaviour.", href: "/court-equipment/balls", color: "#133824"},
    {icon: "â™¿", title: "Wheelchair & Seating", desc: "Wheelchair configuration, postural support systems, and athlete positioning for competition.", href: "/court-equipment/wheelchair-seating", color: "#1B4E33"},
    {icon: "ðŸ›", title: "BC3 Ramp & Pointer", desc: "Assistive ramp system, release devices (mouth stick, chin stick, head pointer), and Ramp Operator rules.", href: "/court-equipment/ramp-pointer", color: "#29774D"},
    {icon: "âœ…", title: "Equipment Testing", desc: "Pre-match equipment control, ball inspection, roll tests, and post-match procedures.", href: "/court-equipment/testing", color: "#C9A84C"}
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[230px] pb-16 min-h-[320px] border-b border-[#C9A84C]/20" style={{background: "linear-gradient(135deg, #0A2F1D 0%, #133824 40%, #1B4E33 100%)"}}>
          <img src="/images/dsc09824.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-texture-court pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(253,248,239,0.97) 0%, rgba(253,248,239,0.94) 30%, rgba(253,248,239,0.7) 44%, rgba(253,248,239,0.2) 56%, rgba(253,248,239,0) 70%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)"}} />
<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#B8923A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COURT &amp; EQUIPMENT</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Court &amp; Equipment</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Official court dimensions, ball specifications, wheelchair systems, BC3 ramps, and equipment testing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((s, i) => (
                <Link key={i} href={s.href} className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 hover:shadow-xl hover:border-[#C9A84C]/30 transition-all group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: s.color + "15"}}>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2F1D] mb-2 group-hover:text-[#C9A84C] transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                  <span className="inline-block mt-4 text-sm font-bold text-[#C9A84C]">Explore â†’</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
