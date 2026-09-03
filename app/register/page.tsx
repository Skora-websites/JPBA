"use client";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSejXpcQc40K9GqggtadDUyUaAKNWZNaFColxKDsT1yGPQeIqw/viewform";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <main className="flex-1">
        {/* ═══ Hero Section ═══ */}
        <section className="relative pt-[180px] pb-20 min-h-[400px] overflow-hidden" style={{background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #FDF8EF 100%)"}}>

          <div className="absolute inset-0 bg-noise pointer-events-none opacity-30" /><img src="/boccia1.png" alt="Register" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15" /><div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                  REGISTRATION
                </p>
                <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-white leading-tight mb-4">
                  Register as an{" "}
                  <span className="gradient-text-gold">Athlete</span>
                </h1>
                <p className="text-[15px] text-white/80 max-w-[600px] leading-relaxed mb-8">
                  Complete the official registration form to join the Jharkhand
                  Para Boccia Association. Open to all eligible athletes
                  seeking to compete in Para Boccia across India.
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 text-[15px] shadow-xl shadow-[#C9A84C]/30 hover:shadow-white/20 active:scale-[0.97]"
                >
                  Register on Google Form
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 relative">
                  <img
                    src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80"
                    alt="Register"
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Registration Pathway Steps ═══ */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-wavy pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -top-40 right-1/4 pointer-events-none opacity-20" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-14">
                <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                  HOW IT WORKS
                </span>
                <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 mb-4">
                  Registration Pathway
                </h2>
                <p className="text-[#5C5C5C] text-[16px] max-w-2xl mx-auto">
                  Your journey from registration to becoming an official JPBA
                  athlete in 5 simple steps.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Register Online",
                  desc: "Fill out the official Google Form with your personal and medical details.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Submit Documents",
                  desc: "Upload identity proof and medical certification with your application.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Classification",
                  desc: "Complete the certified impairment assessment by qualified classifiers.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  step: "04",
                  title: "District Review",
                  desc: "Verification and endorsement by your local district association.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  step: "05",
                  title: "Official Registration",
                  desc: "Receive your JPBA registration number and compete!",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <ScrollReveal key={i} variant="scale-in" delay={i * 80}>
                  <div className="relative group text-center">
                    <div className="bg-[#FDF8EF] border border-[#E2D9C8] rounded-xl p-6 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-14 h-14 rounded-full bg-[#0A2F1D]/10 flex items-center justify-center text-[#0A2F1D] mx-auto mb-4 group-hover:bg-[#C9A84C]/20 group-hover:text-[#C9A84C] transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-[28px] font-bold gradient-text-gold block mb-2">
                        {item.step}
                      </span>
                      <h4 className="text-[15px] font-bold text-[#0A2F1D] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-[#5C5C5C] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#C9A84C]/30 animate-connector" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia1.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>

        {/* ═══ Why Register Benefits ═══ */}
        <section className="py-20 bg-mesh-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-dots-dark opacity-10 pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -left-40 pointer-events-none opacity-20 animate-float-slow" />
          <div className="gradient-orb gradient-orb-white w-[350px] h-[350px] -bottom-32 -right-32 pointer-events-none opacity-10 animate-float" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slide-left">
                <div>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    WHY REGISTER?
                  </span>
                  <h2 className="text-[36px] sm:text-[44px] font-bold text-white mt-2 mb-8 leading-tight">
                    Start Your Boccia Journey
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        title: "Official Recognition",
                        desc: "Get registered with JPBA and BSFI for participation in state and national events.",
                      },
                      {
                        title: "Competitive Pathway",
                        desc: "Access to district, state, and national championships across India.",
                      },
                      {
                        title: "Training & Coaching",
                        desc: "Connect with certified coaches and training programs in your district.",
                      },
                      {
                        title: "International Opportunities",
                        desc: "Potential selection for national team representation at international events.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[#C9A84C] font-bold text-[14px]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-[16px] font-bold text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-[14px] text-white/60 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right">
                <div className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-[20px] font-bold text-white mb-2">
                      Ready to Register?
                    </h3>
                    <p className="text-white/60 text-[14px] mb-8">
                      Click the button below to open the official Google Form
                      registration page.
                    </p>
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 text-[15px] shadow-xl shadow-[#C9A84C]/30 w-full justify-center"
                    >
                      Open Registration Form
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                    <p className="text-white/40 text-[12px] mt-4 text-center">
                      Opens in a new tab &bull; Google Forms
                    </p>
                  </div>
                  {/* Decorative gradient border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#C9A84C]/30 via-transparent to-[#C9A84C]/10 pointer-events-none -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia1.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>

        {/* ═══ Eligibility Quick Check ═══ */}
        <section className="py-20 bg-[#FDF8EF] relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-12">
                <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                  BEFORE YOU REGISTER
                </span>
                <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 mb-4">
                  Eligibility Checklist
                </h2>
                <p className="text-[#5C5C5C] text-[16px] max-w-2xl mx-auto">
                  Ensure you meet the following criteria before completing the
                  registration form.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {[
                {
                  title: "Eligible Condition",
                  items: [
                    "Cerebral Palsy",
                    "Spinal Cord Injury",
                    "Muscular Dystrophy",
                    "Other eligible conditions",
                  ],
                },
                {
                  title: "Required Documents",
                  items: [
                    "Passport-size photograph",
                    "Identity proof (Aadhaar/Voter ID)",
                    "Medical certificate",
                    "Doctor-stamped MDF form",
                  ],
                },
                {
                  title: "Assessment",
                  items: [
                    "Minimum Impairment Criteria (MIC)",
                    "In-person classification evaluation",
                    "Functional ability assessment",
                    "Sport-specific testing",
                  ],
                },
              ].map((card, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-[#E2D9C8] hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300 h-full">
                    <h4 className="text-[18px] font-bold text-[#0A2F1D] mb-5">
                      {card.title}
                    </h4>
                    <ul className="space-y-3">
                      {card.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[14px] text-[#5C5C5C]"
                        >
                          <span className="text-[#C9A84C] mt-0.5 shrink-0">
                            &#10003;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up" delay={300}>
              <div className="text-center mt-12">
                <Link
                  href="/sport/classification"
                  className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors border-b-2 border-[#C9A84C] pb-1"
                >
                  Learn About Classification (BC1-BC4) &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia1.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
