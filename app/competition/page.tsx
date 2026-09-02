"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function CompetitionPage() {
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
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COMPETITION</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Competition Formats</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Individual, Pair, and Team events.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Competition Formats" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-6">Competition Formats</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Boccia competitions are organized across three formats: Individual, Pairs, and Team. Each format has specific requirements for athlete numbers, ends, and ball allocation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border border-[#D4AF37]/20 rounded-xl overflow-hidden">
                <thead className="bg-[#1B5E20] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Format</th>
                    <th className="px-4 py-3 text-left font-bold">Athletes</th>
                    <th className="px-4 py-3 text-left font-bold">Ends</th>
                    <th className="px-4 py-3 text-left font-bold">Balls/Team</th>
                    <th className="px-4 py-3 text-left font-bold">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-[#F5F5DC]"><td className="px-4 py-3 font-semibold text-[#1B5E20]">Individual</td><td className="px-4 py-3">1 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#1B5E20]">Pairs</td><td className="px-4 py-3">2 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6 (3 each)</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-[#F5F5DC]"><td className="px-4 py-3 font-semibold text-[#1B5E20]">Team</td><td className="px-4 py-3">3 per side</td><td className="px-4 py-3">6</td><td className="px-4 py-3">6 (2 each)</td><td className="px-4 py-3">6 min end / 2 min remaining</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-gray-400 mt-4">In pair and team events, a reserve player is allowed. One substitution per game is permitted between ends.</p>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
