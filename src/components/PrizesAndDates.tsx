"use client";

import { motion } from "framer-motion";
import { Trophy, CalendarCheck, CalendarDays, Flag } from "lucide-react";

export function PrizesAndDates() {
  return (
    <section id="dates" className="py-16 sm:py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Prizes */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-brand-dark-navy/50 uppercase mb-4 sm:mb-6"
            >
              05 / PRIZES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,7vw,3.5rem)] font-black text-brand-navy tracking-tight leading-[1.1] mb-6"
            >
              Good ideas deserve backing.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-dark-navy/70 mb-12"
            >
              Rs 1,75,000 in cash prizes goes to the top three teams.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* 1st Prize */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-brand-light-neutral text-center shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FBBF24]" /> {/* Gold accent */}
                <div className="w-16 h-16 mx-auto bg-[#FEF3C7] rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-navy mb-1">1st</h3>
                <p className="text-2xl font-black text-brand-navy">Rs 1,00,000</p>
              </motion.div>

              {/* 2nd Prize */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-6 border border-brand-light-neutral text-center shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#9CA3AF]" /> {/* Silver accent */}
                <div className="w-16 h-16 mx-auto bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-[#6B7280]" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-navy mb-1">2nd</h3>
                <p className="text-2xl font-black text-brand-navy">Rs 50,000</p>
              </motion.div>

              {/* 3rd Prize */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-3xl p-6 border border-brand-light-neutral text-center shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D97706]" /> {/* Bronze accent */}
                <div className="w-16 h-16 mx-auto bg-[#FEF3C7] rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-[#B45309]" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-navy mb-1">3rd</h3>
                <p className="text-2xl font-black text-brand-navy">Rs 25,000</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Key Dates */}
          <div className="lg:border-l border-brand-light-neutral/50 lg:pl-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-brand-dark-navy/50 uppercase mb-4 sm:mb-6"
            >
              06 / KEY DATES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,7vw,3.5rem)] font-black text-brand-navy tracking-tight leading-[1.1] mb-6"
            >
              Mark your calendar.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-dark-navy/70 mb-12"
            >
              Two dates. One idea.
            </motion.p>

            <div className="relative border-l-2 border-brand-light-neutral ml-6 space-y-12">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative pl-10"
              >
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-brand-soft-blue rounded-full flex items-center justify-center border-4 border-brand-warm-white shadow-sm">
                  <CalendarCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-bold text-brand-soft-blue uppercase tracking-wider mb-1">Applications open</p>
                <h3 className="text-2xl font-bold text-brand-navy">28 September 2026</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative pl-10"
              >
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center border-4 border-brand-warm-white shadow-sm">
                  <CalendarDays className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-1">Last day to apply</p>
                <h3 className="text-2xl font-bold text-brand-navy">21 October 2026</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative pl-10"
              >
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center border-4 border-brand-warm-white shadow-sm">
                  <Flag className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-bold text-brand-green uppercase tracking-wider mb-1">Finale</p>
                <h3 className="text-2xl font-bold text-brand-navy mb-1">28 October 2026</h3>
                <p className="text-lg text-brand-dark-navy/70">Pondicherry University</p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
