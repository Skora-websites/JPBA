"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function QuickRulesPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/resources" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Resources</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Quick Rules Reference</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Quick Rules Reference</h1>
          <p className="text-xl text-gray-600 max-w-3xl">A compact rulebook reference for coaches, athletes, and officials.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {[
          {title: "Court", content: "12.5m × 6m playing area. Six throwing boxes (1–6) at one end. V-lines in corners. Cross at centre. Boundary lines define in/out."},
          {title: "Set", content: "6 red balls, 6 blue balls, 1 white jack = 13 balls total. One colour per side."},
          {title: "Ball Specifications", content: "Weight: ~275g. Circumference: 270mm ± 8mm. Outer: leather or synthetic. Filling: plastic granules."},
          {title: "Scoring", content: "One point per ball closer to the jack than the opponent's nearest ball. Maximum score per end: 6 points. Only one side scores per end."},
          {title: "Jack Out", content: "If the jack goes out of bounds, the end is replayed with a new jack."},
          {title: "Dead Balls", content: "Balls that go out of bounds or don't land in the playing area are removed and don't count."},
          {title: "Individual", content: "4 ends, 6 balls per athlete. 4-minute timed ends. 1-minute between ends."},
          {title: "Pair", content: "4 ends. Two athletes per side. 6 balls per end (3 per athlete). Extended timing."},
          {title: "Team", content: "4 ends. Three athletes per side (BC1/BC2). 6 balls per end. Extended timing. Athletes rotate."},
          {title: "BC3 Ramp", content: "Ramp operator positions only. Athlete controls all decisions. No tactical communication allowed."},
          {title: "Penalty Ball", content: "One point to opponent. Offending ball removed. Used for serious infringements."},
          {title: "Tie-Break", content: "3 balls per side. Nearest ball to jack wins the match. Jack re-thrown if it goes out."}
        ].map((section, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10 mb-4">
            <h3 className="text-lg font-bold text-[#1B5E20] mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
