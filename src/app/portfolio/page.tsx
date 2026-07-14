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
      id: "streetwear-brand",
      category: "paid-media",
      categoryLabel: "Paid Media & Growth",
      title: "Scaling a Premium Streetwear Brand to $280k/mo",
      client: "Apex Threads (USA)",
      challenge: "Apex Threads was spending $30k/mo on Meta Ads with a stagnant ROAS of 1.7x. Their customer acquisition cost (CAC) was too high to sustain profitability, and their site conversion rate sat at a low 1.2% due to a clunky Shopify collection layout and slow mobile loading speeds.",
      strategy: "We redesigned their mobile product filters using optimized React logic, shaving 2.4 seconds off their Shopify Speed Index. We then restructured their Meta ad account to group products by profit margins, launched Advantage+ shopping campaigns, and integrated custom landing pages built for high-intent traffic.",
      results: [
        { label: "Revenue Growth", value: "+522% in 6 Mos" },
        { label: "Paid Ad ROAS", value: "4.1x Blended" },
        { label: "CPA Reduction", value: "-32% Cost/Acq" }
      ],
      tags: ["Paid Media", "Shopify Customization", "CRO"]
    },
    {
      id: "organic-seo",
      category: "seo",
      categoryLabel: "eCommerce SEO Strategy",
      title: "Generating +180% Organic Revenue via Collection Architecture",
      client: "PureOrganics DTC (UK & Canada)",
      challenge: "PureOrganics relied entirely on expensive search ads. Their organic search rankings were dropping because of keyword cannibalization, duplicate collections created by Shopify's tag system, and slow crawl speeds caused by bloated app scripts.",
      strategy: "We audited and consolidated 40+ duplicate collection pages, setting up correct canonical paths and structured product schemas. We then wrote comprehensive semantic collection content and built an internal linking workflow targeting high-volume collection phrases, bypassing app bloating.",
      results: [
        { label: "Organic Revenue", value: "+180% Year-over-Year" },
        { label: "Search Impressions", value: "3.2M / Month" },
        { label: "Core Keywords", value: "Top 3 Ranking for 48 Phrases" }
      ],
      tags: ["eCommerce SEO", "Technical Auditing", "Site Speed"]
    },
    {
      id: "luxury-cro",
      category: "shopify",
      categoryLabel: "Shopify Customization & CRO",
      title: "Boosting Luxury Homeware Conversion by 42%",
      client: "Lumina Luxury Homeware (Australia)",
      challenge: "Lumina had high-value traffic ($150+ Average Order Value) but a low conversion rate of 1.8%. Customers were abandoning their carts during the shipping selector and payment checkout steps, which felt unaligned with their premium brand identity.",
      strategy: "We custom-coded a single-page slide-out cart drawer on Shopify, integrating dynamic free-shipping threshold bars and one-click shop pay integrations. We redesigned their shipping policy presentation and resolved three layout shifts (CLS) on checkout pages.",
      results: [
        { label: "Conversion Rate", value: "1.8% to 3.4% (+88%)" },
        { label: "Checkout Drop-off", value: "-45% Abandonment" },
        { label: "Average Order Value", value: "+14% ($171 Avg)" }
      ],
      tags: ["CRO", "Shopify Development", "User Experience"]
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
              className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-brand-border shadow-lg"
            >
              {/* Detailed Breakdown */}
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-border/60">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full text-brand-accent uppercase font-bold tracking-wider">
                      {cs.categoryLabel}
                    </span>
                    <span className="text-slate-500 text-xs font-semibold">
                      Client: {cs.client}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                    {cs.title}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-heading text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-brand-gold" /> The Challenge
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-heading text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-brand-accent" /> The Strategy
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {cs.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-brand-border/60">
                  {cs.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] bg-brand-bg/60 border border-brand-border/40 px-2.5 py-1 rounded-full text-slate-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* High Impact Results column */}
              <div className="lg:col-span-4 bg-brand-secondary/40 p-8 md:p-12 flex flex-col justify-center space-y-8">
                <h3 className="text-white font-heading text-xs font-bold uppercase tracking-wider border-b border-brand-border/60 pb-3 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-brand-accent" /> Audited Growth Metrics
                </h3>

                <div className="space-y-6">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-4.5 flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        {res.label}
                      </span>
                      <span className="text-2xl font-heading font-extrabold text-brand-accent mt-1 tracking-tight">
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
