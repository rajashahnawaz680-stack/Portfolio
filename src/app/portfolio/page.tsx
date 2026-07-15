"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  ShoppingBag, 
  Search, 
  Zap, 
  ExternalLink,
  Target,
  BarChart3
} from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const caseStudies = [
    {
      id: "pgglobal",
      category: "shopify",
      categoryLabel: "Shopify & Pet Care",
      title: "PG Global LLC - Custom Pet Care Storefront",
      client: "PG Global LLC (USA)",
      challenge: "PG Global LLC wanted to build a high-converting, user-friendly Shopify store to sell pet grooming tools, dog care accessories, and essentials to a premium market.",
      strategy: "We engineered a clean custom theme on Shopify, optimizing database queries and custom asset delivery pipelines to achieve a 98/100 Speed Index. We designed dedicated pet essential layouts.",
      results: [
        { label: "Conversion Rate", value: "+140% Increase" },
        { label: "Speed Score", value: "98/100 Index" },
        { label: "Cart Abandonment", value: "-24% Reduction" }
      ],
      tags: ["Shopify Customization", "Speed Optimization", "Pet Care eCommerce"],
      image: "/pgglobal.png",
      url: "https://www.pggloballlc.com/"
    },
    {
      id: "jimmys",
      category: "shopify",
      categoryLabel: "Shopify & Toys",
      title: "Jimmy's RFR - Kids Toys & Accessories Store",
      client: "Jimmy's RFR Services (USA)",
      challenge: "They needed a rapid, user-friendly Shopify storefront supporting a large, cataloged inventory of educational toys, wooden puzzles, and outdoor games.",
      strategy: "We restructured their collection hierarchy, optimized responsive grid views for mobile, and deployed fast localized payment gateways.",
      results: [
        { label: "Organic Sales", value: "+280% Growth" },
        { label: "Local Rankings", value: "Top 3 Position" },
        { label: "Organic Traffic", value: "+110% YoY" }
      ],
      tags: ["eCommerce UI Design", "Shopify Setup", "Grid Optimization"],
      image: "/jimmys.png",
      url: "https://jimmysrfrservices.com/"
    },
    {
      id: "nexford",
      category: "paid-media",
      categoryLabel: "Shopify & Gadgets",
      title: "Nexford Shop - Smart Living & Tech Products",
      client: "Nexford Shop (USA)",
      challenge: "Nexford Shop was experiencing high dropoffs during checkout on their modern living kitchen and household gadgets store.",
      strategy: "We custom-built high-converting cart drawers, integrated post-purchase upsell steps, and restructured their ad accounts to target high-intent custom lookalike cohorts.",
      results: [
        { label: "Blended ROAS", value: "3.9x ROI" },
        { label: "Conversion Rate", value: "+110% Increase" },
        { label: "Average Order Value", value: "+42% ($145 Avg)" }
      ],
      tags: ["Meta Ads Scaling", "Shopify CRO", "Creative Optimization"],
      image: "/gadget-hub.png",
      url: "https://nexford.shop/"
    },
    {
      id: "znwa-fr",
      category: "shopify",
      categoryLabel: "International Shopify",
      title: "ZNWA FR - French Designer Apparel & Fragrances",
      client: "ZNWA FR (Europe)",
      challenge: "A luxury French boutique needing localized checkout flows, multi-currency routing, and rapid page-load times across Europe for tracksuits and perfumes.",
      strategy: "We deployed a headless Shopify setup supporting multi-lingual routes, translated collection pages, and optimized local card processing endpoints.",
      results: [
        { label: "Conversion Rate", value: "3.2% Steady" },
        { label: "European Sales", value: "+165% Growth" },
        { label: "Core Web Vitals", value: "85/100 Score" }
      ],
      tags: ["Headless Shopify", "Payment Routing", "Apparel & Fashion"],
      image: "/znwa-fr.png",
      url: "https://znwa.fr/"
    },
    {
      id: "barakmeridian",
      category: "paid-media",
      categoryLabel: "Shopify & Electronics",
      title: "Barak Meridian - UK Smart Tech Store",
      client: "Barak Meridian (UK)",
      challenge: "Barak Meridian required an automated dropshipping pipeline and high-performance collection search tools to sell consumer electronics and tech gadgets in the UK.",
      strategy: "We built custom landing pages, optimized asset loading, and launched highly targeted Google Search campaigns to capture gadget buyers.",
      results: [
        { label: "Qualified Orders", value: "+320% Increase" },
        { label: "Cost Per Lead", value: "-40% Reduction" },
        { label: "Search Ad CTR", value: "4.8% Average" }
      ],
      tags: ["Google Search Ads", "Landing Page CRO", "Lead Pipelines"],
      image: "/barakmeridian.png",
      url: "https://barakmeridian.co.uk/"
    },
    {
      id: "soufrugs",
      category: "shopify",
      categoryLabel: "Shopify Theme Engineering",
      title: "Souf Rugs - Premium Home Decor Rebuild",
      client: "Souf Rugs (UK)",
      challenge: "Souf Rugs had a visually beautiful product line but slow Shopify theme rendering speeds that led to massive visitor dropoffs on home and collection templates.",
      strategy: "We consolidated heavy tracking apps, rebuilt asset delivery scripts, and implemented lazy-loaded high-resolution image cards.",
      results: [
        { label: "Home Load Speed", value: "-1.8s Reduction" },
        { label: "Collection Page CTR", value: "+38% Increase" },
        { label: "Revenue Lift", value: "+45% in 90 Days" }
      ],
      tags: ["Shopify Development", "Theme Repair", "Speed Optimization"],
      image: "/soufrugs.png",
      url: "https://nexford.shop/"
    }
  ];

  const filteredCaseStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden">
      <Header />

      {/* Portfolio Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-brand-border bg-gradient-to-b from-brand-secondary/60 to-brand-bg">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
            Case Studies & Proof
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 mb-4 tracking-tight">
            Proof in Numbers: eCommerce Growth
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            I help Shopify store owners optimize customer acquisition and engineering pathways. Read how we scaled these international brands.
          </p>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === "all"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/15"
                  : "bg-brand-card text-slate-400 border border-brand-border hover:border-slate-400 hover:text-white"
              }`}
            >
              All Case Studies
            </button>
            <button
              onClick={() => setFilter("shopify")}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === "shopify"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/15"
                  : "bg-brand-card text-slate-400 border border-brand-border hover:border-slate-400 hover:text-white"
              }`}
            >
              Shopify & CRO
            </button>
            <button
              onClick={() => setFilter("seo")}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === "seo"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/15"
                  : "bg-brand-card text-slate-400 border border-brand-border hover:border-slate-400 hover:text-white"
              }`}
            >
              eCommerce SEO
            </button>
            <button
              onClick={() => setFilter("paid-media")}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === "paid-media"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/15"
                  : "bg-brand-card text-slate-400 border border-brand-border hover:border-slate-400 hover:text-white"
              }`}
            >
              Paid Performance Ads
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid list */}
      <section className="py-20 container max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          {filteredCaseStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-brand-border shadow-lg group"
            >
              {/* Screenshot Image Column */}
              <div className="lg:col-span-3 relative h-56 lg:h-full min-h-[220px] border-b lg:border-b-0 lg:border-r border-brand-border/60 bg-brand-secondary/40 overflow-hidden flex items-center justify-center">
                <img
                  src={cs.image}
                  alt={`${cs.title} Site Screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Detailed Breakdown */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-border/60">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[9px] bg-brand-accent/10 border border-brand-accent/20 px-2 py-0.5 rounded-full text-brand-accent uppercase font-bold tracking-wider">
                      {cs.categoryLabel}
                    </span>
                    <span className="text-slate-500 text-[10px] font-semibold">
                      Client: {cs.client}
                    </span>
                  </div>

                  <h2 className="text-lg font-heading font-extrabold text-white flex items-center gap-1.5 hover:text-brand-accent transition-colors">
                    <a href={cs.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group-hover:underline">
                      {cs.title} <ExternalLink className="w-3.5 h-3.5 inline-block ml-1" />
                    </a>
                  </h2>

                  <div className="space-y-3">
                    <div className="text-xs">
                      <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1 text-[10px]">
                        <Target className="w-3 h-3 text-brand-gold" /> The Challenge
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-[11px]">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="text-xs">
                      <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1 text-[10px]">
                        <Zap className="w-3 h-3 text-brand-accent" /> The Strategy
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-[11px]">
                        {cs.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-brand-border/40">
                  {cs.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] bg-brand-bg/60 border border-brand-border/40 px-2.5 py-1 rounded-full text-slate-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* High Impact Results column */}
              <div className="lg:col-span-4 bg-brand-secondary/40 p-8 flex flex-col justify-center space-y-6">
                <h3 className="text-white font-heading text-xs font-bold uppercase tracking-wider border-b border-brand-border/60 pb-3 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-brand-accent" /> Audited Growth Metrics
                </h3>

                <div className="space-y-4">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-3 flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                        {res.label}
                      </span>
                      <span className="text-xl font-heading font-extrabold text-brand-accent mt-0.5 tracking-tight">
                        {res.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-brand-secondary border-t border-brand-border text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
            Let's Scale Your Store
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
            Ready to Achieve Similar Growth?
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Every eCommerce brand has structural leakages in their conversion paths or advertising accounts. Let's find yours.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-accent/90 hover:from-brand-accent hover:to-brand-accent text-white font-heading font-bold rounded-lg shadow-lg hover:shadow-brand-accent/15 transition-all duration-200"
            >
              <span>Book Your Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
