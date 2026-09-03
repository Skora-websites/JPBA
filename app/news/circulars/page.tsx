"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { motion } from "framer-motion";

export default function Page(){return(<div className="flex flex-col min-h-screen bg-[#FDF8EF]"><Navbar /><PageHeader title="Circulars and Notices" image="/boccia.png" breadcrumb={[{label:"News"},{label:"Circulars"}]} /><main className="flex-1 py-16"><div className="mx-auto max-w-[1400px] px-6 lg:px-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12"><h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">Circulars and Notices</h2><p className="text-[#5C5C5C] text-lg leading-relaxed">Official circulars from JPBA and BSFI regarding competition schedules, registration deadlines, and administrative updates.</p></motion.div></div></main><Footer /></div>);}
