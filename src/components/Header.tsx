"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { name: "The Challenge", href: "#about" },
  { name: "Domains", href: "#domains" },
  { name: "Eligibility", href: "#eligibility" },
  { name: "Rules", href: "#rules" },
  { name: "Key Dates", href: "#dates" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-warm-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark-navy/80 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIX85YwicvAAbzC7yqKa3uhTsX2uBg-BFAUMLQ3LibRClVBQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#102A9B] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#102A9B]/20"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-brand-dark-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-warm-white border-t border-brand-light-neutral overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-dark-navy block py-2 border-b border-brand-light-neutral/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIX85YwicvAAbzC7yqKa3uhTsX2uBg-BFAUMLQ3LibRClVBQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-base font-semibold mt-4"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
