"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RolesPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/competition" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Competition</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Roles &amp; Responsibilities</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Roles &amp; Responsibilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl">The key roles during a Boccia match and what each person is responsible for.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {title: "The Athlete", desc: "The primary competitor. The athlete is responsible for all tactical decisions, delivering the ball (or directing the Ramp Operator), managing the clock, and competing within the rules.", icon: "🏃"},
            {title: "Coach", desc: "Provides guidance and strategy during training and between ends. During play, coaches must stay in the designated coaching area. They may communicate during authorized timeouts and between ends.", icon: "📋"},
            {title: "Sport Assistant (BC1)", desc: "May assist BC1 athletes by holding the footstop. Must not communicate tactical information, suggest shots, or influence decisions. The assistant is a mechanical support only.", icon: "🤝"},
            {title: "Ramp Operator (BC3)", desc: "Positions and aims the ramp under the athlete's direction. Must not make tactical decisions, communicate strategy, or suggest shot selection. A mechanical assistant role.", icon: "📐"},
            {title: "Referee", desc: "The on-court official responsible for match management. The referee conducts the coin toss, throws the jack, enforces rules, makes penalty decisions, measures distances, and announces scores.", icon: "⚖️"},
            {title: "Line Judges", desc: "Assist the referee in determining whether balls are in or out of the playing area. They position themselves at key points around the court boundary.", icon: "👁️"}
          ].map((role, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{role.icon}</span>
                <h3 className="text-xl font-bold text-[#0A2F1D]">{role.title}</h3>
              </div>
              <p className="text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
