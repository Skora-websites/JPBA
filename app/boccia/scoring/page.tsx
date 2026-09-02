"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ScoringPage() {
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
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">SCORING</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Scoring in Boccia</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Points per ball closer to the jack.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Scoring in Boccia" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-6">Scoring in Boccia</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At the end of each end, the referee measures the distance of the balls closest to the jack and awards points — one point for each ball that is closer to the jack than the opponent's closest ball.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-[#F5F5DC] border border-[#D4AF37]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#1B5E20] mb-3">How Points Work</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>The side with balls closer to the jack scores all points for that end</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>If balls are equidistant, the point is not awarded</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>Maximum possible score per end depends on the format</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#F5F5DC] border border-[#D4AF37]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#1B5E20] mb-3">Special Situations</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>If the jack goes out of bounds, the end is replayed</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>If scores are tied after all ends, one additional end is played</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-1">●</span>Dead balls are removed from play</li>
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
