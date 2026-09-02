"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function WhyBocciaPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/boccia" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Boccia</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Why Boccia Matters</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Why Boccia Matters</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Discover why Boccia is one of the most important Paralympic sports and how it creates opportunities for athletes with severe physical disabilities.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "🎯", title: "Precision Sport", desc: "Boccia is a Paralympic precision ball sport combining accuracy, strategy, concentration, ball control and decision-making. Athletes deliver balls as close to a target jack as possible."},
              {icon: "♿", title: "True Inclusion", desc: "Boccia is one of only two Paralympic sports without an Olympic equivalent. It was designed specifically for athletes with severe physical disabilities who use wheelchairs."},
              {icon: "🌍", title: "Global Reach", desc: "Governed by World Boccia, the sport is played in over 75 countries and provides competitive pathways from community level to the Paralympic Games."},
              {icon: "🧠", title: "Strategic Depth", desc: "Behind every delivery is a complex tactical decision. Athletes read the court, assess risk, manage time, and adapt strategy with each ball."},
              {icon: "🤝", title: "Shared Language", desc: "Boccia creates a shared language for athletes, families, coaches, officials, schools, NGOs, administrators and sponsors — uniting communities through sport."},
              {icon: "🏛️", title: "Paralympic Heritage", desc: "Boccia has been a Paralympic sport since 1984, growing from a rehabilitation activity into a high-performance competitive discipline."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#1B5E20]/10 flex items-center justify-center mb-4">
                  <span className="text-[#1B5E20] text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Why It Matters</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#D4AF37]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Boccia matters because it provides a competitive platform for some of the most physically impaired athletes in the world. For many, it is the only sport they can compete in — making it an essential part of the Paralympic movement and inclusive sport ecosystem.
            </p>
            <ul className="space-y-3">
              {[
                "<strong>Inclusive by design:</strong> Boccia was created for athletes with cerebral palsy and similar conditions, giving them a competitive sporting outlet.",
                "<strong>Cognitive and physical challenge:</strong> The sport demands mental sharpness alongside physical precision — no two ends play the same way.",
                "<strong>Pathway to excellence:</strong> From community introduction through state, national, and international competition — Boccia provides a clear athlete development pathway.",
                "<strong>Community impact:</strong> Beyond competition, Boccia builds social connections, improves quality of life, and creates community spaces for inclusion.",
                "<strong>Unique in the Paralympic movement:</strong> As one of only two Paralympic sports without an Olympic equivalent, Boccia exists solely for para-athletes."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></span>
                  <span dangerouslySetInnerHTML={{__html: item}} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Boccia for All Audiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: "For Athletes & Families", desc: "Boccia provides a competitive pathway for athletes with severe physical disabilities — from first contact through international competition. It builds skills, confidence, and community."},
              {title: "For Coaches & Officials", desc: "Boccia demands deep tactical knowledge, precise officiating, and specialized coaching. The sport creates meaningful roles for support personnel at every level."},
              {title: "For Schools & NGOs", desc: "Boccia is an excellent inclusion tool. It requires minimal space, is highly adaptable, and brings together participants of all abilities in meaningful competition."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
                <h3 className="text-lg font-bold text-[#1B5E20] mb-3">{item.title}</h3>
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
