import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-white font-heading font-extrabold text-lg tracking-tight">
                SHAH NAWAZ
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              Shopify Expert & eCommerce Growth Strategist. I take beginner-level Shopify stores,
              optimize their foundations, and scale them to consistent revenue milestones.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
                { href: "https://twitter.com", label: "Twitter", icon: Twitter },
                { href: "mailto:contact@shahnawaz.agency", label: "Email", icon: Mail },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-accent transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#portfolio" },
                { label: "Book Audit", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading text-xs font-semibold uppercase tracking-wider mb-4">
              Core Expertise
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                "Shopify Development",
                "eCommerce SEO",
                "Paid Performance Ads",
                "Conversion Rate Optimization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Shah Nawaz Agency. All rights reserved.
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
