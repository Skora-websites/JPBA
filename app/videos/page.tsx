import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";
import RetroMarquee from "@/app/components/RetroMarquee";
import YouTubeFacade from "@/app/components/YouTubeFacade";
import { queries } from "@/lib/db";
import { IMG } from "@/lib/images";

export const dynamic = "force-dynamic";

export default function VideosPage() {
  const videos = queries.videos.listPublished();
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const rest = featured ? videos.filter((v) => v.id !== featured.id) : [];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader
        title="Videos"
        image={IMG.hero4}
        breadcrumb={[{ label: "News & Media" }, { label: "Videos" }]}
      />

      <div className="bg-[#0A2F1D] border-y border-[#C9A84C]/30 py-2.5 text-[#C9A84C] text-[12px] font-bold uppercase tracking-[0.2em]">
        <RetroMarquee
          items={["Watch Boccia", "Match Footage", "Highlights", "Training", "Boccia Jharkhand on YouTube"]}
          duration={30}
        />
      </div>

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {videos.length === 0 ? (
            <ScrollReveal variant="fade-up">
              <div className="text-center py-20 rounded-2xl bg-white border border-[#E2D9C8]">
                <span className="text-4xl block mb-4">🎥</span>
                <h2 className="text-[22px] font-bold text-[#0A2F1D] mb-2">Videos coming soon</h2>
                <p className="text-[#5C5C5C] text-[15px] max-w-md mx-auto">
                  We&apos;re publishing match footage and highlights from the Boccia Jharkhand
                  YouTube channel. Check back shortly!
                </p>
                <a
                  href="https://www.youtube.com/results?search_query=boccia+jharkhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider text-[13px] hover:bg-[#0A2F1D] hover:text-white transition-colors"
                >
                  Visit our YouTube channel →
                </a>
              </div>
            </ScrollReveal>
          ) : (
            <>
              {/* Featured video */}
              {featured && (
                <ScrollReveal variant="fade-up">
                  <section className="mb-14">
                    <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                      Featured
                    </span>
                    <h2 className="text-[30px] sm:text-[36px] font-bold text-[#0A2F1D] mt-2 mb-6">
                      {featured.title}
                    </h2>
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                      <YouTubeFacade
                        youtubeId={featured.youtube_id ?? ""}
                        title={featured.title}
                      />
                    </div>
                    {featured.description && (
                      <p className="text-[#5C5C5C] text-[15px] leading-relaxed mt-4 max-w-3xl">
                        {featured.description}
                      </p>
                    )}
                  </section>
                </ScrollReveal>
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((v, i) => (
                  <ScrollReveal key={v.id} variant="fade-up" delay={(i % 3) * 80}>
                    <div className="group rounded-2xl overflow-hidden bg-white border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <YouTubeFacade youtubeId={v.youtube_id ?? ""} title={v.title} />
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold uppercase tracking-wider">
                            {v.category}
                          </span>
                          {v.featured === 1 && (
                            <span className="px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold">
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0A2F1D] leading-snug group-hover:text-[#C9A84C] transition-colors">
                          {v.title}
                        </h3>
                        {v.description && (
                          <p className="text-[13px] text-[#5C5C5C] mt-2 line-clamp-2">{v.description}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
