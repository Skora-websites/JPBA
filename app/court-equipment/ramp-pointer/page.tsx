"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RampPointerPage() {
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
            <span className="text-gray-500">BC3 Ramp &amp; Pointer</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">BC3 Ramp &amp; Pointer</h1>
          <p className="text-xl text-gray-600 max-w-3xl">The assistive equipment that makes Boccia accessible to athletes with the most severe physical impairments.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">The Ramp</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The ramp is a channel device through which the ball is rolled to the playing area. It allows athletes who cannot throw or kick a ball to compete in Boccia. The ramp must meet World Boccia specifications for maximum dimensions, materials, and configuration.
            </p>
            <ul className="space-y-3">
              {[
                "Constructed from rigid materials — typically fibreglass, aluminium, or composite",
                "Must have a smooth, consistent channel surface for the ball to roll freely",
                "Maximum length and width are regulated by World Boccia rules",
                "Adjustable head piece allows fine-tuning of the release angle and direction",
                "Multiple channel configurations may be used for different shot types",
                "The ramp must be positioned within the athlete's designated area on court"
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Pointer / Release Device</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The pointer (or release device) is used by the athlete to push the ball down the ramp. This is how BC3 athletes maintain independent control over the ball release, which is a critical element of the sport.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {title: "Mouth Stick", desc: "A stick held in the mouth that the athlete uses to push the ball. Common for athletes with limited hand function."},
                {title: "Chin Stick", desc: "Similar to a mouth stick but operated using chin movements. Provides an alternative for athletes who cannot use a mouth stick."},
                {title: "Head Pointer", desc: "A head-mounted pointer that allows the athlete to direct and release the ball. Used by athletes with very limited limb function."},
                {title: "Hand Release", desc: "Some BC3 athletes can push the ball with their hand despite lacking the strength for a throw. The hand is used to slide the ball down the ramp."}
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF8EF] rounded-lg p-4">
                  <h4 className="font-bold text-[#0A2F1D] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Ramp Operator</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Ramp Operator is a person who assists BC3 athletes by positioning and aiming the ramp. However, their role is strictly limited to mechanical assistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-700 mb-2">✅ Allowed</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Positioning the ramp as directed by the athlete</li>
                  <li>• Aiming the ramp in the direction specified</li>
                  <li>• Making mechanical adjustments requested by the athlete</li>
                  <li>• Lifting and carrying the ramp between ends</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-red-700 mb-2">❌ Not Allowed</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Making tactical or strategic decisions</li>
                  <li>• Communicating strategy to the athlete</li>
                  <li>• Suggesting shot selection or jack placement</li>
                  <li>• Indicating scoring positions or target areas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
