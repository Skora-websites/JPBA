"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MythsPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const myths = [
    {myth: "Boccia is only for cerebral palsy", reality: "While Boccia was originally designed for athletes with cerebral palsy, it is open to all athletes with severe physical disabilities that affect motor function. Eligibility is determined through classification, not diagnosis alone."},
    {myth: "Diagnosis automatically determines class", reality: "Diagnosis does NOT automatically determine class. Classification is based on functional ability during sport-specific testing, not medical records alone. Two athletes with the same diagnosis may be classified differently."},
    {myth: "BC1 uses a ramp", reality: "BC1 athletes deliver the ball by hand or foot. Only BC3 athletes use a ramp (assistive device) with the help of a Ramp Operator. BC1 athletes may have a Sport Assistant, but not a ramp."},
    {myth: "Ramp Operators make tactical decisions", reality: "Ramp Operators position and aim the ramp under direction from the athlete, but do NOT make tactical decisions. The athlete controls all strategic choices including where the jack goes and which balls to play."},
    {myth: "BC2 has an on-court assistant", reality: "BC2 athletes deliver independently with no on-court assistant. Only BC1 athletes may have a Sport Assistant (who holds the footstop), and only BC3 athletes have a Ramp Operator."},
    {myth: "Strength alone wins matches", reality: "Boccia is a precision sport. Power without accuracy is ineffective. Successful athletes combine touch, strategy, and composure with delivery skill. Soft shots are often more effective than hard ones."},
    {myth: "Recreational and competitive eligibility are the same", reality: "Recreational Boccia is open to everyone — including people without disabilities. Official competitive eligibility requires formal classification through World Boccia protocols. The two are distinctly different."},
    {myth: "Boccia is not a serious sport", reality: "Boccia is a high-performance Paralympic sport requiring elite athleticism, tactical intelligence, years of training, and mental discipline. It demands the same dedication as any Olympic discipline."}
  ];
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/boccia" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Boccia</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Common Misunderstandings</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Common Misunderstandings</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Separating fact from fiction — correcting the most common misconceptions about Boccia.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {myths.map((m, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md border border-[#C9A84C]/10 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-red-700 mb-1">MYTH: {m.myth}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{m.reality}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
