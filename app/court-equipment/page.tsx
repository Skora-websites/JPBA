"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function CourtEquipmentPage() {
  const [showReg, setShowReg] = useState(false);
  const sections = [
    {icon: "📐", title: "Official Court", desc: "12.5m × 6m playing area with throwing boxes, V-lines, cross, and boundary markings.", href: "/court", color: "#1B5E20"},
    {icon: "🔴", title: "Boccia Balls", desc: "13-ball set (6 red, 6 blue, 1 white jack) with detailed specifications for weight, size, and behaviour.", href: "/court-equipment/balls", color: "#2E7D32"},
    {icon: "♿", title: "Wheelchair & Seating", desc: "Wheelchair configuration, postural support systems, and athlete positioning for competition.", href: "/court-equipment/wheelchair-seating", color: "#388E3C"},
    {icon: "🛝", title: "BC3 Ramp & Pointer", desc: "Assistive ramp system, release devices (mouth stick, chin stick, head pointer), and Ramp Operator rules.", href: "/court-equipment/ramp-pointer", color: "#43A047"},
    {icon: "✅", title: "Equipment Testing", desc: "Pre-match equipment control, ball inspection, roll tests, and post-match procedures.", href: "/court-equipment/testing", color: "#4CAF50"}
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COURT &amp; EQUIPMENT</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Court &amp; Equipment</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Official court dimensions, ball specifications, wheelchair systems, BC3 ramps, and equipment testing.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80" alt="Court and Equipment" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((s, i) => (
                <Link key={i} href={s.href} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: s.color + "15"}}>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B5E20] mb-2 group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                  <span className="inline-block mt-4 text-sm font-bold text-[#D4AF37]">Explore →</span>
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
