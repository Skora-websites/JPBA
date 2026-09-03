"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProceduresPage() {
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
            <span className="text-gray-500">Match Procedures</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">How a Match Starts</h1>
          <p className="text-xl text-gray-600 max-w-3xl">The complete match start procedure from call room through first delivery.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Match Start Sequence</h2>
          <div className="space-y-6">
            {[
              {step: "1", title: "Call Room", desc: "Athletes report to the call room at least 15 minutes before their scheduled match. Equipment is checked, classification cards are verified, and athletes are prepared for competition."},
              {step: "2", title: "Coin Toss", desc: "The referee conducts a coin toss to determine which athlete/team chooses colour or end. The winner of the toss has first choice."},
              {step: "3", title: "Ball Colour Selection", desc: "The winning side selects either ball colour (red or blue) or end (the end they will deliver from). The other side takes the remaining option."},
              {step: "4", title: "Warm-Up", desc: "Each athlete/team receives a brief warm-up period on court to familiarise themselves with the surface conditions."},
              {step: "5", title: "Jack Procedure", desc: "The referee throws the jack to the centre of the court. If it doesn't reach the target area, the referee re-throws it."},
              {step: "6", title: "First Coloured Ball", desc: "The athlete/team who won the toss (or their designated player) delivers the first coloured ball. Play continues with alternating deliveries until all balls are played."},
              {step: "7", title: "Remaining Play", desc: "Athletes alternate delivering one ball at a time. Play continues until both sides have delivered all their balls, or one side concedes remaining balls."},
              {step: "8", title: "End Completion", desc: "When all balls have been delivered (or conceded), the referee measures distances, announces the score, and the next end begins."}
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Timing Rules</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-[#C9A84C]/10">
            <table className="w-full">
              <thead><tr className="bg-[#0A2F1D] text-white">
                <th className="px-6 py-3 text-left font-semibold">Event</th>
                <th className="px-6 py-3 text-left font-semibold">End Time</th>
                <th className="px-6 py-3 text-left font-semibold">Balls per Athlete</th>
                <th className="px-6 py-3 text-left font-semibold">Between Ends</th>
              </tr></thead>
              <tbody>
                {[
                  ["Individual (BC1/BC2/BC4)", "4 minutes", "6", "1 minute"],
                  ["Individual (BC3)", "Extended", "6", "1 minute"],
                  ["Pair (BC3/BC4)", "Extended", "3 per athlete", "1 minute"],
                  ["Team (BC1/BC2)", "Extended", "2 per athlete", "1 minute"]
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDF8EF]"}>
                    <td className="px-6 py-4 font-medium text-[#0A2F1D]">{row[0]}</td>
                    <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                    <td className="px-6 py-4 text-gray-700">{row[2]}</td>
                    <td className="px-6 py-4 text-gray-700">{row[3]}</td>
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
