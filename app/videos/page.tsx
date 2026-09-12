import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";
import RetroMarquee from "@/app/components/RetroMarquee";
import YouTubeFacade from "@/app/components/YouTubeFacade";
import VideoBrowser from "@/app/components/VideoBrowser";
import { queries } from "@/lib/db";
import { IMG } from "@/lib/images";

export const dynamic = "force-dynamic";

export default function VideosPage() {
  const videos = queries.videos.listPublished();
  const featured = videos.find((v) => v.featured) ?? videos[0];

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
                    <div className="flex items-end justify-between gap-4 mb-2">
                      <div>
                        <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                          Featured
                        </span>
                        <h2 className="text-[30px] sm:text-[36px] font-bold text-[#0A2F1D] mt-2">
                          {featured.title}
                        </h2>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-400 shrink-0 pb-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        {featured.views} views
                      </span>
                    </div>
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

              {/* Filterable grid with view counts */}
              <VideoBrowser videos={videos} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
