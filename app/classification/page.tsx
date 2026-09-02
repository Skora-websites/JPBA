"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ClassificationPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-[120px] pb-16 min-h-[280px] border-b border-[#D4AF37]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #F0FFF0 100%)" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ELIGIBILITY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Who Can Play?</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Anyone can play recreationally.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Who Can Play?" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-6">Who Can Play Boccia?</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              <strong>Anyone can play boccia!</strong> For recreational play, Boccia is inclusive by design — children, adults, older persons, people with or without disabilities, wheelchair users, students, rehabilitation participants, families and support workers can all enjoy the sport.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              For competitive Para Boccia at national and international level, athletes must have a disability and be in a wheelchair as a result of cerebral palsy or another neurological condition that has similar effects, such as muscular dystrophy or traumatic brain injury.
            </p>
            <div className="rounded-xl bg-[#D4AF37]/10 border border-gold/30 p-6 mb-8">
              <p className="text-[14px] font-bold text-[#1B5E20] mb-2">Important Distinction</p>
              <p className="text-[14px] text-gray-600">Recreational eligibility and official competitive eligibility are different. Diagnosis does NOT automatically determine classification. An athlete must go through a formal classification process.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F5F5DC] border-t border-[#D4AF37]/20">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#1B5E20] mb-8">Sport Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { cls: "BC1", title: "Cerebral Palsy - Hand/Foot", desc: "Severe impairment affecting all four limbs. Limited functional range of motion and coordination. May need power wheelchair. Can throw with hands or kick with feet. May have a Sport Assistant on court.", color: "forest" },
                { cls: "BC2", title: "Cerebral Palsy - Independent", desc: "Severe impairment affecting all four limbs. Strong grip and release of ball. Not eligible for an on-court assistant.", color: "dark-green" },
                { cls: "BC3", title: "Ramp Athletes", desc: "Very severe impairment in all four limbs. Unable to throw consistently. Uses ramp and pointer with Ramp Operator assistance. Operator keeps back to court and eyes averted.", color: "gold" },
                { cls: "BC4", title: "Muscle Power Impairment", desc: "Severe locomotor dysfunction of all four extremities plus poor trunk control. Has enough strength to throw consistently. Not eligible for an on-court assistant.", color: "bronze" },
              ].map((c) => (
                <div key={c.cls} className="rounded-xl bg-white border border-[#D4AF37]/20 p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={"inline-block rounded-lg bg-" + c.color + "/10 px-4 py-2 text-[18px] font-bold text-" + c.color}>{c.cls}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1B5E20] mb-2">{c.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
