"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AccessibilityPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Accessibility &amp; Safety</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Accessibility &amp; Safety</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Creating safe, accessible environments for all Boccia participants.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Venue Accessibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Step-Free Access", desc: "All venues must provide step-free access from entrance to court. Ramps, level entries, and wide doorways are essential."},
              {title: "Accessible Toilets", desc: "Fully accessible restroom facilities with grab rails, adequate space for wheelchair manoeuvring, and emergency call systems."},
              {title: "Wheelchair Circulation", desc: "Sufficient space for wheelchair users to navigate freely — at least 1500mm wide corridors and turning circles of 1800mm diameter."},
              {title: "Flooring", desc: "Smooth, flat surfaces suitable for wheelchairs and ball delivery. No lip thresholds. Low-friction surfaces that don't affect ball roll."},
              {title: "Accessible Registration", desc: "Registration desks at wheelchair-accessible height. Clear signage with large print and high contrast. Staff trained in disability awareness."},
              {title: "Water & Refreshments", desc: "Accessible water stations at court-side. Hydration is critical for athlete performance and safety."}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
                <h3 className="text-lg font-bold text-[#1B5E20] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Athlete Safety</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#D4AF37]/10">
            <ul className="space-y-3">
              {[
                "<strong>First Aid:</strong> Trained first aid personnel must be present at all competitions and training sessions.",
                "<strong>Postural Support:</strong> Athletes using custom seating or supports must have their equipment checked for safety before play.",
                "<strong>Pressure Relief:</strong> Athletes who are unable to reposition independently should be assisted with regular pressure relief to prevent pressure sores.",
                "<strong>Fatigue Management:</strong> Match schedules must account for fatigue. Adequate rest periods between matches are mandatory.",
                "<strong>Hydration:</strong> Regular access to water. Athletes with communication difficulties must be reminded to hydrate.",
                "<strong>Safe Transfers:</strong> Assistance with transfers to/from wheelchairs must be available. Athletes may require help from trained support staff.",
                "<strong>Temperature:</strong> Venues must maintain comfortable temperatures. Extreme heat or cold can be dangerous for athletes with impaired sensation.",
                "<strong>Emergency Evacuation:</strong> Clear evacuation plans that account for wheelchair users and athletes with limited mobility."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700" dangerouslySetInnerHTML={{__html: item.replace(/^([^:]+:)/, '<span class="font-semibold">$1</span>')}} />
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">Support Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
              <h3 className="text-lg font-bold text-[#1B5E20] mb-2">Assistant &amp; Equipment Space</h3>
              <p className="text-gray-600">Sufficient space must be allocated for Sport Assistants, Ramp Operators, and equipment storage near the court. This area should not interfere with other athletes or play.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
              <h3 className="text-lg font-bold text-[#1B5E20] mb-2">Charging Arrangements</h3>
              <p className="text-gray-600">Power wheelchair charging facilities must be available at venues for multi-day events. Athletes should not be without their mobility device.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
