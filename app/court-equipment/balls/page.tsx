"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function BallsPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">COURT &amp; EQUIPMENT</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Boccia Balls</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">The 13-ball set that defines the sport — specifications, materials, and ball behaviour.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80" alt="Boccia Balls" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 mb-12">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">The Boccia Ball Set</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each Boccia match uses a set of 13 balls: 6 red, 6 blue, and 1 white jack. The balls are the primary equipment in the sport and must meet strict World Boccia specifications for weight, size, and behaviour.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-[#D4AF37]/10 mb-12">
              <table className="w-full">
                <thead><tr className="bg-[#1B5E20] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left font-semibold">Detail</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Total balls per set", "6 red + 6 blue + 1 white jack = 13"],
                    ["Weight", "Approximately 275g (200–300g range)"],
                    ["Circumference", "270mm ± 8mm"],
                    ["Diameter", "Approximately 86mm"],
                    ["Outer material", "Leather or synthetic leather"],
                    ["Filling", "Plastic granules or similar material"],
                    ["Surface", "Smooth, consistent finish"]
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5DC]"}>
                      <td className="px-6 py-4 font-medium text-[#1B5E20]">{row[0]}</td>
                      <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: "Soft Balls", desc: "Softer balls absorb more impact energy. They roll shorter distances and are less likely to deflect off other balls. Preferred for gentle placement shots.", color: "#1B5E20"},
                {title: "Medium Balls", desc: "Medium-hardness balls offer a balance of control and response. They provide moderate roll distance and predictable deflection behaviour.", color: "#2E7D32"},
                {title: "Hard Balls", desc: "Harder balls roll further and deflect more on impact. They are used for powerful shots like knock-offs and drives where maximum energy transfer is needed.", color: "#388E3C"}
              ].map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4AF37]/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: b.color + "15"}}>
                    <div className="w-6 h-6 rounded-full" style={{backgroundColor: b.color}}></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: b.color}}>{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#1B5E20]/5 rounded-2xl p-8 border border-[#1B5E20]/10">
              <h2 className="text-xl font-bold text-[#1B5E20] mb-4">Ball Selection Strategy</h2>
              <p className="text-gray-700">Athletes select balls based on the tactical situation. Softer balls are used for precise placement near the jack. Harder balls are used when an athlete needs to knock an opponent's ball away or push their own ball forward. Many athletes carry balls of different hardness levels in their kit.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
