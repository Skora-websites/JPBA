"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BC3Page() {
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
            <span className="text-gray-500">BC3</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center text-2xl font-bold">BC3</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20]">BC3</h1>
              <p className="text-xl text-gray-600">Athletes who use a Ramp — Severe functional limitations</p>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Functional Profile</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#D4AF37]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              BC3 athletes have severe physical impairments that prevent them from throwing or kicking a ball with sufficient force and accuracy. They use a ramp (assistive device) to deliver the ball and have a Ramp Operator who positions the ramp under the athlete's direction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The athlete retains full control over all tactical and strategic decisions — the Ramp Operator is a mechanical assistant only. BC3 athletes often use mouth sticks, head pointers, or chin sticks to release the ball down the ramp. The ramp system has made Boccia accessible to athletes with the most severe physical disabilities.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">The Ramp System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Ramp", desc: "A channel (typically made of fibreglass, aluminium, or other rigid material) through which the ball is rolled. The ramp has adjustable channels, guides, and a head piece. It must meet World Boccia specifications."},
              {title: "Pointer / Release Device", desc: "A stick (often a mouth stick, chin stick, or head pointer) used by the athlete to push the ball down the ramp. This gives the athlete independent control over ball release."},
              {title: "Ramp Operator", desc: "A person who positions and aims the ramp under the athlete's direction. The Ramp Operator does NOT make tactical decisions. They must not communicate strategy, suggest shots, or influence the athlete's choices."},
              {title: "Ball Gate / Guide", desc: "The front piece of the ramp that helps channel the ball. It can be adjusted in height and width to accommodate different ball sizes and release angles."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
                <h3 className="text-lg font-bold text-[#1B5E20] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Events", desc: "BC3 Individual, BC3 Pair. BC3 athletes can compete in both individual and pair events."},
              {title: "Ramp Operator Rules", desc: "Only one Ramp Operator per athlete. Must not communicate tactical information. Positions ramp only when directed by the athlete."},
              {title: "Ends & Timing", desc: "Individual: 4 ends, 6 balls each, extended timed ends. Pair: 4 ends with pair timing."},
              {title: "Ramp Restrictions", desc: "The ramp must not exceed specified dimensions. It must be set up within the athlete's designated area. Maximum ramp length is regulated by World Boccia."},
              {title: "Equipment Check", desc: "All ramps and release devices must be approved before competition. They are checked for compliance with World Boccia specifications."},
              {title: "Important Rule", desc: "The athlete must be able to demonstrate that they cannot deliver a ball with sufficient force and accuracy without the ramp to qualify for BC3."}
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
