"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { EmblemSVG } from "./EmblemSVG";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4">
          
          {/* Left Column */}
          <div className="w-full lg:w-[55%] flex flex-col pt-4 sm:pt-8 text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#828D9F] uppercase mb-4 sm:mb-5">
                An Emerge Auro Initiative
              </p>
            </motion.div>
            
            <motion.h1
              className="font-black tracking-[-0.03em] leading-[0.85] mb-6 flex flex-col items-center lg:items-start"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block text-[#112369] text-[clamp(3.5rem,12vw,8rem)]"
              >
                EMERGE
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block flex-wrap justify-center lg:justify-start flex text-[clamp(2.8rem,10vw,7rem)] mt-1"
              >
                <span className="text-[#FF7900]">FOR&nbsp;</span>
                <span className="text-[#07851F]">GOOD</span>
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-[clamp(1.5rem,5vw,34px)] font-bold text-[#112369] leading-tight tracking-tight mb-1">
                Innovation Challenge
              </h2>
              <h3 className="text-[clamp(1.5rem,5vw,34px)] font-bold text-[#FF7900] leading-tight tracking-tight">
                & Science Model Competition
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[clamp(15px,3vw,19px)] text-[#66758E] mb-10 sm:mb-12 max-w-[580px] leading-[1.6]"
            >
              Got an idea that could fix something real? Bring it. Seven domains, Rs 1,75,000 in prizes, and a live finale at Pondicherry University.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIX85YwicvAAbzC7yqKa3uhTsX2uBg-BFAUMLQ3LibRClVBQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#071775] text-white px-9 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_12px_24px_rgba(7,23,117,0.3)] group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              
              <div className="hidden sm:block h-14 w-[1px] bg-[#E2E8F0]" />
              <div className="block sm:hidden w-14 h-[1px] bg-[#E2E8F0]" />
              
              <div className="flex items-center gap-4">
                <div className="bg-[#F1F5F9] p-3 rounded-xl">
                  <CalendarDays className="w-6 h-6 sm:w-7 sm:h-7 text-[#112369]" strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-[#828D9F] uppercase mb-0.5">
                    Applications Close
                  </p>
                  <p className="text-[14px] sm:text-[16px] font-black text-[#112369] tracking-tight">21 October 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[45%] flex items-center justify-center relative mt-12 lg:mt-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">
            
            {/* Huge Soft Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-[#07851F]/10 via-transparent to-[#2588F5]/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#FF7900]/5 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none z-0" />

            {/* Orbit Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[500px] lg:h-[600px] z-10">
              
              {/* Outer Gradient Ring */}
              <svg viewBox="0 0 600 600" className="w-full h-full animate-[spin_120s_linear_infinite]">
                <defs>
                  <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7900" stopOpacity="0.8" />
                    <stop offset="33%" stopColor="#2588F5" stopOpacity="0.8" />
                    <stop offset="66%" stopColor="#07851F" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#D9FF55" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="300" cy="300" r="290" 
                  stroke="url(#orbit-grad)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="4 8 16 8" 
                  opacity="0.6"
                />
              </svg>

              {/* Floating Nodes */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-[12%] left-[18%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FF7900] shadow-[0_0_15px_rgba(255,121,0,0.8)]" />
                <div className="absolute top-[20%] right-[10%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2588F5] shadow-[0_0_15px_rgba(37,136,245,0.8)]" />
                <div className="absolute bottom-[20%] left-[10%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#07851F] shadow-[0_0_20px_rgba(7,133,31,0.8)]" />
                <div className="absolute bottom-[25%] right-[15%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D9FF55] shadow-[0_0_15px_rgba(217,255,85,0.8)]" />
              </motion.div>
            </div>

            {/* Official Circular Emblem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 w-[220px] sm:w-[350px] lg:w-[420px] h-[220px] sm:h-[350px] lg:h-[420px] bg-white rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-[2%]"
            >
              <EmblemSVG className="w-full h-full" />
            </motion.div>
            
            {/* Vertical Label */}
            <div className="absolute -right-2 lg:-right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 lg:gap-5 z-30">
              <div className="w-[3px] lg:w-[4px] h-[100px] lg:h-[120px] flex flex-col rounded-full overflow-hidden shadow-sm">
                <div className="h-1/3 w-full bg-[#2588F5]" />
                <div className="h-1/3 w-full bg-[#FF7900]" />
                <div className="h-1/3 w-full bg-[#07851F]" />
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[14px]">
                {["PEOPLE", "IDEAS", "CAMPUSES", "COMMUNITIES", "REAL CHANGE"].map((word, i) => (
                  <p key={i} className="text-[9px] lg:text-[11px] font-bold tracking-[0.2em] text-[#66758E] uppercase leading-none">
                    {word}
                  </p>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
