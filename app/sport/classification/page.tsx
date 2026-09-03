"use client";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

const classes = [
  {
    cls: "BC1",
    title: "Cerebral Palsy",
    desc: "Athletes have cerebral palsy or equivalent neurological condition. They have impairment in all four limbs and may use their hands or feet to deliver the ball. A Sport Assistant is permitted to help position the athlete.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    cls: "BC2",
    title: "Cerebral Palsy",
    desc: "Athletes have cerebral palsy but demonstrate better functional ability than BC1. They can throw or kick the ball independently without a Sport Assistant. Hand delivery is the most common technique.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    cls: "BC3",
    title: "Ramp Users",
    desc: "Athletes have severe physical disabilities that prevent them from throwing or kicking the ball. They use an assistive ramp to propel the ball. A Ramp Operator (assistant) assists with positioning and aiming the ramp.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    cls: "BC4",
    title: "Non-CP Athletes",
    desc: "Athletes have non-cerebral palsy conditions such as muscular dystrophy, spinal cord injury, or other severe physical disabilities. They deliver the ball independently and are not permitted to use a ramp or Sport Assistant.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader title="Classification" image="/boccia1.png" breadcrumb={[{ label: "Our Sport" }, { label: "Classification" }]}
      />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -right-40 pointer-events-none opacity-25 animate-float-slow" />

          {/* Introduction */}
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12 mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">
                  Sport Classification
                </h2>
                <p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">
                  Classification determines an athlete&apos;s sport class based on
                  functional ability. The process involves medical assessment
                  and sport-specific functional assessment by certified
                  classifiers.
                </p>
                <p className="text-[#5C5C5C] text-lg leading-relaxed">
                  Athletes are classified into one of four sport classes (BC1
                  through BC4) based on their impairment type and the impact it
                  has on their ability to play Boccia.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Classification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {classes.map((item, i) => (
              <ScrollReveal key={item.cls} variant="fade-up" delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 border border-[#C9A84C]/15 hover:shadow-xl hover:border-[#C9A84C]/40 transition-all duration-300 h-full group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#0A2F1D]/10 flex items-center justify-center text-[#0A2F1D] group-hover:bg-[#C9A84C]/20 group-hover:text-[#C9A84C] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#0A2F1D] text-white text-[12px] font-bold rounded-full mb-1">
                        {item.cls}
                      </span>
                      <h4 className="font-bold text-[#0A2F1D] text-[18px]">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#5C5C5C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-all text-[14px] shadow-lg shadow-[#C9A84C]/20"
              >
                Register for Classification &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
