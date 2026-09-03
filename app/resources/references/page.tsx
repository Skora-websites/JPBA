"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ReferencesPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/resources" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Resources</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Official References</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Official References</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Authoritative documents and governing body resources for Boccia.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {title: "World Boccia Rules", desc: "The complete official rules of Boccia as published by World Boccia. Covers court dimensions, ball specifications, match procedures, classification, and all competition rules.", org: "World Boccia"},
            {title: "World Boccia Classification Rules", desc: "Detailed classification protocols for BC1, BC2, BC3, and BC4. Defines eligible impairments and sport-specific classification testing procedures.", org: "World Boccia"},
            {title: "Competition Pathway", desc: "The official competition pathway from local through international level, including Paralympic qualification criteria.", org: "World Boccia"},
            {title: "International Referee Manual", desc: "Comprehensive guide for Boccia referees covering match management, penalty assessment, measuring procedures, and dispute resolution.", org: "World Boccia"},
            {title: "IPC Boccia Overview", desc: "International Paralympic Committee overview of Boccia as a Paralympic sport, including history, classification, and competition format.", org: "International Paralympic Committee"},
            {title: "World Boccia Member Information", desc: "Information about World Boccia membership, national federation requirements, and development programs.", org: "World Boccia"}
          ].map((ref, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2F1D]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A2F1D] text-lg">📄</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A2F1D] mb-1">{ref.title}</h3>
                  <p className="text-xs text-[#C9A84C] font-medium mb-2">{ref.org}</p>
                  <p className="text-gray-600 text-sm">{ref.desc}</p>
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
