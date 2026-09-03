"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BC4Page() {
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
            <span className="text-gray-500">BC4</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-[#C9A84C] text-white flex items-center justify-center text-2xl font-bold">BC4</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D]">BC4</h1>
              <p className="text-xl text-gray-600">Athletes with Non-CP conditions — Other severe impairments</p>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Functional Profile</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              BC4 is for athletes who have a physical disability that is NOT primarily caused by cerebral palsy, but who demonstrate similar functional limitations. This class was created to ensure fair competition for athletes whose impairments stem from conditions other than CP.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              BC4 athletes typically have other non-cerebral palsy conditions such as muscular dystrophy, spinal muscular atrophy, or other progressive neuromuscular conditions. They deliver the ball independently using hand or foot.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Delivery Method", desc: "Hand or foot delivery. Athletes deliver independently from their wheelchair within the throwing box."},
              {title: "No On-Court Assistant", desc: "BC4 athletes compete independently with no Sport Assistant or Ramp Operator on court."},
              {title: "Events", desc: "BC4 Individual and BC4 Pair. BC4 has both individual and pair competition at the Paralympic level."},
              {title: "Common Conditions", desc: "Muscular dystrophy, spinal muscular atrophy, Friedreich's ataxia, and other progressive or non-CP neuromuscular conditions."},
              {title: "Ends & Timing", desc: "Individual: 4 ends, 6 balls each, 4-minute timed ends. Pair: 4 ends with pair timing."},
              {title: "Performance Level", desc: "BC4 athletes demonstrate high-level precision and tactical ability, often producing some of the most competitive matches in Boccia."}
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
