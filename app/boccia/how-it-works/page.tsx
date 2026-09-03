"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function HowItWorksPage() {
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
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">HOW TO PLAY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">How the Game Works</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Six-step sequence from jack delivery to scoring.</p>
              </div>
              <div className="hidden lg:block">
                <div className="boccia-parallax boccia-img-container  overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="/boccia1.png" alt="Boccia game in progress" className="w-full h-[350px] object-cover boccia-drift-reverse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">The Six-Step Game Flow</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Each end follows a precise sequence. The objective is simple: finish with more balls closer to the jack than your opponent.
            </p>
            <div className="space-y-4">
              {[
                { step: "1", title: "Receive the Jack", desc: "The referee gives the jack to the player designated by the coin toss." },
                { step: "2", title: "Deliver a Valid Jack", desc: "The jack must cross the V-line and end up in the target box area to be valid." },
                { step: "3", title: "Play First Coloured Ball", desc: "The player who delivered the jack throws the first coloured ball (red or blue)." },
                { step: "4", title: "Opponent Responds", desc: "The opponent plays their first ball, trying to get closer to the jack." },
                { step: "5", title: "Farther Side Continues", desc: "The side with balls farther from the jack continues until they are closest or run out of balls." },
                { step: "6", title: "Measure and Score", desc: "The referee measures distances and awards points — one point per ball closer to the jack than the opponent's nearest." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-5">
                  <div className="h-10 w-10 rounded-full bg-[#0A2F1D] flex items-center justify-center text-white font-bold shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0A2F1D] mb-1">{s.title}</h3>
                    <p className="text-[14px] text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
