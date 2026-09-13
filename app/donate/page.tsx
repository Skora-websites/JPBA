import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export const metadata = {
  title: "Donate & Partner — JPBA",
  description:
    "Support the Jharkhand Para Boccia Association. NGOs, donors and partners can help grow para sport in Jharkhand.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
                <PageHero
          image={PAGE_HERO.donate}
          imageAlt="Champions receiving their prizes at the award ceremony"
          eyebrow="SUPPORT THE MOVEMENT"
          title={<>Donate &amp; <span className="gradient-text-gold">Partner With Us</span></>}
          description="NGOs, corporates, trusts and individual donors — your support funds equipment, training camps, classification camps and competitions for para athletes across Jharkhand. Reach out and our team will get in touch."
          badges={["Equipment", "Training Camps", "Athlete Sponsorship", "Event Hosting"]}
          breadcrumb={[{"label": "Donate"}]}
          size={"lg"}
        />

        {/* Contact cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-dots pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-52 -right-52 pointer-events-none opacity-40" />
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-14">
                <h2 className="text-[30px] sm:text-[38px] font-bold text-[#0A2F1D] mb-3">
                  Contact the Association
                </h2>
                <p className="text-[#5C5C5C] text-[15px] max-w-2xl mx-auto">
                  Every contribution — big or small — goes directly towards
                  building the para sport movement in Jharkhand.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  ),
                  title: "Call Us",
                  lines: ["+91 8510902424"],
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ),
                  title: "Email",
                  lines: ["Bocciajharkhand@gmail.com"],
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ),
                  title: "Visit",
                  lines: ["Ranchi, Jharkhand - 834001"],
                },
              ].map((c, i) => (
                <ScrollReveal key={c.title} variant="fade-up" delay={i * 120}>
                  <div className="bg-white rounded-2xl p-8 border border-[#E2D9C8] text-center hover:border-[#C9A84C]/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] flex items-center justify-center mx-auto mb-5">
                      {c.icon}
                    </div>
                    <h3 className="text-[16px] font-bold text-[#0A2F1D] mb-2">{c.title}</h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-[14px] text-[#5C5C5C]">{l}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="bg-agitos-dark rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-dots-dark pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-[24px] sm:text-[30px] font-bold text-white mb-3">
                    Ready to make a difference?
                  </h3>
                  <p className="text-white/75 text-[14px] max-w-xl mx-auto mb-8">
                    Write to us or call directly — we&apos;ll share our
                    association details, current needs and how your
                    organisation can be part of Jharkhand&apos;s para boccia
                    journey.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:Bocciajharkhand@gmail.com?subject=Donation%20/%20Partnership%20Enquiry"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-colors text-[13px] shadow-lg"
                    >
                      Email Us
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <a
                      href="tel:+918510902424"
                      className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#C9A84C] text-[#C9A84C] rounded font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors text-[13px]"
                    >
                      Call +91 8510902424
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
