"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function DevelopmentPage() {
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
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ATHLETE PATHWAY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Development Pathway</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Community to Paralympic progression.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Development Pathway" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-8">Athlete Development Pathway</h2>
            <div className="space-y-4">
              {["Community", "Identify", "Develop", "Classify", "Compete", "State", "National", "International", "Paralympic"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#1B5E20] flex items-center justify-center text-white font-bold shrink-0">{i + 1}</div>
                  <div className="rounded-xl bg-[#F5F5DC] border border-[#D4AF37]/20 p-4 flex-1">
                    <h3 className="text-[16px] font-bold text-[#1B5E20]">{stage}</h3>
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
