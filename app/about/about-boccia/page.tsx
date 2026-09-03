"use client";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader
        title="About Boccia"
        breadcrumb={[{ label: "About" }, { label: "About Boccia" }]}
      />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Main Content Card */}
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12 relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
              <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] -top-32 -right-32 pointer-events-none opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">
                  What is Boccia?
                </h2>
                <p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">
                  <strong className="text-[#0A2F1D]">Boccia</strong>{" "}
                  (pronounced bot-cha) is a Paralympic precision ball sport
                  designed specifically for athletes with severe physical
                  disabilities affecting motor skills.
                </p>
                <p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">
                  Played indoors on a flat court, athletes throw, kick, or use
                  an assistive ramp to propel leather balls as close as possible
                  to a target ball known as the jack.
                </p>
                <p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">
                  The set consists of 13 balls: 6 red, 6 blue, and 1 white
                  jack. The objective is to place your balls closer to the jack
                  than the opponent nearest ball.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Sport Classes */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#0A2F1D] mb-6">
                Sport Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    cls: "BC1",
                    title: "Cerebral Palsy",
                    desc: "Hand/foot delivery. Sport Assistant permitted.",
                    color: "bg-[#C9A84C]/15",
                  },
                  {
                    cls: "BC2",
                    title: "Cerebral Palsy",
                    desc: "Hand delivery. Higher function. No assistant.",
                    color: "bg-[#0A2F1D]/10",
                  },
                  {
                    cls: "BC3",
                    title: "Ramp Users",
                    desc: "Uses ramp and pointer. Ramp Operator assists.",
                    color: "bg-[#C9A84C]/15",
                  },
                  {
                    cls: "BC4",
                    title: "Non-CP",
                    desc: "Independent delivery. No assistant or ramp.",
                    color: "bg-[#0A2F1D]/10",
                  },
                ].map((item) => (
                  <div
                    key={item.cls}
                    className={`${item.color} rounded-xl p-5 border border-[#C9A84C]/20 hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#0A2F1D] text-white text-[12px] font-bold rounded-full">
                        {item.cls}
                      </span>
                      <h4 className="font-bold text-[#0A2F1D]">{item.title}</h4>
                    </div>
                    <p className="text-sm mt-2 text-[#5C5C5C]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Additional Info */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mt-12 bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#0A2F1D] mb-4">
                  A Global Paralympic Sport
                </h3>
                <p className="text-[#5C5C5C] text-lg leading-relaxed">
                  Boccia made its Paralympic debut at the 1984 New York/Stoke
                  Mandeville Games and is now played in over 70 countries
                  worldwide. The sport continues to grow as one of the most
                  inclusive competitive sports for athletes with severe physical
                  disabilities.
                </p>
                <div className="mt-8">
                  <Link
                    href="/sport/classification"
                    className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors border-b-2 border-[#C9A84C] pb-1"
                  >
                    Learn About Classification &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
