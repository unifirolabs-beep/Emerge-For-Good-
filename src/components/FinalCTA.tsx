"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Wallet } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-brand-navy via-[#0A2494] to-[#041151] rounded-3xl p-8 py-16 sm:p-12 lg:p-20 text-center overflow-hidden relative shadow-2xl"
        >
          {/* Abstract scientific/geometric background elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 1000 1000" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-[spin_120s_linear_infinite]" fill="none">
              <circle cx="500" cy="500" r="400" stroke="url(#cta-grad-1)" strokeWidth="2" strokeDasharray="20 40" />
              <circle cx="500" cy="500" r="300" stroke="url(#cta-grad-2)" strokeWidth="4" strokeDasharray="60 80" />
              <circle cx="500" cy="500" r="200" stroke="url(#cta-grad-3)" strokeWidth="1" />
              <defs>
                <linearGradient id="cta-grad-1" x1="0" y1="0" x2="1000" y2="1000">
                  <stop offset="0%" stopColor="#2588F5" />
                  <stop offset="100%" stopColor="#D9FF55" />
                </linearGradient>
                <linearGradient id="cta-grad-2" x1="1000" y1="0" x2="0" y2="1000">
                  <stop offset="0%" stopColor="#FF7900" />
                  <stop offset="100%" stopColor="#07851F" />
                </linearGradient>
                <linearGradient id="cta-grad-3" x1="0" y1="500" x2="1000" y2="500">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-[10px] sm:text-sm font-bold tracking-widest text-brand-lime uppercase mb-4 sm:mb-6">
              An Emerge Auro Initiative
            </p>
            
            <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 text-balance">
              Got a better way?<br />Bring it.
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-10 sm:mb-12 text-balance font-medium">
              A clear problem. A sharp idea. A team ready to stand behind it.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIX85YwicvAAbzC7yqKa3uhTsX2uBg-BFAUMLQ3LibRClVBQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-lime text-brand-navy px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-lime/20 mb-10 sm:mb-12"
            >
              Register Now
              <ArrowRight className="w-6 h-6" />
            </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-medium text-blue-200">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-brand-orange" />
                <span>Apply by 21 October 2026</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-brand-green" />
                <span>No registration fee.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
