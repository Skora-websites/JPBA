"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CoachingDrillsPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const drills = [
    {title: "Line Drill", desc: "Athletes practice delivering balls along a straight line to improve direction control and release consistency. Marked lines on the court help athletes visualise the target lane.", focus: "Direction control, release consistency"},
    {title: "Distance-Zone Drill", desc: "Balls are delivered to specific distance zones on the court. Athletes learn to control force and speed to place balls at varying distances from the throwing box.", focus: "Distance control, force modulation"},
    {title: "Jack-Placement Drill", desc: "Athletes practice placing the jack in optimal positions, learning where to put the jack to maximise their tactical advantage.", focus: "Jack positioning, tactical awareness"},
    {title: "Close-to-Jack Drill", desc: "Athletes deliver balls aiming to get as close to the jack as possible. Repeated practice builds touch and precision.", focus: "Precision, touch, accuracy"},
    {title: "Knock-off Drill", desc: "Athletes practice removing opponent balls from scoring positions. Timing, angle, and force are all critical elements.", focus: "Accuracy under pressure, ball physics"},
    {title: "Push-Shot Drill", desc: "Athletes use one of their balls to push another ball closer to the jack. This builds understanding of ball-to-ball interaction.", focus: "Compound shots, ball interaction"},
    {title: "Block-and-Bypass Drill", desc: "One athlete places a block; the other must find a way past it. Develops both defensive and offensive thinking.", focus: "Tactical thinking, angle management"},
    {title: "Pressure Drill", desc: "Simulated match conditions with time pressure and tactical scenarios. Athletes must make decisions quickly while maintaining precision.", focus: "Mental resilience, decision-making"}
  ];
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/development" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Development</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Coaching Drills</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Coaching Drills</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Essential training drills for developing Boccia athletes at all levels.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drills.map((drill, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <h3 className="text-xl font-bold text-[#0A2F1D]">{drill.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{drill.desc}</p>
                <div className="bg-[#0A2F1D]/5 rounded-lg p-3">
                  <p className="text-sm text-[#0A2F1D] font-medium">Focus: {drill.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Performance Metrics</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Coaches can track athlete progress using the following key performance indicators:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Valid jack percentage",
                "Average distance to jack",
                "First-ball accuracy",
                "Knock-off success rate",
                "Penalty-free ends",
                "Consistency across ends",
                "Tactical decision quality",
                "Time management",
                "Match win rate"
              ].map((metric, i) => (
                <div key={i} className="bg-[#FDF8EF] rounded-lg p-4 text-center">
                  <p className="text-[#0A2F1D] font-semibold">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
