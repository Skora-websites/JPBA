"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function CourtPage() {
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
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">EQUIPMENT</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Official Court</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">12.5m x 6m playing area.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="Official Court" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Official Court</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Boccia is played on a court measuring <strong>12.5m x 6m</strong> (41 ft x 20 ft) with 2m of empty, in-bounds, playable space around it. The surface is flat and smooth — typically a converted wooden basketball or volleyball court, but sometimes a hard turf surface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[28px] font-bold text-[#0A2F1D] mb-1">12.5m</p>
                <p className="text-[12px] text-gray-400 uppercase tracking-wider">Court Length</p>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[28px] font-bold text-[#0A2F1D] mb-1">6m</p>
                <p className="text-[12px] text-gray-400 uppercase tracking-wider">Court Width</p>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[28px] font-bold text-[#0A2F1D] mb-1">6</p>
                <p className="text-[12px] text-gray-400 uppercase tracking-wider">Throwing Boxes</p>
              </div>
            </div>
            <h3 className="text-[20px] font-bold text-[#0A2F1D] mb-4">Court Markings</h3>
            <ul className="space-y-3 text-[15px] text-gray-600">
              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />The throwing area is divided into six rectangular throwing boxes in which athletes must stay completely within during play.</li>
              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />A V-shaped line marks over which the jack must cross for the throw to be valid.</li>
              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />A cross marks the position where the jack must be placed if it touches or crosses the boundary line.</li>
              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />The "dead ball container" holds balls thrown outside the time limit or area of play.</li>
            </ul>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia1.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
