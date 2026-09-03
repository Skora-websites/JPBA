"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { motion } from "framer-motion";

export default function Page(){return(<div className="flex flex-col min-h-screen bg-[#FDF8EF]"><Navbar /><PageHeader title="National Events" breadcrumb={[{label:"Competitions"},{label:"National"}]} /><main className="flex-1 py-16"><div className="mx-auto max-w-[1400px] px-6 lg:px-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12"><h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">National Events</h2><p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">BSFI organizes national-level competitions throughout the year.</p><ul className="list-disc pl-6 space-y-2 mb-6 text-[#5C5C5C]"><li>National Boccia Championship (annual)</li><li>Boccia Federation Cup</li><li>National Coaching Camps</li><li>State-level qualifiers</li><li>Youth development events</li></ul><p className="text-[#5C5C5C] text-lg leading-relaxed">State associations organize regional qualifiers feeding into the national championship.</p></motion.div></div></main><Footer /></div>);}
