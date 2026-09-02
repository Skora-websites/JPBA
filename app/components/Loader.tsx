"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicLoader() {
  // Sequence states: "throwing" -> "impact" -> "exit"
  const [sequence, setSequence] = useState("throwing");
  const pathname = usePathname();

  useEffect(() => {
    setSequence("throwing");
    
    // Timeline of events
    const tImpact = setTimeout(() => setSequence("impact"), 1200); // Ball hits ground
    const tExit = setTimeout(() => setSequence("exit"), 2500);     // Fade screen away
    
    return () => {
      clearTimeout(tImpact);
      clearTimeout(tExit);
    };
  }, [pathname]);

  if (sequence === "exit") return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <AnimatePresence>
        
        {/* ========================================================
            PHASE 1: THE THROW (Unmounts exactly at impact)
        ======================================================== */}
        {sequence === "throwing" && (
          <motion.div
            key="throw-phase"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)", scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute flex items-end justify-center w-full h-full"
          >
            <div className="relative h-48 w-64 border-b-2 border-gray-200 flex items-end pb-1">
              
              {/* Athlete Wheelchair */}
              <motion.svg 
                viewBox="0 0 100 100" 
                className="h-20 w-20 text-gray-900 z-10"
                // Simulates the athlete winding up and throwing
                animate={{ x: [0, -5, 5, 0], rotate: [0, -2, 5, 0] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <circle cx="50" cy="70" r="25" fill="none" stroke="currentColor" strokeWidth="4"/>
                <line x1="50" y1="45" x2="50" y2="95" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="25" r="12" fill="currentColor"/> 
                <path d="M50 37 L50 60 L70 65 L40 60 Z" fill="currentColor"/> 
                
                {/* Arm Throwing Motion */}
                <motion.line 
                  x1="50" y1="42" x2="75" y2="25" 
                  stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                  style={{ transformOrigin: "50px 42px" }}
                  animate={{ rotate: [0, -30, 70] }} // Pulls back, then snaps forward
                  transition={{ duration: 0.8, ease: "easeIn" }}
                />
              </motion.svg>

              {/* The Boccia Ball */}
              <motion.div 
                className="absolute left-[65px] bottom-[45px] h-4 w-4 bg-[#FF9933] rounded-full shadow-lg z-20"
                // Perfect physics arc: Up and forward, then dropping to the ground
                animate={{ 
                  x: [0, 60, 140], 
                  y: [0, -60, 42] 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  times: [0, 0.4, 1] // Matches the arm release timing
                }}
              />
            </div>
          </motion.div>
        )}

        {/* ========================================================
            PHASE 2: THE LOGO IMPACT (Triggers when ball hits)
        ======================================================== */}
        {sequence === "impact" && (
          <motion.div
            key="logo-phase"
            className="absolute flex flex-col items-center gap-6"
            // The "Pop" effect - mimicking the energy of the ball hitting the ground
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative h-36 w-36 drop-shadow-xl">
              <Image 
                src="/jharkhand.PNG" 
                alt="Jharkhand Para Boccia" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
            
            <div className="text-center flex flex-col items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-black tracking-widest text-gray-900 uppercase">
                Jharkhand <span className="text-[#FF9933]">Para</span> Boccia
              </h2>
              
              {/* Expanding Tricolour Bar */}
              <motion.div 
                className="h-[4px] rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                style={{
                  background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
                }}
              />
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}