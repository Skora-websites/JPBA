"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ScoringPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[230px] pb-16 min-h-[280px] border-b border-[#C9A84C]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #FDF8EF 100%)" }}>
          <img src="/images/national-game.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(253,248,239,0.96) 0%, rgba(253,248,239,0.92) 38%, rgba(253,248,239,0.55) 62%, rgba(253,248,239,0.18) 82%, rgba(253,248,239,0.05) 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)"}} />
<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#B8923A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">SCORING</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Scoring in Boccia</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Points per ball closer to the jack.</p>
              </div>
              <div className="hidden lg:block">
                <div className="boccia-parallax boccia-img-container  overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="/images/national-game.webp" alt="Boccia balls and scoring" className="w-full h-[350px] object-cover boccia-drift" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Scoring in Boccia</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At the end of each end, the referee measures the distance of the balls closest to the jack and awards points â€” one point for each ball that is closer to the jack than the opponent's closest ball.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">How Points Work</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>The side with balls closer to the jack scores all points for that end</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If balls are equidistant, the point is not awarded</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>Maximum possible score per end depends on the format</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Special Situations</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If the jack goes out of bounds, the end is replayed</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If scores are tied after all ends, one additional end is played</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>Dead balls are removed from play</li>
                </ul>
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
