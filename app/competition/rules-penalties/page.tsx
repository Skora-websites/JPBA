"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RulesPenaltiesPage() {
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
            <span className="text-gray-500">Rules &amp; Penalties</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Rules &amp; Penalties</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Official competition rules, penalty system, and disciplinary procedures in Boccia.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Ball / Jack Situations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Dead Ball", desc: "A ball that does not land within the playing area, or a ball that goes out of bounds during play. Dead balls are removed from the court and do not count."},
              {title: "Jack Out", desc: "If the jack goes out of bounds, the end is declared dead and replayed. If the jack goes out during a player's turn, that end is replayed with a new jack."},
              {title: "Dropped Ball", desc: "If an athlete accidentally drops a ball before delivery, the ball counts as delivered and is played from where it lands (if within the throwing box)."},
              {title: "Disrupted End", desc: "An end may be disrupted by external interference (e.g., a wheelchair moving, external noise). The referee may decide to replay the end."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                <h3 className="text-lg font-bold text-[#0A2F1D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Penalty System</h2>
          <div className="space-y-4">
            {[
              {level: "Retraction", color: "bg-blue-100 border-blue-300 text-blue-800", desc: "The athlete must re-deliver the ball. Used for minor infringements such as touching a ball outside the throwing box."},
              {level: "Penalty Ball", color: "bg-yellow-100 border-yellow-300 text-yellow-800", desc: "The opponent is awarded one additional point and the offending ball is removed. Used for more serious infringements such as delivering out of turn or interfering with play."},
              {level: "Yellow Card", color: "bg-yellow-100 border-yellow-400 text-yellow-800", desc: "Official warning for unsporting behaviour, persistent infringement, or repeated minor offences. Two yellow cards result in a red card."},
              {level: "Red Card", color: "bg-red-100 border-red-300 text-red-800", desc: "Results in forfeit of the current end. The offending team/athlete loses the end with a score of 0-6 (or 0-1 in individual). Used for serious misconduct."},
              {level: "Forfeit", color: "bg-red-200 border-red-400 text-red-900", desc: "Results in loss of the match. The highest level of penalty, used for extreme misconduct or repeated red card offences."}
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-6 border ${item.color}`}>
                <h3 className="text-lg font-bold mb-1">{item.level}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Tie-Break</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When a match ends in a tie (equal points after all ends), a tie-break end is played to determine the winner. The tie-break procedure is:
            </p>
            <ul className="space-y-3">
              {[
                "A new jack is thrown by the referee",
                "The athlete who scored in the last end (or won the previous end) delivers first",
                "Each athlete delivers three balls",
                "The athlete whose nearest ball to the jack wins the match",
                "If the jack goes out, it is re-thrown and the end is replayed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Jack on the Cross</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed">
              If the jack comes to rest on or touching the cross (the small target mark at the centre of the court), the jack remains where it is. The cross is not treated as out of bounds. Athletes must play to the jack's actual position, even if it is partially on the cross.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
