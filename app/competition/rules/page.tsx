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
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COMPETITION</p>
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
