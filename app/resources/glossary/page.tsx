"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function GlossaryPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const terms = [
    {term: "End", def: "A subdivision of a Boccia match. Individual matches have 4 ends; each end consists of all athletes delivering their allotted balls."},
    {term: "Jack", def: "The white target ball. The jack is thrown first in each end, and athletes attempt to place their coloured balls closer to it than the opponent."},
    {term: "Side", def: "A player or team competing in a match. In individual events, each athlete is a side; in pair/team events, the group is a side."},
    {term: "Dead Ball", def: "A ball that does not land within the playing area, goes out of bounds during play, or is otherwise declared invalid by the referee."},
    {term: "Retraction", def: "A penalty requiring the athlete to re-deliver a ball. Used for minor infringements such as delivering a ball outside the throwing box."},
    {term: "Penalty Ball", def: "A penalty awarding one point to the opponent and removing the offending ball. Used for more serious infringements like delivering out of turn."},
    {term: "MIC", def: "Most Inside Contact — the point where a ball touches another ball. Used in measuring situations to determine which ball is closer to the jack."},
    {term: "Sport Assistant", def: "A person who may assist a BC1 athlete by holding the footstop during delivery. Must not communicate strategy or make tactical decisions."},
    {term: "Ramp Operator", def: "A person who positions and aims the ramp for BC3 athletes. Must not communicate tactical information or influence the athlete's decisions."},
    {term: "FOP", def: "Field of Play — the official Boccia court area, including the playing area and throwing boxes."},
    {term: "Call Room", def: "The area where athletes report before competition for equipment checks, classification verification, and pre-match procedures."},
    {term: "Tie-break", def: "An extra end played when a match ends in a tie. Each athlete delivers three balls; the closest ball to the jack wins the match."},
    {term: "Throwing Box", def: "The designated area from which athletes deliver the ball. Six throwing boxes (1–6) are marked at one end of the court."},
    {term: "Playing Area", def: "The rectangular court area where the jack and balls must remain to be in play. Measures 12.5m × 6m."},
    {term: "V-Line", def: "A diagonal line in each corner of the playing area that helps officials determine if balls are in or out of play."},
    {term: "Cross", def: "A small target mark at the centre of the playing area. The jack may land on or near the cross."},
    {term: "Class", def: "The athlete's competition category (BC1, BC2, BC3, or BC4) determined through functional classification."},
    {term: "Classification", def: "The process of evaluating an athlete's functional ability to determine their competition class. Based on sport-specific testing, not diagnosis."},
    {term: "Valid Ball", def: "A ball that lands within the playing area and meets all delivery requirements. Valid balls remain in play."},
    {term: "Cluster", def: "A group of balls near the jack. Clusters form during play and are central to tactical decision-making."}
  ];
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/resources" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Resources</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Glossary</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Boccia Glossary</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Official Boccia terminology and definitions.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-3">
          {terms.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-md border border-[#D4AF37]/10">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <h3 className="text-lg font-bold text-[#1B5E20] min-w-[140px]">{t.term}</h3>
                <p className="text-gray-600">{t.def}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
