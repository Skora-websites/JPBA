"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function BallsPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.courtEquipmentBalls}
          imageAlt="Boccia balls and equipment laid out for a session"
          eyebrow="COURT & EQUIPMENT"
          title={"Boccia Balls"}
          description="The 13-ball set that defines the sport — specifications, materials, and ball behaviour."
          breadcrumb={[{"label": "Court & Equipment", "href": "/court-equipment"}, {"label": "Boccia Balls"}]}
          size={"lg"}
        />

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 mb-12">
              <h2 className="text-2xl font-bold text-[#0A2F1D] mb-6">The Boccia Ball Set</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each Boccia match uses a set of 13 balls: 6 red, 6 blue, and 1 white jack. The balls are the primary equipment in the sport and must meet strict World Boccia specifications for weight, size, and behaviour.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-[#C9A84C]/10 mb-12">
              <table className="w-full">
                <thead><tr className="bg-[#0A2F1D] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left font-semibold">Detail</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Total balls per set", "6 red + 6 blue + 1 white jack = 13"],
                    ["Weight", "Approximately 275g (200â€“300g range)"],
                    ["Circumference", "270mm Â± 8mm"],
                    ["Diameter", "Approximately 86mm"],
                    ["Outer material", "Leather or synthetic leather"],
                    ["Filling", "Plastic granules or similar material"],
                    ["Surface", "Smooth, consistent finish"]
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDF8EF]"}>
                      <td className="px-6 py-4 font-medium text-[#0A2F1D]">{row[0]}</td>
                      <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: "Soft Balls", desc: "Softer balls absorb more impact energy. They roll shorter distances and are less likely to deflect off other balls. Preferred for gentle placement shots.", color: "#0A2F1D"},
                {title: "Medium Balls", desc: "Medium-hardness balls offer a balance of control and response. They provide moderate roll distance and predictable deflection behaviour.", color: "#133824"},
                {title: "Hard Balls", desc: "Harder balls roll further and deflect more on impact. They are used for powerful shots like knock-offs and drives where maximum energy transfer is needed.", color: "#1B4E33"}
              ].map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-[#C9A84C]/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: b.color + "15"}}>
                    <div className="w-6 h-6 rounded-full" style={{backgroundColor: b.color}}></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: b.color}}>{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#0A2F1D]/5 rounded-2xl p-8 border border-[#0A2F1D]/10">
              <h2 className="text-xl font-bold text-[#0A2F1D] mb-4">Ball Selection Strategy</h2>
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
