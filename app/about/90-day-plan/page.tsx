"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function NinetyDayPlanPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[180px] pb-16 min-h-[280px] border-b border-[#C9A84C]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #FDF8EF 100%)" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">DEVELOPMENT</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">90-Day Development Plan</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">MAP. MOBILISE. MEASURE.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="90-Day Development Plan" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-8">JPBA 90-Day Development Plan</h2>
            <div className="space-y-8">
              {[{ phase: "MAP", days: "Days 1-30", color: "forest", items: ["District leads", "Athlete mapping", "Venue assessment", "Clinician partnerships", "Equipment procurement", "Safeguarding protocols"] },
                { phase: "MOBILISE", days: "Days 31-60", color: "gold", items: ["District demonstrations", "Coach training", "Referee education", "Athlete profiles", "Practice hub establishment"] },
                { phase: "MEASURE", days: "Days 61-90", color: "dark-green", items: ["Assessment camps", "Call-room simulation", "Event calendar", "Classification sessions", "National pathway dossiers"] }].map((p) => (
                <div key={p.phase} className="rounded-xl border border-[#C9A84C]/20 overflow-hidden">
                  <div className={"bg-" + p.color + " px-6 py-4 flex items-center justify-between"}>
                    <h3 className="text-[20px] font-bold text-white">{p.phase}</h3>
                    <span className="text-white/80 text-[14px]">{p.days}</span>
                  </div>
                  <div className="p-6 bg-[#FDF8EF]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {p.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[14px] text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-current shrink-0" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
