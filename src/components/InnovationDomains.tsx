"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, Home, Recycle, Droplets, 
  Settings, Users, Leaf,
  Trees, Trash2, Waves, GraduationCap, Flower2, Mountain
} from "lucide-react";

const domains = [
  {
    num: "01",
    title: "Healthcare",
    desc: "Tackle malnutrition, bring preventive care and early diagnosis closer to people, or build health awareness.",
    icon: HeartPulse,
    bgIcon: HeartPulse,
    gradient: "from-[#FF3868] to-[#FF4F80]",
    iconColor: "text-[#FF3868]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(255,56,104,0.4)]"
  },
  {
    num: "02",
    title: "Rural Development",
    desc: "Ideas for sanitation, infrastructure, electrification and connectivity, or new ways to earn for rural families.",
    icon: Home,
    bgIcon: Trees,
    gradient: "from-[#FFC43D] to-[#FFAA16]",
    iconColor: "text-[#FFAA16]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(255,170,22,0.4)]"
  },
  {
    num: "03",
    title: "Waste Management",
    desc: "Reduce, segregate, recycle and upcycle, modernise the circular economy, or help keep waste out of landfills.",
    icon: Recycle,
    bgIcon: Trash2,
    gradient: "from-[#10D8A0] to-[#00C99A]",
    iconColor: "text-[#00C99A]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(0,201,154,0.4)]"
  },
  {
    num: "04",
    title: "Water",
    desc: "Clean drinking water, wastewater treatment, conservation and reuse, or help bring a lake or river back to life.",
    icon: Droplets,
    bgIcon: Waves,
    gradient: "from-[#19A7F8] to-[#0789F5]",
    iconColor: "text-[#0789F5]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(7,137,245,0.4)]"
  },
  {
    num: "05",
    title: "Skill Development",
    desc: "Financial literacy, vocational skills, employability and entrepreneurship that lead to real jobs.",
    icon: Settings,
    bgIcon: GraduationCap,
    gradient: "from-[#9950FF] to-[#7C3AED]",
    iconColor: "text-[#7C3AED]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(124,58,237,0.4)]"
  },
  {
    num: "06",
    title: "Women Empowerment",
    desc: "Livelihoods, entrepreneurship, financial inclusion, education, safety and leadership.",
    icon: Users,
    bgIcon: Flower2,
    gradient: "from-[#FF4C96] to-[#F72C83]",
    iconColor: "text-[#F72C83]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(247,44,131,0.4)]"
  },
  {
    num: "07",
    title: "Responsible Tourism",
    desc: "Eco tourism, alternatives to single-use plastics, habitat protection and animal welfare.",
    icon: Leaf,
    bgIcon: Mountain,
    gradient: "from-[#19D69B] to-[#00C985]",
    iconColor: "text-[#00C985]",
    shadow: "shadow-[0_12px_24px_-8px_rgba(0,201,133,0.4)]"
  }
];

export function InnovationDomains() {
  return (
    <section id="domains" className="relative py-16 md:py-24 lg:py-32 bg-[#FFFCF6] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Pastel circles */}
        <div className="absolute -left-[10%] top-[10%] w-[30%] h-[50%] rounded-full bg-yellow-400/10 blur-[100px] md:blur-[140px]" />
        <div className="absolute -right-[10%] top-[20%] w-[25%] h-[40%] rounded-full bg-blue-400/10 blur-[100px] md:blur-[140px]" />
        <div className="absolute -right-[5%] bottom-[10%] w-[30%] h-[40%] rounded-full bg-purple-400/10 blur-[100px] md:blur-[140px]" />

        {/* Dot patterns */}
        <div className="absolute left-4 md:left-8 top-1/4 opacity-10 hidden sm:block">
          <svg width="40" height="120" viewBox="0 0 40 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="40" height="120" fill="url(#dots-left)" className="text-gray-800" />
          </svg>
        </div>
        <div className="absolute right-4 md:right-8 top-1/3 opacity-10 hidden lg:block">
          <svg width="80" height="160" viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-right" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="80" height="160" fill="url(#dots-right)" className="text-gray-800" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-[#102B83]/50 uppercase mb-3 md:mb-5"
          >
            03 / SEVEN INNOVATION DOMAINS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-[#102B83] tracking-tight leading-[1.05] mb-5 md:mb-6"
          >
            Seven problem <span className="text-[#FF8A00]">areas</span><span className="text-[#08C879]">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl"
          >
            Pick the one you cannot stop thinking about. Whichever you choose, we look for the same two things: impact you can measure and a solution that can grow.
          </motion.p>
        </div>

        {/* Domain Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
          {domains.map((domain, i) => {
            const isLast = i === 6;
            // The 7th card is full width on tablet (md), others are 50%.
            // All cards adhere to 33.3% on lg, and 25% on xl.
            const widthClass = isLast 
              ? "w-full lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]" 
              : "w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]";

            return (
              <motion.div
                key={domain.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-[18px] md:rounded-[24px] p-5 md:p-7 lg:p-8 flex flex-row md:flex-col items-start gap-4 md:gap-0 min-h-[140px] md:min-h-[300px] bg-gradient-to-br ${domain.gradient} ${domain.shadow} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group ${widthClass}`}
              >
                {/* Decorative Background Icon */}
                <div className="absolute right-[-10%] bottom-[-20%] md:right-[-15%] md:bottom-[-10%] opacity-[0.12] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-3">
                  <domain.bgIcon className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 text-white" strokeWidth={1.5} />
                </div>

                {/* Left Section (Mobile) / Top Section (Desktop): Icon and Number */}
                <div className="relative z-10 shrink-0 md:w-full md:mb-8 flex items-center md:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 bg-white/95 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <domain.icon className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 ${domain.iconColor}`} strokeWidth={2.5} />
                  </div>
                  {/* Number (Desktop Only) */}
                  <span className="hidden md:block text-2xl lg:text-3xl font-black text-white/90">{domain.num}</span>
                </div>
                
                {/* Right Section (Mobile) / Bottom Section (Desktop): Text */}
                <div className="relative z-10 flex flex-col flex-1 md:mt-auto pt-1 md:pt-0 pr-1 md:pr-0">
                  {/* Number (Mobile Only) */}
                  <span className="md:hidden text-[11px] sm:text-xs font-bold text-white/80 mb-0.5 tracking-wider">{domain.num}</span>
                  
                  <h3 className="text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-white mb-1.5 md:mb-3 lg:mb-4 tracking-tight leading-tight">
                    {domain.title}
                  </h3>
                  <p className="text-white/95 text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-snug md:leading-relaxed font-medium">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
