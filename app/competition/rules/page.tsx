"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function RulesPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[180px] pb-16 min-h-[280px] border-b border-[#C9A84C]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #FDF8EF 100%)" }}>
          <img src="/boccia.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(253,248,239,0.96) 0%, rgba(253,248,239,0.92) 38%, rgba(253,248,239,0.55) 62%, rgba(253,248,239,0.18) 82%, rgba(253,248,239,0.05) 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)"}} />
<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#B8923A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COMPETITION</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Rules & Penalties</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Cards, forfeits, and tie-breaks.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="Rules & Penalties" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
