"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BC2Page() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/classification" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Classification</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">BC2</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center text-2xl font-bold">BC2</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20]">BC2</h1>
              <p className="text-xl text-gray-600">Athletes with Cerebral Palsy — Higher functional ability</p>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Functional Profile</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#D4AF37]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              BC2 athletes have cerebral palsy (or a similar neurological condition) with better functional ability than BC1. They typically demonstrate good trunk control and more refined hand function, allowing for greater throwing precision and control.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              BC2 athletes deliver the ball independently from their throwing box. They have sufficient motor control to release the ball consistently without assistance. This class features some of the highest-performing athletes in Boccia.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Delivery Method", desc: "Hand delivery only. Athletes throw or roll the ball from their wheelchair using hand grip and release."},
              {title: "No On-Court Assistant", desc: "BC2 athletes compete independently with no Sport Assistant or Ramp Operator on court. All deliveries are self-performed."},
              {title: "Events", desc: "BC2 Individual and BC1/BC2 Team. In Team events, BC1 and BC2 athletes compete together."},
              {title: "Equipment", desc: "Standard Boccia balls. No assistive devices permitted. Athletes deliver from their wheelchair within the throwing box."},
              {title: "Ends & Timing", desc: "Individual: 4 ends, 6 balls each, 4-minute timed ends. Team: 4 ends with extended timing."},
              {title: "Performance Level", desc: "BC2 typically represents the highest functional level in Boccia. Athletes demonstrate strong precision and tactical ability."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
                <h3 className="text-lg font-bold text-[#1B5E20] mb-2">{item.title}</h3>
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
