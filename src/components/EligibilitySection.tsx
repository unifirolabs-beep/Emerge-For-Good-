"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Wallet, Users, Target, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// --- Illustrations ---

const PatternDefs = () => (
  <svg width="0" height="0" className="absolute pointer-events-none">
    <defs>
      <pattern id="stripes-purple" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.3" />
      </pattern>
      <pattern id="stripes-blue" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.3" />
      </pattern>
      <pattern id="stripes-orange" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
        <line x1="0" y1="4" x2="8" y2="4" stroke="#F97316" strokeWidth="2" strokeOpacity="0.3" />
      </pattern>
      <pattern id="stripes-green" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#22C55E" strokeWidth="2" strokeOpacity="0.3" />
      </pattern>
      
      <radialGradient id="sphere-purple" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#D8B4FE" />
        <stop offset="100%" stopColor="#7E22CE" />
      </radialGradient>
      <radialGradient id="sphere-blue" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </radialGradient>
      <radialGradient id="sphere-orange" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FDBA74" />
        <stop offset="100%" stopColor="#C2410C" />
      </radialGradient>
      <radialGradient id="sphere-green" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#86EFAC" />
        <stop offset="100%" stopColor="#15803D" />
      </radialGradient>
    </defs>
  </svg>
);

const PurpleArt = ({ layer1, layer2 }: any) => (
  <div className="absolute -bottom-8 -right-8 w-48 h-48 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    <motion.div style={{ x: layer2, y: layer2 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="70" cy="70" r="40" fill="url(#stripes-purple)" />
        <rect x="20" y="50" width="30" height="40" rx="4" fill="#A855F7" opacity="0.8" />
      </svg>
    </motion.div>
    <motion.div style={{ x: layer1, y: layer1 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="75" cy="45" r="20" fill="url(#sphere-purple)" />
        <circle cx="35" cy="25" r="8" fill="url(#sphere-purple)" />
      </svg>
    </motion.div>
  </div>
);

const BlueArt = ({ layer1, layer2 }: any) => (
  <div className="absolute -bottom-6 -right-6 w-48 h-48 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    <motion.div style={{ x: layer2, y: layer2 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M 30 100 L 100 30 L 100 100 Z" fill="url(#stripes-blue)" />
        <rect x="50" y="40" width="25" height="25" fill="#3B82F6" opacity="0.9" />
      </svg>
    </motion.div>
    <motion.div style={{ x: layer1, y: layer1 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="40" cy="70" r="15" fill="url(#sphere-blue)" />
        <circle cx="80" cy="25" r="6" fill="url(#sphere-blue)" />
      </svg>
    </motion.div>
  </div>
);

const OrangeArt = ({ layer1, layer2 }: any) => (
  <div className="absolute -bottom-8 -right-8 w-48 h-48 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    <motion.div style={{ x: layer2, y: layer2 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="80" r="45" fill="url(#stripes-orange)" />
        <rect x="70" y="30" width="15" height="50" rx="7.5" fill="#F97316" opacity="0.9" />
      </svg>
    </motion.div>
    <motion.div style={{ x: layer1, y: layer1 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="45" cy="40" r="18" fill="url(#sphere-orange)" />
        <circle cx="20" cy="80" r="10" fill="url(#sphere-orange)" />
      </svg>
    </motion.div>
  </div>
);

const GreenArt = ({ layer1, layer2 }: any) => (
  <div className="absolute -bottom-6 -right-6 w-48 h-48 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    <motion.div style={{ x: layer2, y: layer2 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="70" cy="70" r="40" fill="url(#stripes-green)" />
        <path d="M 20 100 Q 20 50 70 50 L 70 70 Q 40 70 40 100 Z" fill="#22C55E" opacity="0.9" />
      </svg>
    </motion.div>
    <motion.div style={{ x: layer1, y: layer1 }} className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="75" cy="35" r="14" fill="url(#sphere-green)" />
        <circle cx="25" cy="75" r="8" fill="url(#sphere-green)" />
      </svg>
    </motion.div>
  </div>
);

// --- Data ---

const cardsData = [
  {
    num: "01",
    icon: GraduationCap,
    theme: "purple",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverBorder: "hover:border-purple-300",
    hoverShadow: "hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.2)]",
    title: "Any discipline. Every idea.",
    desc: "Any bachelor's degree student, any discipline. Engineering, science, arts, commerce, design: if you have an idea, you are in.",
    Art: PurpleArt,
  },
  {
    num: "02",
    icon: Wallet,
    theme: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "hover:shadow-[0_20px_50px_-12px_rgba(37,136,245,0.2)]",
    title: "It costs nothing.",
    desc: "There is no registration fee.",
    Art: BlueArt,
  },
  {
    num: "03",
    icon: Users,
    theme: "orange",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-300",
    hoverShadow: "hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.2)]",
    title: "Bring your team.",
    desc: "Three members, with a mentor in your corner.",
    Art: OrangeArt,
  },
  {
    num: "04",
    icon: Target,
    theme: "green",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    hoverBorder: "hover:border-green-300",
    hoverShadow: "hover:shadow-[0_20px_50px_-12px_rgba(22,163,74,0.2)]",
    title: "Choose your cause.",
    desc: "Your idea should fit one of seven innovation domains.",
    Art: GreenArt,
  }
];

// --- Interactive Card Component ---

function InteractiveCard({ card, index }: { card: typeof cardsData[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHoverable, setIsHoverable] = useState(true);
  
  // Disable complex hover tracking on touch devices
  useEffect(() => {
    setIsHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  // Map motion values to geometric layers for parallax
  const layer1X = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const layer1Y = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);
  const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);
  const layer2Y = useTransform(mouseYSpring, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHoverable || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate normalized position -0.5 to 0.5
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      whileHover={isHoverable ? { y: -6, scale: 1.01 } : { scale: 0.99 }}
      whileTap={{ scale: 0.99 }}
      className={`group relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 transition-all duration-400 border border-[#F1F5F9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-default ${card.hoverBorder} ${card.hoverShadow} flex flex-col min-h-[240px]`}
    >
      {/* Abstract Geometric Art Background */}
      <card.Art layer1={layer1X} layer2={layer2X} />
      
      {/* Background Sequence Number */}
      <div className={`absolute top-2 right-4 text-[90px] leading-none font-black text-[#F8FAFC] group-hover:text-${card.theme}-50 transition-colors duration-400 pointer-events-none select-none z-0 tracking-tighter`}>
        {card.num}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Top Icon Badge */}
        <div className={`w-[48px] h-[48px] rounded-2xl flex items-center justify-center mb-10 ${card.iconBg} transition-transform duration-400 group-hover:scale-105 group-hover:rotate-3 shadow-sm`}>
          <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={2} />
        </div>
        
        {/* Content */}
        <div className="mt-auto max-w-[85%] pr-4">
          <h3 className="text-xl font-bold text-[#0F172A] mb-2 tracking-tight group-hover:text-[#020617] transition-colors">{card.title}</h3>
          <p className="text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed group-hover:text-[#475569] transition-colors">{card.desc}</p>
        </div>

        {/* Small interaction arrow */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 opacity-100 mt-4 overflow-hidden pointer-events-none">
          <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

// --- Main Section ---

export function EligibilitySection() {
  return (
    <section id="eligibility" className="py-16 sm:py-24 bg-white border-y border-[#F1F5F9] relative overflow-hidden">
      <PatternDefs />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Title) */}
          <div className="lg:sticky lg:top-32 h-fit max-w-sm">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] text-[#64748B] uppercase mb-5"
            >
              02 / WHO CAN PARTICIPATE
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,7vw,4rem)] font-black text-[#0F172A] tracking-[-0.03em] leading-[1.05] mb-6 text-balance"
            >
              Big ideas don’t need a specific degree.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 mt-8"
            >
              <div className="w-1 h-12 bg-[#F97316] rounded-full shrink-0" />
              <p className="text-[17px] text-[#475569] leading-relaxed">
                All bachelor's degree college students are welcome.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column (4 Cards) */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {cardsData.map((card, i) => (
              <InteractiveCard key={card.num} card={card} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
