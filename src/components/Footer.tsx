import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, Twitter, Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-brand-border pt-16 pb-8 relative overflow-hidden">
      {/* Background glow decorator */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand details */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 mb-4 group">
              <span className="text-white font-heading font-extrabold text-lg tracking-tight">
                SHAH NAWAZ
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#10b981]"></span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Shopify Expert & eCommerce Growth Strategist. Scaling online brands to 7 & 8 figures with customized high-performance SEO, CRO, and performance marketing.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-card/50 border border-brand-border flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-card/50 border border-brand-border flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@shahnawaz.agency"
                className="w-10 h-10 rounded-lg bg-brand-card/50 border border-brand-border flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Brief */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-4">
              Core Expertise
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-accent"></span>
                Shopify Development
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-accent"></span>
                eCommerce SEO Strategy
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-accent"></span>
                Paid Performance Ads
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-accent"></span>
                Conversion Rate Optimization
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-brand-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Shah Nawaz Agency. All rights reserved. Professional American English.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
