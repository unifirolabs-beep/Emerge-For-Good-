"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Ticket, 
  GraduationCap, 
  Users,
  CheckCircle2,
  Building2,
  Sun,
  Recycle,
  Cpu,
  Rocket,
  Trophy,
  Medal,
  Award,
  ArrowRight
} from "lucide-react";

interface SchoolStudentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SchoolStudentsModal({ isOpen, onClose }: SchoolStudentsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  // Focus trap / management could go here, but omitted for brevity (keeping basic a11y)

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#071A75]/40 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[1180px] max-h-[96vh] xl:max-h-[92vh] bg-[#FCFAF5] rounded-[20px] xl:rounded-[28px] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#071A75] shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 sm:p-8 xl:p-12 scroll-smooth">
              
              {/* SECTION 1: Header */}
              <div className="grid xl:grid-cols-12 gap-8 items-center mb-10 xl:mb-16">
                <div className="xl:col-span-7 order-2 xl:order-1 text-center xl:text-left mt-4 xl:mt-0">
                  <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#66758E] uppercase mb-4">
                    A STATE-LEVEL SCIENCE EXPO FOR YOUNG INNOVATORS
                  </p>
                  <h2 id="modal-title" className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1] tracking-tighter mb-2">
                    <span className="text-[#071A75] block">EMERGE</span>
                    <span className="text-[#FF7900]">FOR </span>
                    <span className="text-[#07851F]">GOOD</span>
                  </h2>
                  <h3 className="text-xl sm:text-[28px] font-bold text-[#071A75] mb-4 tracking-tight">
                    Innovation Challenge 2026
                  </h3>
                  <p className="text-[15px] sm:text-[17px] text-[#66758E] leading-relaxed max-w-[480px] mx-auto xl:mx-0">
                    A platform for school students to showcase ideas, solve real-world problems and create a better tomorrow.
                  </p>
                </div>
                
                <div className="xl:col-span-5 order-1 xl:order-2 relative flex justify-center">
                  <div className="relative w-[280px] sm:w-[400px] xl:w-full aspect-square xl:aspect-[4/3]">
                    <div className="absolute inset-0 z-10 rounded-full xl:rounded-[32px] overflow-hidden">
                      <Image
                        src="/school_students.jpg"
                        alt="Young Innovators"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#FCFAF5] to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Event Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: Calendar, label: "FINAL EVENT", text: "28 October 2026", color: "text-[#2588F5]", bg: "bg-[#2588F5]/10" },
                  { icon: MapPin, label: "VENUE", text: "Pondicherry University", color: "text-[#071A75]", bg: "bg-[#071A75]/10" },
                  { icon: Clock, label: "LAST DATE TO APPLY", text: "21 October 2026", color: "text-[#FF7900]", bg: "bg-[#FF7900]/10" },
                  { icon: Ticket, label: "REGISTRATION", text: "FREE", color: "text-[#07851F]", bg: "bg-[#07851F]/10" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-dark-navy/5 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                      <item.icon className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-[#66758E] uppercase mb-1">{item.label}</div>
                      <div className="text-[15px] font-bold text-[#071A75]">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid xl:grid-cols-2 gap-10 xl:gap-16 mb-16">
                {/* SECTION 3: Who Can Participate */}
                <div>
                  <h4 className="text-xl font-bold text-[#071A75] mb-6 flex items-center gap-3">
                    <Users className="text-[#FF7900]" /> WHO CAN PARTICIPATE?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-brand-dark-navy/5 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#071A75]">YOUNG SCIENTISTS</div>
                        <div className="text-sm font-semibold text-[#FF7900]">Grades 6–8</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-brand-dark-navy/5 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#07851F]/10 text-[#07851F] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#071A75]">JUNIOR SCIENTISTS</div>
                        <div className="text-sm font-semibold text-[#07851F]">Grades 9–12</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Why Participate */}
                <div>
                  <h4 className="text-xl font-bold text-[#071A75] mb-6 flex items-center gap-3">
                    <Sun className="text-[#FF7900]" /> WHY PARTICIPATE?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {[
                      "Showcase your innovative ideas",
                      "Solve real-world problems",
                      "Build creativity, skills & confidence",
                      "Gain real-world exposure",
                      "Connect with fellow young innovators"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#07851F] shrink-0 mt-0.5" />
                        <span className="text-[15px] font-medium text-[#475569] leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 5: 5 Core Innovation Domains */}
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-[#071A75] mb-8 text-center xl:text-left">
                  <span className="text-[#FF7900] text-3xl">5</span> CORE INNOVATION DOMAINS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
                  {[
                    { num: "01", icon: Building2, title: "SMART CITY", desc: "Smarter cities. Better living.", bg: "bg-[#EFF6FF]", border: "border-[#DBEAFE]", color: "text-[#2588F5]" },
                    { num: "02", icon: Sun, title: "RENEWABLE ENERGY", desc: "Clean energy. Sustainable future.", bg: "bg-[#FFF7ED]", border: "border-[#FFEDD5]", color: "text-[#FF7900]" },
                    { num: "03", icon: Recycle, title: "WASTE MANAGEMENT", desc: "Reduce. Reuse. Reimagine.", bg: "bg-[#F0FDF4]", border: "border-[#DCFCE7]", color: "text-[#07851F]" },
                    { num: "04", icon: Cpu, title: "ROBOTICS & AUTOMATION", desc: "Smarter machines. Greater possibilities.", bg: "bg-[#FAF5FF]", border: "border-[#F3E8FF]", color: "text-[#9333EA]" },
                    { num: "05", icon: Rocket, title: "SPACE SCIENCE & SATELLITE", desc: "Explore. Connect. Advance.", bg: "bg-[#F0F9FF]", border: "border-[#E0F2FE]", color: "text-[#0284C7]" }
                  ].map((domain, i) => (
                    <div key={i} className={`p-5 rounded-2xl border ${domain.bg} ${domain.border} flex flex-row xl:flex-col items-center xl:items-start gap-4 xl:gap-4 h-full xl:min-h-[180px]`}>
                      <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 ${domain.color}`}>
                        <domain.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-xs font-black mb-1 ${domain.color}`}>{domain.num} — {domain.title}</div>
                        <div className="text-[13px] font-medium text-slate-600 leading-snug">{domain.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 6: Exciting Opportunities */}
              <div className="mb-16">
                <h4 className="text-xl font-bold text-[#071A75] mb-6 text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                  <Trophy className="text-[#FF7900]" /> EXCITING OPPORTUNITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Trophy, title: "CASH PRIZES", desc: "Cash prizes for winners", color: "text-[#F59E0B]", bg: "bg-[#FEF3C7]" },
                    { icon: Medal, title: "MEDALS", desc: "Medals for top performers", color: "text-[#EF4444]", bg: "bg-[#FEE2E2]" },
                    { icon: Award, title: "CERTIFICATES", desc: "Certificates for all participants", color: "text-[#3B82F6]", bg: "bg-[#DBEAFE]" }
                  ].map((opp, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-brand-dark-navy/5 shadow-sm flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${opp.bg} ${opp.color}`}>
                        <opp.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#071A75] mb-0.5">{opp.title}</div>
                        <div className="text-[13px] text-slate-600 font-medium">{opp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 7: Sriharikota Feature */}
              <div className="relative w-full mb-16 min-h-[220px] flex items-center px-6 py-10 sm:px-12 sm:py-16 mt-8">
                {/* Background (Clipped for rounded corners) */}
                <div className="absolute inset-0 z-0 rounded-2xl xl:rounded-3xl overflow-hidden shadow-lg">
                  <Image 
                    src="/sriharikota_banner.jpg" 
                    alt="Space Background" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#071A75]/70 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071A75] via-[#071A75]/80 to-transparent" />
                </div>
                
                {/* Animated Rocket on the Right (Unclipped to pop out) */}
                <motion.div 
                  initial={{ y: 50, opacity: 0, x: 20 }}
                  whileInView={{ y: 0, opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="absolute right-0 sm:right-6 xl:right-16 bottom-0 z-10 w-[160px] sm:w-[220px] xl:w-[280px] pointer-events-none"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="relative w-full aspect-[0.45]"
                  >
                    <Image
                      src="/srihariikota.png"
                      alt="Sriharikota ISRO Rocket"
                      fill
                      className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                    />
                  </motion.div>
                </motion.div>

                <div className="relative z-20 max-w-[200px] sm:max-w-md xl:max-w-xl">
                  <h4 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight leading-tight">
                    WINNERS GET A CHANCE TO VISIT <br/>
                    <span className="text-[#FF7900]">SRIHARIKOTA (ISRO)</span>
                  </h4>
                  <p className="text-white/90 text-[14px] sm:text-[15px] xl:text-lg font-medium leading-relaxed">
                    Get inspired at India's space gateway and experience the world of space technology!
                  </p>
                </div>
              </div>

              {/* SECTION 8: Brand Statement */}
              <div className="text-center mb-12">
                <div className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#071A75] mb-2">
                  IDEAS <span className="text-[#FF7900]">•</span> PEOPLE <span className="text-[#07851F]">•</span> PLANET
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#071A75] tracking-tight">
                  A BRIGHTER TOMORROW
                </div>
              </div>

              {/* SECTION 9: Final CTA */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark-navy/5 shadow-sm text-center">
                <h4 className="text-2xl sm:text-3xl font-black text-[#071A75] mb-3">READY TO BECOME A YOUNG INNOVATOR?</h4>
                <p className="text-[#66758E] font-medium mb-2">Bring your idea. Build your solution. Create a better tomorrow.</p>
                <p className="text-[#071A75] font-bold mb-8 text-sm bg-[#FF7900]/10 py-2 px-4 rounded-full inline-block">This is mainly for students of Pondicherry.</p>
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-[15px] font-bold text-[#66758E] uppercase tracking-wider">To Register, Call Directly</p>
                  <a 
                    href="tel:8511116253" 
                    className="flex items-center justify-center gap-3 bg-[#071A75] hover:bg-[#06145B] text-white text-2xl sm:text-3xl px-10 py-4 rounded-full font-black transition-all shadow-lg hover:-translate-y-1"
                  >
                    📞 8511116253
                  </a>
                </div>
              </div>

              {/* SECTION 10: Contact */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[13px] font-bold text-[#66758E]">
                <a href="mailto:yumiturobotics@gmail.com" className="hover:text-[#071A75] transition-colors">yumiturobotics@gmail.com</a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a href="tel:8511116253" className="hover:text-[#071A75] transition-colors">8511116253 / 8778262286</a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
