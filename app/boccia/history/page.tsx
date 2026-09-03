"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HistoryPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const steps = [
    {year: "1970s", title: "Rehabilitation Origins", desc: "Boccia originated as a rehabilitation activity for people with cerebral palsy, adapted from the Italian bocce ball tradition. It was initially played informally in therapeutic settings."},
    {year: "1984", title: "Paralympic Debut", desc: "Boccia made its Paralympic debut at the 1984 Summer Paralympics in Stoke Mandeville/New York, initially with three event classes (C1, C2, C3)."},
    {year: "1996", title: "Atlanta Paralympics", desc: "The sport gained momentum as international participation grew. The classification system evolved to better reflect athlete functional ability rather than diagnosis."},
    {year: "2000", title: "Sydney Paralympics", desc: "Boccia was contested in BC1, BC2, BC3, and BC4 classifications for the first time, establishing the four-class system still used today."},
    {year: "2008", title: "Beijing Paralympics", desc: "Team events were introduced, expanding the sport further. World Boccia governance became more structured with standardized rules and classification protocols."},
    {year: "2016", title: "Rio Paralympics", desc: "BC4 Pair events were added. The sport continued to grow globally with over 70 participating nations."},
    {year: "Present", title: "Global Sport", desc: "Today, Boccia is played in over 75 countries. Governed by World Boccia, it continues to grow with a clear competition pathway from community level to the Paralympic Games."}
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
            <span className="text-gray-500">History</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">History &amp; Paralympic Context</h1>
          <p className="text-xl text-gray-600 max-w-3xl">From rehabilitation activity to Paralympic competition — the evolution of Boccia over four decades.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-8">Timeline</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#C9A84C]/30"></div>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">{step.year}</div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10 flex-1">
                    <h3 className="text-lg font-bold text-[#0A2F1D] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon: "🏛️", title: "World Boccia", desc: "The international governing body (formerly Boccia International Sports Federation) oversees Paralympic competition, world championships, classification rules, and global development programs."},
              {icon: "🌏", title: "Asian Paralympic Committee", desc: "Oversees Boccia in the Asian region, organizing continental championships and supporting national development programs across Asia."},
              {icon: "🇮🇳", title: "JPBA — Jharkhand Para Boccia Association", desc: "Works to develop Boccia at the grassroots level in Jharkhand, providing pathways from awareness through state, national, and international competition."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                <div className="w-12 h-12 rounded-lg bg-[#0A2F1D]/10 flex items-center justify-center mb-4">
                  <span className="text-[#0A2F1D] text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2F1D] mb-2">{item.title}</h3>
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
