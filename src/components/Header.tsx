"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 font-heading font-extrabold text-xl tracking-tight leading-none group-hover:text-brand-accent transition-colors">
                SHAH NAWAZ
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(5,150,105,0.5)] animate-pulse" />
            </div>
            <span className="text-slate-400 font-sans text-[10px] tracking-[0.2em] font-semibold uppercase mt-0.5">
              GROWTH AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-brand-accent transition-colors relative py-1 font-semibold"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("#contact")}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-brand-accent to-emerald-600 hover:from-emerald-600 hover:to-brand-accent text-white rounded-xl text-sm font-semibold shadow-md shadow-brand-accent/15 hover:shadow-brand-accent/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col space-y-6 text-2xl font-heading font-semibold text-slate-600 text-center mb-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-brand-accent transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick("#contact")}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-emerald-600 text-white rounded-xl font-semibold shadow-lg text-lg"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
}
