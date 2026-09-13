"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

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
                <PageHero
          image={PAGE_HERO.courtEquipment}
          imageAlt="The championship venue with courts set up"
          eyebrow="COURT & EQUIPMENT"
          title={"Court & Equipment"}
          description="Official court dimensions, ball specifications, wheelchair systems, BC3 ramps, and equipment testing."
          breadcrumb={[{"label": "Boccia", "href": "/boccia"}, {"label": "Court & Equipment"}]}
          size={"lg"}
          reverse
        />

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
