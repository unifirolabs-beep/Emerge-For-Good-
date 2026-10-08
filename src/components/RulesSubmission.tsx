"use client";

import { motion } from "framer-motion";
import { Users2, FileText, CheckCircle2 } from "lucide-react";

export function RulesSubmission() {
  return (
    <section id="rules" className="py-16 sm:py-24 bg-white border-y border-brand-light-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-brand-dark-navy/50 uppercase mb-4 sm:mb-6"
          >
            04 / RULES & SUBMISSION
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,7vw,3.5rem)] font-black text-brand-navy tracking-tight leading-[1.1] mb-6"
          >
            A clear idea.<br/>A ready team.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-dark-navy/70"
          >
            You do not need a finished product. Here's what your application needs.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card A - Your team */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-warm-white rounded-3xl p-8 lg:p-10 border border-brand-light-neutral"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-brand-light-neutral/50 pb-8">
              <div className="p-4 rounded-2xl bg-brand-soft-blue/10 text-brand-soft-blue">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-brand-navy">Your team</h3>
            </div>
            
            <ul className="space-y-8">
              {[
                { title: "3 members. One team leader.", desc: "The team leader is the point of contact." },
                { title: "Name a mentor.", desc: "Every team names a mentor." },
                { title: "Record your academic details.", desc: "Include the team's college, year and branch of study in the application." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{item.title}</h4>
                    <p className="text-brand-dark-navy/70 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card B - Your submission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-warm-white rounded-3xl p-8 lg:p-10 border border-brand-light-neutral"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-brand-light-neutral/50 pb-8">
              <div className="p-4 rounded-2xl bg-brand-orange/10 text-brand-orange">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-brand-navy">Your submission</h3>
            </div>
            
            <ul className="space-y-8">
              {[
                { title: "Choose one innovation domain.", desc: "One innovation domain per team." },
                { title: "Write an elevator pitch.", desc: "Your idea in one sentence." },
                { title: "Upload your pitch deck.", desc: "Upload it with your application. This is mandatory." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{item.title}</h4>
                    <p className="text-brand-dark-navy/70 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
