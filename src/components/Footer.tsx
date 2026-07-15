import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Book Audit", href: "#contact" },
  ];

  const services = [
    "Shopify Development",
    "eCommerce SEO",
    "Paid Performance Ads",
    "Conversion Rate Optimization",
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-white font-heading font-extrabold text-lg tracking-tight">
                SHAH NAWAZ
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(5,150,105,0.6)] animate-pulse" />
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Shopify Expert &amp; eCommerce Growth Strategist. I take beginner-level Shopify stores,
              fix their foundations, and build the infrastructure needed to scale consistently.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@shahnawaz.agency"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-5">
              Core Expertise
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shah Nawaz Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
