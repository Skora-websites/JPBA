"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function CompetitionPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[180px] pb-16 min-h-[280px] border-b border-[#C9A84C]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #FDF8EF 100%)" }}>
          <img src="/boccia.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)"}} />
<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COMPETITION</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Competition Formats</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Individual, Pair, and Team events.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="Competition Formats" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Competition Formats</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Boccia competitions are organized across three formats: Individual, Pairs, and Team. Each format has specific requirements for athlete numbers, ends, and ball allocation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border border-[#C9A84C]/20 rounded-xl overflow-hidden">
                <thead className="bg-[#0A2F1D] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Format</th>
                    <th className="px-4 py-3 text-left font-bold">Athletes</th>
                    <th className="px-4 py-3 text-left font-bold">Ends</th>
                    <th className="px-4 py-3 text-left font-bold">Balls/Team</th>
                    <th className="px-4 py-3 text-left font-bold">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-[#FDF8EF]"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Individual</td><td className="px-4 py-3">1 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Pairs</td><td className="px-4 py-3">2 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6 (3 each)</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-[#FDF8EF]"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Team</td><td className="px-4 py-3">3 per side</td><td className="px-4 py-3">6</td><td className="px-4 py-3">6 (2 each)</td><td className="px-4 py-3">6 min end / 2 min remaining</td></tr>
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
