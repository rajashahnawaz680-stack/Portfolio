"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-brand-bg/85 backdrop-blur-md border-b border-brand-border shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-heading font-extrabold text-xl tracking-tight leading-none group-hover:text-brand-accent transition-colors">
                SHAH NAWAZ
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#10b981] animate-pulse"></span>
            </div>
            <span className="text-slate-400 font-sans text-[10px] tracking-[0.2em] font-semibold uppercase mt-0.5">
              GROWTH AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-white transition-colors relative py-1 ${
                  isActive ? "text-white font-semibold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent to-brand-teal rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-brand-accent to-brand-accent/90 hover:from-brand-accent hover:to-brand-accent text-white rounded-lg text-sm font-semibold shadow-[0_4px_14px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-slate-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col space-y-6 text-2xl font-heading font-semibold text-slate-300 text-center mb-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`hover:text-white transition-colors py-2 block ${
                    isActive ? "text-brand-accent font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-accent to-brand-accent/90 text-white rounded-lg font-semibold shadow-lg text-lg"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </header>
  );
}
