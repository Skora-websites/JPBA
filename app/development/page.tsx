"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function DevelopmentPage() {
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
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ATHLETE PATHWAY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Development Pathway</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Community to Paralympic progression.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="Development Pathway" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-8">Athlete Development Pathway</h2>
            <div className="space-y-4">
              {["Community", "Identify", "Develop", "Classify", "Compete", "State", "National", "International", "Paralympic"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A2F1D] flex items-center justify-center text-white font-bold shrink-0">{i + 1}</div>
                  <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-4 flex-1">
                    <h3 className="text-[16px] font-bold text-[#0A2F1D]">{stage}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
        </ScrollReveal>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
