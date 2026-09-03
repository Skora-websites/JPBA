"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function WheelchairSeatingPage() {
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
            <span className="text-gray-500">Wheelchair &amp; Seating</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Wheelchair &amp; Postural Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Wheelchair configuration, postural support systems, and athlete positioning for competitive Boccia.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Wheelchair Requirements</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most Boccia athletes compete from a wheelchair. The wheelchair must not be modified to provide an unfair advantage. It should reflect the athlete's everyday mobility needs and functional level.
            </p>
            <ul className="space-y-3">
              {[
                "The wheelchair must be the athlete's own — it cannot be provided or modified specifically for competition advantage",
                "Wheelchair brakes must be applied during delivery to ensure stability",
                "Footrests and leg supports must be in place as they would be for everyday use",
                "The athlete must be able to maintain a stable throwing position from their wheelchair",
                "Anti-tip devices are permitted if they are part of the athlete's standard wheelchair"
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Postural Support Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: "Trunk Supports", desc: "Lateral supports, chest straps, and trunk harnesses help athletes maintain an upright and stable throwing position. These must be part of the athlete's standard seating system."},
              {title: "Head Rests", desc: "Head supports are used by athletes who need them for stability. They must be part of the athlete's standard wheelchair configuration."},
              {title: "Strapping Systems", desc: "Seat belts, pelvic straps, and thoracic straps help secure athletes in their wheelchairs. These are essential for athletes with limited trunk control."},
              {title: "Custom Seating", desc: "Moulded seats and custom cushions provide individualised support. These must be prescribed as part of the athlete's regular seating, not competition-specific."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                <h3 className="text-lg font-bold text-[#0A2F1D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Important Considerations</h2>
          <div className="bg-[#0A2F1D]/5 rounded-xl p-8 border border-[#0A2F1D]/10">
            <ul className="space-y-3">
              {[
                "Postural support must not impede the athlete's ability to deliver the ball",
                "Any new equipment must be approved by the sport technical delegate before competition",
                "Athletes are responsible for bringing their own equipment to competition",
                "Equipment that provides an unfair advantage may be deemed non-compliant",
                "Comfort and safety are paramount — athletes should not be in pain during competition"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
