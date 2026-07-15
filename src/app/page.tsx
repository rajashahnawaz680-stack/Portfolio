"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles, 
  Calendar, 
  ArrowUpRight, 
  Star,
  Users,
  ShieldCheck
} from "lucide-react";

export default function Home() {
  // States for counters
  const [revenue, setRevenue] = useState(0);
  const [roi, setRoi] = useState(0);
  const [seoGrowth, setSeoGrowth] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    revenue: "<$10k",
  });

  // Animated counters on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setRevenue(Math.min(Math.floor((15 / steps) * currentStep), 15));
      setRoi(Number(Math.min((3.8 / steps) * currentStep, 3.8).toFixed(1)));
      setSeoGrowth(Math.min(Math.floor((150 / steps) * currentStep), 150));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: ShoppingBag,
      title: "Shopify Customization & CRO",
      description: "Engineering blazing-fast Shopify storefronts optimized to convert traffic into sales. We redesign checkout flows, fix page speeds, and implement high-converting product pages.",
      deliverables: ["Speed Optimization", "Custom Theme Development", "Checkout Checkout Audit", "A/B Testing Frameworks"]
    },
    {
      icon: Search,
      title: "eCommerce Search Engine Optimization",
      description: "Driving qualified organic traffic directly to your collection and product pages. High-intent keyword targeting, technical SEO repairs, and semantic internal linking architectures.",
      deliverables: ["Keyword Gap Analysis", "Technical Core Web Vitals Audits", "Editorial Backlink Acquisition", "Collection Page SEO Structuring"]
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing & Paid Ads",
      description: "Scaling customer acquisition campaigns across Facebook, Google, and TikTok. We design high-converting visual funnels, build retargeting layers, and optimize your overall ROAS.",
      deliverables: ["Meta Ads Management", "Google Shopping & PMax Setup", "High-Converting Creative Briefing", "DTC Funnel Analytics"]
    },
    {
      icon: Zap,
      title: "eCommerce Growth Consulting",
      description: "Strategic fractional CMO guidance. We analyze unit economics, customer lifetime value (LTV), repeat purchase rates, and construct customized 12-month scaling roadmaps.",
      deliverables: ["LTV Expansion Audits", "Email Marketing Funnels", "Tech Stack Consolidation", "Pricing & Margin Strategies"]
    }
  ];

  const testimonials = [
    {
      quote: "Shah Nawaz completely restructured our Shopify architecture and revamped our Meta ads strategy. Within 90 days, our monthly recurring revenue went from $45k to $185k, while decreasing our cost per acquisition by 32%. Absolutely world-class work.",
      author: "Marcus Davis",
      role: "Founder, Apex Threads",
      metric: "+310% Revenue Scaling"
    },
    {
      quote: "His technical SEO strategy cleared up indexation issues that had plagued our Shopify store for years. Organic traffic grew by 180% in 5 months, and organic sales became our highest margin acquisition channel.",
      author: "Sarah Jenkins",
      role: "Director of Marketing, PureOrganics DTC",
      metric: "+180% Organic Sales"
    },
    {
      quote: "Before working with Shah, our landing page converted at 1.8%. After his Shopify optimization and structural CRO modifications, we jumped to a steady 3.4% conversion rate. That instantly doubled our advertising efficiency.",
      author: "Rupert Vance",
      role: "Operations Manager, Lumina Luxury Homeware",
      metric: "3.4% Conversion Rate (up from 1.8%)"
    }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "b0de84ad-aa51-4713-a871-c38782bbbac1",
          subject: "New eCommerce Growth Audit Request - Shah Nawaz Agency",
          from_name: "Shah Nawaz Growth Agency",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          monthly_revenue: formData.revenue
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setFormSuccess(true);
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit audit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 flex items-center justify-center">
        {/* Background Decorative Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-accent w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International eCommerce Scaling Specialist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-white">
              We Scale Shopify Brands to <span className="text-gradient-emerald">7 & 8 Figures.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I position premium eCommerce brands for massive growth. Combining advanced Shopify architecture optimization, conversion rate engineering, data-backed paid performance marketing, and high-impact SEO strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-accent to-brand-accent/95 hover:from-brand-accent hover:to-brand-accent text-white font-heading font-bold rounded-lg shadow-lg hover:shadow-brand-accent/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Audit Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-card hover:bg-brand-card/80 text-white font-heading font-bold border border-brand-border rounded-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-brand-border flex items-center gap-6 flex-wrap">
              <span className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                Partnerships & Certifications:
              </span>
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-slate-400 tracking-tight flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Shopify Expert
                </span>
                <span className="text-sm font-bold text-slate-400 tracking-tight flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span> Meta Certified Partner
                </span>
                <span className="text-sm font-bold text-slate-400 tracking-tight flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Google Certified
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual (Visual Growth Dashboard Mockup) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-accent/20 to-brand-teal/20 blur-2xl opacity-60"></div>
            
            <div className="relative z-10 w-full max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-border bg-brand-card/40">
              <img 
                src="/ecommerce_growth_dashboard.png" 
                alt="Shah Nawaz eCommerce Growth Strategy Dashboard" 
                className="w-full h-full object-cover object-center scale-[1.05] transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            {/* Custom SVG Dashboard Mockup */}
            <div className="relative w-full max-w-md bg-brand-card/90 border border-brand-border rounded-2xl p-6 shadow-2xl backdrop-blur-md hidden">
              <div className="flex justify-between items-center pb-4 mb-6 border-b border-brand-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-500 text-xs font-heading font-medium tracking-wider">Live Shopify Revenue Metrics</span>
              </div>

              {/* Graphic stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-bg/50 border border-brand-border/50 rounded-xl p-3.5">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Conversion Rate</span>
                  <div className="text-xl font-heading font-bold text-white mt-1 flex items-baseline gap-1">
                    3.48% <span className="text-brand-accent text-xs font-semibold">+82%</span>
                  </div>
                </div>
                <div className="bg-brand-bg/50 border border-brand-border/50 rounded-xl p-3.5">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Avg Order Value</span>
                  <div className="text-xl font-heading font-bold text-white mt-1 flex items-baseline gap-1">
                    $128.50 <span className="text-brand-accent text-xs font-semibold">+18%</span>
                  </div>
                </div>
              </div>

              {/* SVG Curve chart */}
              <div className="relative h-44 w-full bg-brand-bg/60 border border-brand-border/50 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <span>Revenue Curve</span>
                  <span className="text-brand-accent flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> Growth Scaled
                  </span>
                </div>
                
                {/* SVG path drawing a beautiful scaling growth chart line */}
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill Area */}
                  <path
                    d="M 0,80 Q 25,60 50,55 T 100,30 T 150,22 T 200,5 L 200,80 L 0,80 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Glowing Stroke */}
                  <path
                    d="M 0,80 Q 25,60 50,55 T 100,30 T 150,22 T 200,5"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="chart-line"
                  />

                  {/* Indicator Dot */}
                  <circle cx="200" cy="5" r="4.5" fill="#10b981" className="animate-pulse" />
                  <circle cx="200" cy="5" r="9" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-ping" />
                </svg>

                <div className="flex justify-between text-[9px] text-slate-600 font-bold uppercase pt-1">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul (Now)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-brand-secondary border-y border-brand-border py-12 relative">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col space-y-1">
            <span className="text-4xl md:text-5xl font-heading font-extrabold text-brand-accent tracking-tight">
              ${revenue}M+
            </span>
            <span className="text-xs uppercase font-heading font-semibold text-slate-400 tracking-widest mt-1">
              Client Revenue Generated
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-4xl md:text-5xl font-heading font-extrabold text-brand-gold tracking-tight">
              {roi}x
            </span>
            <span className="text-xs uppercase font-heading font-semibold text-slate-400 tracking-widest mt-1">
              Average Paid Media ROAS
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-4xl md:text-5xl font-heading font-extrabold text-brand-teal tracking-tight">
              +{seoGrowth}%
            </span>
            <span className="text-xs uppercase font-heading font-semibold text-slate-400 tracking-widest mt-1">
              Average Organic SEO Traffic Lift
            </span>
          </div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 flex flex-col space-y-3">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
            Core Agency Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Engineered for eCommerce Growth & Scaling.
          </h2>
          <p className="text-slate-400">
            We bypass basic optimization tactics to construct holistic brand scaling funnels that reduce CAC, expand Customer Lifetime Value, and maximize margin efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-8 flex flex-col justify-between hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-brand-border/60 pt-4">
                  <span className="text-slate-500 font-heading text-[10px] font-bold uppercase tracking-wider block mb-2">
                    Core Deliverables
                  </span>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.deliverables.map((item, key) => (
                      <li key={key} className="text-xs text-slate-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Case Study Teaser */}
      <section className="py-16 bg-brand-secondary/40 border-y border-brand-border">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
              Featured Case Study
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mt-1">
              Scaling PG Global LLC's Pet Care Storefront
            </h2>
          </div>

          <div className="glass-card rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-brand-border">
            {/* Case Text details */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-6">
                  <span className="text-[10px] bg-brand-bg border border-brand-border px-2.5 py-1 rounded-full text-slate-400 uppercase font-semibold tracking-wider">
                    Shopify Customization
                  </span>
                  <span className="text-[10px] bg-brand-bg border border-brand-border px-2.5 py-1 rounded-full text-slate-400 uppercase font-semibold tracking-wider">
                    Pet Care eCommerce
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold text-white mb-4">
                  How database optimizations and speed engineering yielded a 98/100 speed index.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  PG Global LLC wanted to build a high-converting, user-friendly Shopify store to sell pet grooming tools, dog care accessories, and essentials to a premium market. We engineered a clean custom theme, optimizing loading speeds and checkout pipelines.
                </p>

                {/* Key results box */}
                <div className="grid grid-cols-3 gap-4 bg-brand-bg/40 border border-brand-border/60 rounded-xl p-4 mb-6">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Conversion Lift</span>
                    <div className="text-lg font-heading font-extrabold text-brand-accent mt-0.5">+140%</div>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Speed Score</span>
                    <div className="text-lg font-heading font-extrabold text-brand-gold mt-0.5">98/100</div>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Cart Abandonment</span>
                    <div className="text-lg font-heading font-extrabold text-brand-teal mt-0.5">-24%</div>
                  </div>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="flex items-center gap-1.5 text-brand-accent hover:text-white transition-colors text-sm font-semibold w-fit"
              >
                <span>Read Full Case Study Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Case Graphic panel */}
            <div className="lg:col-span-5 bg-brand-secondary/20 relative h-64 lg:h-full min-h-[300px] border-t lg:border-t-0 lg:border-l border-brand-border/60 overflow-hidden">
              <img
                src="/pgglobal.png"
                alt="PG Global LLC Website Preview"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
            Client Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-white">
            Trusted by Established Brands.
          </h2>
          <p className="text-slate-400 text-sm">
            Read direct growth metrics from store founders and marketing directors scaled internationally.
          </p>
        </div>

        {/* Tab Testimonials container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-12 mb-8 relative border border-brand-border text-center flex flex-col items-center">
            <span className="text-6xl text-brand-accent/10 font-serif leading-none absolute top-4 left-6 select-none">“</span>
            
            <p className="text-white text-lg md:text-xl font-light italic leading-relaxed mb-8 relative z-10">
              {testimonials[activeTab].quote}
            </p>

            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-white font-heading font-bold text-sm">
                {testimonials[activeTab].author}
              </span>
              <span className="text-slate-500 text-xs">
                {testimonials[activeTab].role}
              </span>
              <span className="mt-3 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent font-heading font-semibold text-xs uppercase tracking-wide">
                {testimonials[activeTab].metric}
              </span>
            </div>
          </div>

          {/* Testimonial Nav triggers */}
          <div className="flex justify-center gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                  activeTab === idx 
                    ? "bg-brand-accent border-transparent scale-110" 
                    : "border-brand-border hover:border-slate-400"
                }`}
                aria-label={`Testimonial slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Qualification Free Growth Audit Form Banner */}
      <section className="py-20 bg-brand-secondary border-t border-brand-border">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form Details */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
                Claim Your Blueprint
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                Request a Free eCommerce Growth Audit
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                I will personally review your Shopify store speed, organic search footprint, checkout conversion path, and outline 3 critical bottlenecks blocking your growth. No obligation, 100% actionable blueprint.
              </p>
              
              <ul className="space-y-2.5 pt-4">
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <ShieldCheck className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <span>Comprehensive CRO + Page Speed Audit</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <Users className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <span>Traffic & Competitor Keyword Opportunity Scan</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-sm">
                  <TrendingUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <span>Custom 12-Month Paid Funnel Roadmap Strategy</span>
                </li>
              </ul>
            </div>

            {/* Form Input UI */}
            <div className="lg:col-span-6">
              <div className="glass-card rounded-xl p-8 border border-brand-border text-center">
                {formSuccess ? (
                  <div className="py-12 flex flex-col items-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">Audit Request Received!</h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you. I will analyze your website URL and contact you within 24-48 business hours with your personalized scale blueprint.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                        placeholder="e.g. Shah Nawaz"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                        Professional Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                        placeholder="e.g. partner@brand.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="website" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                        Store URL (Shopify)
                      </label>
                      <input
                        type="url"
                        id="website"
                        required
                        value={formData.website}
                        onChange={handleFormChange}
                        className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                        placeholder="e.g. https://yourstore.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="revenue" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                        Current Monthly eCommerce Revenue
                      </label>
                      <select
                        id="revenue"
                        value={formData.revenue}
                        onChange={handleFormChange}
                        className="bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.25rem',
                        }}
                      >
                        <option value="<$10k">Under $10,000 / month</option>
                        <option value="$10k-$50k">$10,000 - $50,000 / month</option>
                        <option value="$50k-$200k">$50,000 - $200,000 / month</option>
                        <option value="$200k+">Over $200,000 / month</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-4 bg-gradient-to-r from-brand-accent to-brand-accent/90 hover:from-brand-accent hover:to-brand-accent text-white font-heading font-bold rounded-lg mt-2 text-center transition-all duration-200 hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Audit Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
