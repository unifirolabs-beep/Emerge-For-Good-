"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, IndianRupee, MapPin, Trophy, Lightbulb } from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    label: "Open to",
    title: "All bachelor's degree",
    subtitle: "college students",
    color: "text-brand-green"
  },
  {
    icon: Calendar,
    label: "Apply by",
    title: "21 October 2026",
    subtitle: "Registration deadline",
    color: "text-brand-orange"
  },
  {
    icon: IndianRupee,
    label: "Fee",
    title: "None",
    subtitle: "Free to participate",
    color: "text-brand-navy"
  },
  {
    icon: MapPin,
    label: "Final",
    title: "28 October 2026",
    subtitle: "Pondicherry University",
    color: "text-[crimson]" // using a red/pink as a distinct highlight
  },
  {
    icon: Trophy,
    label: "Prize pool",
    title: "Rs 1,75,000",
    subtitle: "Bring an idea that matters",
    color: "text-[#8B5CF6]" // purple
  },
  {
    icon: Lightbulb,
    label: "Innovation domains",
    title: "07",
    subtitle: "domains",
    color: "text-brand-soft-blue"
  }
];

export function QuickFacts() {
  return (
    <section className="py-10 bg-white border-y border-brand-light-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 lg:gap-4 divide-x-0 lg:divide-x divide-brand-light-neutral/50">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-4"
            >
              <fact.icon className={`w-8 h-8 mb-3 ${fact.color}`} />
              <p className="text-xs font-medium text-brand-dark-navy/60 mb-1">{fact.label}</p>
              <p className="text-sm font-bold text-brand-dark-navy leading-tight">{fact.title}</p>
              <p className="text-xs text-brand-dark-navy/60 mt-0.5">{fact.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
