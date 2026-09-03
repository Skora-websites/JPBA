"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function TacticsPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const tactics = [
    {icon: "📍", title: "Placement / Draw", desc: "The fundamental shot — delivering a ball as close to the jack as possible. The goal is to establish or extend a scoring position. Most balls in a Boccia match are placement shots."},
    {icon: "🚫", title: "Block", desc: "Placing a ball to physically obstruct the opponent's lane to the jack. Effective blocks force opponents into difficult angles or longer routes to reach the target."},
    {icon: "💥", title: "Knock-off", desc: "Using a ball to remove an opponent's ball from a scoring position. Timing is critical — a failed knock-off can improve the opponent's position or leave your ball out of play."},
    {icon: "↗️", title: "Push-up", desc: "Hitting your own ball to push it closer to the jack or to improve the cluster. Can also push a blocked ball into a better scoring position."},
    {icon: "🎯", title: "Jack Push", desc: "Moving the jack toward your own balls to change the scoring landscape. One of the most powerful tactical tools in Boccia — it can instantly reverse the scoring situation."},
    {icon: "⚡", title: "Drive / Smash", desc: "A powerful delivery aimed at disrupting the cluster. High risk, high reward — can scatter balls in multiple directions with unpredictable outcomes."},
    {icon: "🛡️", title: "Defensive Damage Control", desc: "When behind in an end, limiting the opponent's scoring potential by removing balls, repositioning, or protecting remaining throws to minimise the score against."}
  ];
  const considerations = [
    {title: "Distance", desc: "How far must the ball travel? Affects speed selection and delivery technique."},
    {title: "Angle", desc: "What lane is available? Are there blocking balls in the path?"},
    {title: "Court Speed", desc: "Surface conditions affect how balls roll and stop. Adapting to court speed is essential."},
    {title: "Ball Hardness", desc: "Softer balls absorb impact; harder balls deflect further. Choosing the right ball is key."},
    {title: "Remaining Balls", desc: "How many balls does each player have left? Affects aggressive vs defensive play."},
    {title: "Jack Position", desc: "Where is the jack? Center court offers more options; near boundaries limits angles."},
    {title: "Accessible Lanes", desc: "Which routes to the jack are currently open? Blocked lanes change strategy entirely."},
    {title: "Match Score", desc: "How many ends remain? Does the situation call for aggression or caution?"},
    {title: "Clock Management", desc: "Time pressure can force errors. Managing the clock is a tactical skill in itself."}
  ];
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/boccia" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Boccia</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Tactics &amp; Strategy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Tactics &amp; Strategy</h1>
          <p className="text-xl text-gray-600 max-w-3xl">The strategic depth behind every Boccia delivery — from placement to damage control.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Shot Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tactics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#0A2F1D]/10 flex items-center justify-center mb-4">
                  <span className="text-[#0A2F1D] text-xl">{t.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2F1D] mb-2">{t.title}</h3>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Strategic Thinking</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#C9A84C]/10 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Success in Boccia requires athletes to think several balls ahead, much like chess. Every delivery changes the court state, and athletes must continuously reassess their strategy. The five key strategic questions every athlete must answer are:
            </p>
          </div>
          <div className="bg-[#0A2F1D]/5 rounded-xl p-8 border border-[#0A2F1D]/10">
            <ol className="space-y-4">
              {[
                "Where should the jack finish?",
                "Which lane must stay open?",
                "Do I score, block or remove?",
                "Which ball feel matches the shot?",
                "How much risk does the match state justify?"
              ].map((q, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                  <p className="text-lg text-[#0A2F1D] font-semibold">{q}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F1D] mb-6">Tactical Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {considerations.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md border border-[#C9A84C]/10">
                <h3 className="text-lg font-bold text-[#0A2F1D] mb-1">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
