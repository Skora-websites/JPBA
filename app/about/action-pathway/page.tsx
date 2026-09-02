"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ActionPathwayPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[120px] pb-16 min-h-[280px] border-b border-[#D4AF37]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #F0FFF0 100%)" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ACTION PATHWAY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">JPBA Action Pathway</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">DISCOVER. EQUIP. DEVELOP. COMPETE. CONNECT.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="JPBA Action Pathway" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-8">The JPBA Action Pathway</h2>
            <div className="space-y-6">
              {[{ stage: "DISCOVER", desc: "District demonstrations through schools, hospitals, rehabilitation centres and disability networks.", icon: "🔍" },
                { stage: "EQUIP", desc: "Providing balls, training targets, ramps and accessible venue partnerships.", icon: "📦" },
                { stage: "DEVELOP", desc: "Athlete-centred coaching, referee education and classification literacy programs.", icon: "📈" },
                { stage: "COMPETE", desc: "State calendar, data management, safeguarding and transparent selection.", icon: "🏆" },
                { stage: "CONNECT", desc: "Building partnerships with BSFI, government, CSR, health, education and media.", icon: "🤝" }].map((s, i) => (
                <div key={s.stage} className="flex items-start gap-5 rounded-xl bg-[#F5F5DC] border border-[#D4AF37]/20 p-6 hover:shadow-md transition-all">
                  <div className="text-3xl">{s.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block rounded-lg bg-[#1B5E20]/10 px-3 py-1 text-[12px] font-bold text-[#1B5E20] uppercase tracking-wider">Step {i + 1}</span>
                      <h3 className="text-[18px] font-bold text-[#1B5E20]">{s.stage}</h3>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
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
