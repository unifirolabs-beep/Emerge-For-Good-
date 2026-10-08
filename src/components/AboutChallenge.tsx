"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, PenTool, Globe } from "lucide-react";

export function AboutChallenge() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-brand-dark-navy/50 uppercase mb-4 sm:mb-6"
            >
              01 / ABOUT THE CHALLENGE
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,8vw,4rem)] font-black text-brand-navy tracking-tight leading-[1.1] mb-6"
            >
              A better way <br />starts with you.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-brand-green border-l-4 border-brand-green pl-6 py-2"
            >
              An enterprise can do well and do good at the same time.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center space-y-6 text-brand-dark-navy/80 text-lg leading-relaxed"
          >
            <p>
              Every campus has them: students who look at a dry handpump, an overflowing bin or a village with no clinic nearby and think, there has to be a better way. If that is you, this challenge is yours.
            </p>
            <p>
              EMERGE FOR GOOD is the student innovation challenge of EMERGE AURO, the conscious capital conclave at Puducherry and Auroville. Conscious capitalism rests on a simple idea: an enterprise can do well and do good at the same time. We are asking you to show how.
            </p>
            <p>
              You do not need a finished product. You need a clear problem, a sharp idea and a team ready to stand behind it. The finale is live at Pondicherry University on 28 October 2026.
            </p>
          </motion.div>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              icon: Lightbulb,
              iconColor: "text-[#F97316]",
              iconBg: "bg-[#FFF7ED]",
              iconBorder: "border-[#FFEDD5]",
              title: "Pick a problem.",
              desc: "Pick a problem you care about."
            },
            {
              num: "02",
              icon: PenTool, // Or Microscope, PenTool is close enough
              iconColor: "text-[#2588F5]",
              iconBg: "bg-[#EFF6FF]",
              iconBorder: "border-[#DBEAFE]",
              title: "Build a solution.",
              desc: "Build a solution that works."
            },
            {
              num: "03",
              icon: Globe,
              iconColor: "text-[#07851F]",
              iconBg: "bg-[#F0FDF4]",
              iconBorder: "border-[#DCFCE7]",
              title: "Think beyond campus.",
              desc: "Show us how it could reach thousands of people."
            }
          ].map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E9E6DE] hover:border-[#93C5FD] hover:shadow-[0_20px_40px_-15px_rgba(37,136,245,0.25)] transition-all duration-500 relative overflow-hidden flex flex-col min-h-[220px]"
            >
              {/* Muted Sequence Number */}
              <div className="absolute top-2 right-4 text-[100px] leading-none font-black text-[#F4F4F5] group-hover:text-[#F1F5F9] transition-colors pointer-events-none select-none z-0 tracking-tighter">
                {card.num}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Top Row: Icon and Arrow */}
                <div className="flex items-start justify-between mb-12">
                  <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center border ${card.iconBg} ${card.iconBorder} group-hover:scale-110 transition-transform duration-500`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={2} />
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_4px_12px_rgba(37,136,245,0.2)] transition-shadow duration-500 mt-3 mr-1">
                    <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2588F5] transition-colors duration-500" strokeWidth={3} />
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="mt-auto">
                  <div className="w-6 h-[3px] bg-[#07851F] mb-3 rounded-full" />
                  <h3 className="text-[22px] font-bold text-[#071A75] mb-1 tracking-tight">{card.title}</h3>
                  <p className="text-[15px] text-[#66758E] leading-relaxed">{card.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
