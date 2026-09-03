"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SkillsPage() {
  const onRegisterClick = () => { window.location.href = "/register"; };
  const skills = [
    {icon: "📏", title: "Line Control", desc: "The ability to deliver a ball along a consistent straight line. Line control is fundamental — every shot starts with accurate direction."},
    {icon: "🎯", title: "Distance Control", desc: "Precisely controlling how far a ball travels. Athletes must judge force, angle, and speed to place balls at the intended distance."},
    {icon: "🤲", title: "Release Consistency", desc: "Releasing the ball the same way every time. Consistent release leads to predictable ball paths and reliable shot execution."},
    {icon: "⚡", title: "Ball-Speed Control", desc: "Adjusting the speed of delivery based on court conditions, distance, and tactical requirements. Speed affects both distance and impact."},
    {icon: "🔵", title: "Jack Placement", desc: "Strategic positioning of the jack to create tactical advantages. Where you put the jack determines the shape of the entire end."},
    {icon: "🔍", title: "Reading Clusters", desc: "Analysing the arrangement of balls on court to identify tactical opportunities and threats. Pattern recognition improves with experience."},
    {icon: "🧠", title: "Tactical Planning", desc: "Thinking several balls ahead, considering the current state and how each delivery will change it. Strategy is as important as skill."},
    {icon: "💭", title: "Decision-Making", desc: "Choosing the right shot at the right time. Quick, accurate decisions under pressure separate elite athletes from the rest."},
    {icon: "⏱️", title: "Clock Management", desc: "Managing the shot clock effectively. Rushing leads to errors; too much caution wastes time. Finding the right pace is critical."},
    {icon: "💪", title: "Emotional Control", desc: "Maintaining composure throughout the match. Boccia is mentally demanding — staying calm after errors or under pressure is essential."},
    {icon: "🗣️", title: "Communication", desc: "Effective communication with coaches, Sport Assistants, or Ramp Operators. Clear communication ensures the team functions as one."},
    {icon: "🗺️", title: "Surface Adaptation", desc: "Adjusting delivery technique based on court surface, speed, and condition. No two courts play exactly the same."}
  ];
  return (
    <div className="min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={onRegisterClick} />
      <section className="relative py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Home</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <Link href="/development" className="text-[#8B6914] hover:text-[#6B4F12] font-medium transition-colors">Development</Link>
            <span className="text-[#8B6914]/40 mx-1">/</span>
            <span className="text-gray-500">Essential Skills</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2F1D] mb-4">Essential Athletic Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl">The core skills every Boccia athlete must develop to compete at their best.</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0A2F1D]/10 flex items-center justify-center mb-4">
                <span className="text-[#0A2F1D] text-xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2F1D] mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
