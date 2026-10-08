"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SchoolStudentsModal } from "./SchoolStudentsModal";

export function SchoolStudentsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#FCFAF5] overflow-hidden relative">
      <SchoolStudentsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Extremely subtle background decorative elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FF7900]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#2588F5]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#07851F]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-[80px] items-center">
          
          {/* Left Side: School Student Visual (50%) */}
          <div className="relative w-full mx-auto max-w-[600px] lg:max-w-none flex justify-center lg:justify-start mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[320px] sm:h-[420px] lg:h-[460px] xl:h-[480px] rounded-[24px] lg:rounded-[36px] shadow-[0_15px_50px_rgba(7,26,117,0.08)] z-10 overflow-hidden cursor-default"
            >
              <Image
                src="/school_students.jpg"
                alt="Young Innovators - School Students"
                fill
                className="object-cover object-center lg:object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              {/* Extremely subtle bottom edge fade only */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FCFAF5] to-transparent pointer-events-none" />
            </motion.div>

            {/* Orbital Decorations (behind image) */}
            <div className="absolute inset-0 sm:-inset-6 lg:-inset-8 border border-brand-dark-navy/10 rounded-[36px] lg:rounded-[50px] border-dashed animate-[spin_120s_linear_infinite] pointer-events-none z-0 hidden sm:block" />
            <div className="absolute inset-4 sm:-inset-2 lg:-inset-3 border border-[#2588F5]/20 rounded-[36px] lg:rounded-[48px] animate-[spin_80s_linear_infinite_reverse] pointer-events-none z-0 hidden sm:block" />
            
            {/* Nodes on Orbit */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-4 lg:-left-2 w-3 h-3 rounded-full bg-[#FF7900] z-20 shadow-[0_0_12px_rgba(255,121,0,0.4)]" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-4 lg:-right-2 w-2.5 h-2.5 rounded-full bg-[#07851F] z-20 shadow-[0_0_12px_rgba(7,133,31,0.4)]" 
            />
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-2 lg:-right-5 w-3.5 h-3.5 rounded-full bg-[#2588F5] z-20 shadow-[0_0_12px_rgba(37,136,245,0.4)]" 
            />

            {/* Hand-written visual accent */}
            <motion.div 
              initial={{ opacity: 0, rotate: -5, x: 20 }}
              whileInView={{ opacity: 1, rotate: -12, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute right-0 top-1/4 lg:-right-8 lg:top-1/3 z-30 hidden sm:block pointer-events-none"
            >
              <div className="text-brand-navy font-black text-xl lg:text-2xl tracking-tighter drop-shadow-sm" style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive" }}>
                Young <br />Innovators<br />
                <span className="text-[#FF7900]">Brighter<br />Tomorrow</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Program Information (50%) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left z-20 max-w-[480px] mx-auto lg:mx-0 pb-8 sm:pb-0"
          >
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#66758E] uppercase mb-4">
              A STATE-LEVEL SCIENCE EXPO FOR YOUNG INNOVATORS
            </p>
            
            <h2 className="text-[clamp(2.3rem,6.5vw,4.5rem)] font-black leading-[1] tracking-tighter mb-2">
              <span className="text-[#071A75] block">EMERGE</span>
              <span className="text-[#FF7900]">FOR </span>
              <span className="text-[#07851F]">GOOD</span>
            </h2>

            <h3 className="text-[22px] sm:text-[28px] font-bold text-[#071A75] mb-4 lg:mb-5 tracking-tight">
              Innovation Challenge 2026
            </h3>

            <p className="text-[15px] sm:text-[17px] text-[#66758E] leading-relaxed mb-8 max-w-[420px] mx-auto lg:mx-0">
              A platform for school students to showcase ideas, solve real-world problems and create a better tomorrow.
            </p>

            <div className="flex flex-col items-center lg:items-start">
              <motion.button 
                whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(7,26,117,0.35)" }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center justify-center gap-3 bg-[#071A75] text-white px-8 py-3.5 sm:py-4 rounded-full font-bold transition-colors duration-300 shadow-[0_4px_14px_rgba(7,26,117,0.25)] min-h-[48px] w-[90%] sm:w-auto"
              >
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
              </motion.button>

              <div className="mt-5 sm:mt-6 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-widest text-[#66758E]/80 uppercase flex-wrap">
                <span>Grades 6–12</span>
                <span className="w-1 h-1 rounded-full bg-[#66758E]/40" />
                <span>Young Innovators</span>
                <span className="w-1 h-1 rounded-full bg-[#66758E]/40" />
                <span>Science & Innovation</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
