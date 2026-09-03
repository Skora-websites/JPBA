"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function TestingPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/court-equipment" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Court &amp; Equipment</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Equipment Testing</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Equipment Testing &amp; Control</h1>
          <p className="text-xl text-gray-600 max-w-3xl">How Boccia balls and equipment are checked and approved for competition.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Pre-Match Equipment Control</h2>
          <div className="space-y-4">
            {[
              {step: "1", title: "Equipment Check", desc: "All equipment (balls, ramps, release devices) must be presented for inspection before competition begins. Equipment must meet World Boccia specifications."},
              {step: "2", title: "Ball Check", desc: "Each set of 6 red and 6 blue balls plus the white jack are inspected for correct weight (approximately 275g), circumference (270mm ± 8mm), and surface condition."},
              {step: "3", title: "Roll Test", desc: "Balls may be tested on a roll test ramp to ensure they roll true and meet hardness/behaviour specifications. Each ball should behave consistently."},
              {step: "4", title: "Approval Marking", desc: "Approved balls receive a mark (typically a sticker or stamp) indicating they have passed inspection. Only approved balls may be used in competition."},
              {step: "5", title: "Post-Match Control", desc: "After the match, balls are checked again for damage or tampering. Any irregularities may result in penalties or disqualification."}
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A2F1D]">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Ball Specifications</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-[#C9A84C]/10">
            <table className="w-full">
              <thead><tr className="bg-[#0A2F1D] text-white">
                <th className="px-6 py-3 text-left font-semibold">Specification</th>
                <th className="px-6 py-3 text-left font-semibold">Detail</th>
              </tr></thead>
              <tbody>
                {[
                  ["Total balls per set", "6 red + 6 blue + 1 white jack = 13"],
                  ["Weight", "Approximately 275g (200–300g range)"],
                  ["Circumference", "270mm ± 8mm"],
                  ["Diameter", "Approximately 86mm"],
                  ["Outer material", "Leather or synthetic leather"],
                  ["Filling", "Plastic granules or similar material"],
                  ["Ball hardness", "Soft, medium, or hard variants"]
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDF8EF]"}>
                    <td className="px-6 py-4 font-medium text-[#0A2F1D]">{row[0]}</td>
                    <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
