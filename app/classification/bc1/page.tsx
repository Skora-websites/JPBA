"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BC1Page() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/classification" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Classification</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">BC1</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-[#C9A84C] text-white flex items-center justify-center text-2xl font-bold">BC1</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D]">BC1</h1>
              <p className="text-xl text-gray-600">Athletes with Cerebral Palsy — Significant functional impairment</p>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Functional Profile</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              BC1 athletes have cerebral palsy (or a similar neurological condition) and demonstrate significant functional limitations in trunk control and limb function. They are able to demonstrate throwing/release ability with the hand, foot, or combined hand/foot action. However, they generally have difficulty maintaining a consistent throwing position and may require significant effort to release the ball.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most BC1 athletes compete from a wheelchair and have significant coordination difficulties that affect their ability to control the ball precisely. Despite these challenges, BC1 athletes demonstrate remarkable skill and tactical awareness in competition.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Delivery Method", desc: "Hand or foot delivery. Athletes may throw or roll the ball using any part of the hand, or kick using the foot."},
              {title: "Sport Assistant", desc: "BC1 athletes may have one Sport Assistant on court. The assistant may hold the footstop to stabilise the athlete's foot during delivery, but must not make tactical decisions or communicate strategy."},
              {title: "Events", desc: "BC1 Individual and BC1/BC2 Team. Athletes compete against others with similar functional ability."},
              {title: "Equipment", desc: "Standard Boccia balls. No assistive devices (ramps) permitted. Athletes deliver from their wheelchair position."},
              {title: "Ends & Timing", desc: "Individual: 4 ends, 6 balls each, 4-minute timed ends. Team: 4 ends with extended timing."},
              {title: "Important Rule", desc: "The Sport Assistant must remain neutral — no coaching, no tactical input, no communication about strategy during play."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                <h3 className="text-lg font-bold text-[#0A2F1D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
