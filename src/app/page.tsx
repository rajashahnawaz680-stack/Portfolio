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
  ShieldCheck,
  ExternalLink,
  Target,
  BarChart3,
} from "lucide-react";

export default function Home() {
  const [revenue, setRevenue] = useState(0);
  const [roi, setRoi] = useState(0);
  const [seoGrowth, setSeoGrowth] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    revenue: "<$10k",
    challenge: "shopify-cro",
  });

  const weekdays = [
    { date: "Mon, Jul 20", label: "Monday" },
    { date: "Tue, Jul 21", label: "Tuesday" },
    { date: "Wed, Jul 22", label: "Wednesday" },
    { date: "Thu, Jul 23", label: "Thursday" },
    { date: "Fri, Jul 24", label: "Friday" }
  ];

  const timeSlots = [
    "09:00 AM EST",
    "11:00 AM EST",
    "02:00 PM EST",
    "04:00 PM EST"
  ];

  // Animated counters on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setRevenue(Math.min(Math.floor((95 / steps) * currentStep), 95));
      setRoi(Number(Math.min((3.5 / steps) * currentStep, 3.5).toFixed(1)));
      setSeoGrowth(Math.min(Math.floor((180 / steps) * currentStep), 180));
      if (currentStep >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Shah Nawaz completely restructured our Shopify architecture and revamped our Meta ads strategy. Within 90 days, our monthly revenue grew significantly while our cost per acquisition dropped by 32%. Outstanding results.",
      author: "Marcus Davis",
      role: "Founder, Apex Threads",
      metric: "+85% Revenue Growth",
    },
    {
      quote: "His technical SEO strategy cleared indexation issues that had plagued our Shopify store for years. Organic traffic grew by 180% in 5 months, and organic sales became our highest margin channel.",
      author: "Sarah Jenkins",
      role: "Director of Marketing, PureOrganics DTC",
      metric: "+180% Organic Traffic",
    },
    {
      quote: "Before working with Shah, our landing page converted at 1.8%. After his Shopify optimization and CRO modifications, we jumped to a steady 3.4% conversion rate — doubling our advertising efficiency.",
      author: "Rupert Vance",
      role: "Operations Manager, Lumina Homeware",
      metric: "3.4% Conversion Rate",
    },
    {
      quote: "PG Global needed a storefront under 1.2s load time for multi-region traffic. Shah optimized our Shopify liquid rendering and API connectors, taking our Speed Index from 48 to 98/100.",
      author: "David Chen",
      role: "Operations Lead, PG Global LLC",
      metric: "98/100 Speed Score",
    },
    {
      quote: "Expanding apparel sales to Europe was a challenge until Shah integrated our multi-lingual pathways and payment routing. Our European checkout drop-offs dropped by 45% in the first month.",
      author: "Antoine Dubois",
      role: "Founder, ZNWA FR",
      metric: "-45% Checkout Drop-offs",
    },
    {
      quote: "Slow page loads were killing our bounce rate. Shah rebuilt our collection grid scripts and lazy-loaded our images. Revenue scaled +45% in 90 days — real, measurable impact.",
      author: "Amelie Watson",
      role: "Creative Director, Souf Rugs",
      metric: "+45% Revenue in 90 Days",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const services = [
    {
      icon: ShoppingBag,
      title: "Shopify Customization & CRO",
      description:
        "Engineering blazing-fast Shopify storefronts optimized to convert traffic into sales. We redesign checkout flows, fix page speeds, and implement high-converting product pages tailored for early-stage brands.",
      deliverables: [
        "Speed Optimization",
        "Custom Theme Development",
        "Checkout Flow Audit",
        "A/B Testing Frameworks",
      ],
    },
    {
      icon: Search,
      title: "eCommerce SEO Strategy",
      description:
        "Driving qualified organic traffic to your collection and product pages. High-intent keyword targeting, technical SEO repairs, and semantic internal linking architectures.",
      deliverables: [
        "Keyword Gap Analysis",
        "Technical Core Web Vitals",
        "Editorial Backlink Acquisition",
        "Collection Page Structuring",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing & Paid Ads",
      description:
        "Scaling customer acquisition on Facebook, Google, and TikTok. We design high-converting visual funnels, build retargeting layers, and optimize your overall ROAS — even with a smaller budget.",
      deliverables: [
        "Meta Ads Management",
        "Google Shopping & PMax",
        "High-Converting Creatives",
        "DTC Funnel Analytics",
      ],
    },
    {
      icon: Zap,
      title: "eCommerce Growth Consulting",
      description:
        "Strategic fractional CMO guidance for stores ready to break through their first revenue ceiling. We analyze unit economics, LTV, and build 12-month scaling roadmaps.",
      deliverables: [
        "LTV Expansion Audits",
        "Email Marketing Funnels",
        "Tech Stack Optimization",
        "Pricing & Margin Strategy",
      ],
    },
  ];

  const caseStudies = [
    {
      id: "pgglobal",
      category: "shopify",
      categoryLabel: "Shopify & Pet Care",
      title: "PG Global LLC — Custom Pet Care Storefront",
      client: "PG Global LLC (USA)",
      challenge:
        "PG Global LLC needed a high-converting Shopify store to sell pet grooming tools and accessories to a premium market — starting from scratch with zero online presence.",
      strategy:
        "We engineered a clean custom Shopify theme, optimized database queries and asset delivery pipelines to achieve a 98/100 Speed Index. Dedicated pet essential layouts were designed for maximum clarity.",
      results: [
        { label: "Conversion Rate", value: "+140% Increase" },
        { label: "Speed Score", value: "98/100 Index" },
        { label: "Cart Abandonment", value: "-24% Reduction" },
      ],
      tags: ["Shopify Customization", "Speed Optimization", "Pet Care eCommerce"],
      image: "/pgglobal.png",
      url: "https://www.pggloballlc.com/",
    },
    {
      id: "jimmys",
      category: "shopify",
      categoryLabel: "Shopify & Toys",
      title: "Jimmy's RFR — Kids Toys & Accessories Store",
      client: "Jimmy's RFR Services (USA)",
      challenge:
        "They needed a rapid, user-friendly Shopify storefront supporting a large cataloged inventory of educational toys, wooden puzzles, and outdoor games.",
      strategy:
        "We restructured their collection hierarchy, optimized responsive grid views for mobile, and deployed fast localized payment gateways for a seamless buying experience.",
      results: [
        { label: "Organic Sales", value: "+280% Growth" },
        { label: "Local Rankings", value: "Top 3 Position" },
        { label: "Organic Traffic", value: "+110% YoY" },
      ],
      tags: ["eCommerce UI Design", "Shopify Setup", "Grid Optimization"],
      image: "/jimmys.png",
      url: "https://jimmysrfrservices.com/",
    },
    {
      id: "nexford",
      category: "paid-media",
      categoryLabel: "Shopify & Gadgets",
      title: "Nexford Shop — Smart Living & Tech Products",
      client: "Nexford Shop (USA)",
      challenge:
        "Nexford Shop was experiencing high dropoffs during checkout on their modern living and household gadgets store — losing significant revenue daily.",
      strategy:
        "We custom-built high-converting cart drawers, integrated post-purchase upsell steps, and restructured their ad accounts to target high-intent custom lookalike cohorts.",
      results: [
        { label: "Blended ROAS", value: "3.9x ROI" },
        { label: "Conversion Rate", value: "+110% Increase" },
        { label: "Average Order Value", value: "+42% ($145 Avg)" },
      ],
      tags: ["Meta Ads Scaling", "Shopify CRO", "Creative Optimization"],
      image: "/gadget-hub.png",
      url: "https://nexford.shop/",
    },
    {
      id: "znwa-fr",
      category: "shopify",
      categoryLabel: "International Shopify",
      title: "ZNWA FR — French Designer Apparel & Fragrances",
      client: "ZNWA FR (Europe)",
      challenge:
        "A luxury French boutique needing localized checkout flows, multi-currency routing, and rapid page-load times across Europe for tracksuits and perfumes.",
      strategy:
        "We deployed a Shopify setup supporting multi-lingual routes, translated collection pages, and optimized local card processing endpoints for the European market.",
      results: [
        { label: "Conversion Rate", value: "3.2% Steady" },
        { label: "European Sales", value: "+165% Growth" },
        { label: "Core Web Vitals", value: "85/100 Score" },
      ],
      tags: ["Headless Shopify", "Payment Routing", "Apparel & Fashion"],
      image: "/znwa-fr.png",
      url: "https://znwa.fr/",
    },
    {
      id: "barakmeridian",
      category: "paid-media",
      categoryLabel: "Shopify & Electronics",
      title: "Barak Meridian — UK Smart Tech Store",
      client: "Barak Meridian (UK)",
      challenge:
        "Barak Meridian required a high-performance search experience and automated pipeline to sell consumer electronics and tech gadgets across the UK market.",
      strategy:
        "We built custom landing pages, optimized asset loading, and launched highly targeted Google Search campaigns to capture gadget buyers at peak intent.",
      results: [
        { label: "Qualified Orders", value: "+320% Increase" },
        { label: "Cost Per Lead", value: "-40% Reduction" },
        { label: "Search Ad CTR", value: "4.8% Average" },
      ],
      tags: ["Google Search Ads", "Landing Page CRO", "Lead Pipelines"],
      image: "/barakmeridian.png",
      url: "https://barakmeridian.co.uk/",
    },
    {
      id: "soufrugs",
      category: "shopify",
      categoryLabel: "Shopify Theme Engineering",
      title: "Souf Rugs — Premium Home Decor Rebuild",
      client: "Souf Rugs (UK)",
      challenge:
        "Souf Rugs had a beautiful product line but slow Shopify theme rendering that led to massive visitor dropoffs on home and collection page templates.",
      strategy:
        "We consolidated heavy tracking apps, rebuilt asset delivery scripts, and implemented lazy-loaded high-resolution image cards across all collection grids.",
      results: [
        { label: "Home Load Speed", value: "-1.8s Reduction" },
        { label: "Collection Page CTR", value: "+38% Increase" },
        { label: "Revenue Lift", value: "+45% in 90 Days" },
      ],
      tags: ["Shopify Development", "Theme Repair", "Speed Optimization"],
      image: "/soufrugs.png",
      url: "https://nexford.shop/",
    },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website || !selectedDay || !selectedTime) {
      alert("Please fill out all fields and select a date and time slot from the scheduler widget.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "b0de84ad-aa51-4713-a871-c38782bbbac1",
          subject: "New eCommerce Consultation Booking - Shah Nawaz Agency",
          from_name: "Shah Nawaz Growth Agency",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          monthly_revenue: formData.revenue,
          primary_challenge: formData.challenge,
          selected_day: selectedDay,
          selected_time: selectedTime,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setFormSuccess(true);
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-800 overflow-x-hidden">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 flex items-center justify-center">
        {/* Soft ambient blobs */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-accent/8 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/6 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-accent w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shopify Store Optimization & Growth Specialist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900">
              I Take Beginner Shopify Stores &amp; Optimize Them to{" "}
              <span className="text-gradient-emerald">Scale.</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
              Starting from a beginner-level store, I identify structural leakages in your
              conversion paths, fix speed and SEO foundations, and build the paid media
              infrastructure needed to hit your first consistent revenue milestones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-accent to-emerald-600 hover:from-emerald-600 hover:to-brand-accent text-white font-heading font-bold rounded-xl shadow-lg shadow-brand-accent/15 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Audit Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-heading font-bold border border-slate-200 rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <span>View Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-6 flex-wrap">
              <span className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                Certifications:
              </span>
              <div className="flex items-center gap-5 flex-wrap">
                {[
                  { dot: "bg-brand-accent", label: "Shopify Expert" },
                  { dot: "bg-brand-teal", label: "Meta Certified" },
                  { dot: "bg-brand-gold", label: "Google Certified" },
                ].map((b) => (
                  <span key={b.label} className="text-sm font-bold text-slate-500 tracking-tight flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${b.dot}`} />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — dashboard visual */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-accent/15 to-brand-teal/10 blur-2xl opacity-50" />
            <div className="relative z-10 w-full max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img
                src="/ecommerce_growth_dashboard.png"
                alt="Shah Nawaz eCommerce Growth Dashboard"
                className="w-full h-full object-cover object-center scale-[1.05] transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-slate-900 py-14 relative">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col space-y-1">
            <span className="text-4xl md:text-5xl font-heading font-extrabold text-brand-accent tracking-tight">
              ${revenue}k+
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

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-brand-bg">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 flex flex-col space-y-3">
            <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
              Core Agency Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
              Built for Early-Stage Shopify Brand Growth.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              From store setup and speed optimization to paid media and SEO — every service
              is designed to remove bottlenecks and create consistent, compounding revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group border border-slate-200"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-slate-400 font-heading text-[10px] font-bold uppercase tracking-wider block mb-2">
                      Core Deliverables
                    </span>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.deliverables.map((item, key) => (
                        <li key={key} className="text-xs text-slate-500 flex items-center gap-1.5">
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
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY ──────────────────────────────── */}
      <section className="py-16 bg-brand-secondary border-y border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
              Featured Case Study
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mt-1">
              Scaling PG Global LLC&apos;s Pet Care Storefront
            </h2>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden flex flex-col border border-slate-200 shadow-sm group">
            {/* Full-width screenshot */}
            <div className="relative w-full h-64 md:h-[450px] overflow-hidden border-b border-slate-200">
              <img
                src="/pgglobal.png"
                alt="PG Global LLC Website Preview"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
                <div>
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {["Shopify Customization", "Pet Care eCommerce"].map((tag) => (
                      <span key={tag} className="text-[10px] bg-brand-secondary border border-slate-200 px-2.5 py-1 rounded-full text-slate-500 uppercase font-semibold tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-slate-900 mb-4">
                    How speed engineering and theme optimization yielded a 98/100 speed score.
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    PG Global LLC needed to build a high-converting Shopify store to sell pet grooming
                    tools and accessories to a premium market. We engineered a clean custom theme,
                    optimizing load times and checkout pipelines from the ground up.
                  </p>
                </div>
                <a
                  href="#portfolio"
                  className="flex items-center gap-1.5 text-brand-accent hover:text-emerald-700 transition-colors text-sm font-semibold w-fit"
                >
                  <span>See All Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-4 bg-brand-secondary p-8 md:p-12 flex flex-col justify-center space-y-4">
                <h4 className="text-slate-600 font-heading text-xs font-bold uppercase tracking-wider border-b border-slate-200 pb-3">
                  Audited Growth Metrics
                </h4>
                {[
                  { label: "Conversion Lift", value: "+140%", color: "text-brand-accent" },
                  { label: "Speed Score", value: "98/100", color: "text-brand-gold" },
                  { label: "Cart Abandonment", value: "-24%", color: "text-brand-teal" },
                ].map((m) => (
                  <div key={m.label} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col shadow-sm">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">{m.label}</span>
                    <div className={`text-2xl font-heading font-extrabold mt-0.5 ${m.color}`}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ────────────────────────────────────────── */}
      <section id="portfolio" className="py-24 bg-brand-bg">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
              Case Studies & Proof
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
              Proof in Numbers: eCommerce Growth
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Real brands, real results. From early-stage beginner stores to multi-country
              expansion — here&apos;s how we drive measurable, repeatable growth.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col border border-slate-200 shadow-sm group"
              >
                {/* Screenshot full-width */}
                <div className="relative w-full h-64 md:h-[400px] lg:h-[450px] overflow-hidden border-b border-slate-200">
                  <img
                    src={cs.image}
                    alt={`${cs.title} Site Screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-8 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[9px] bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded-full text-brand-accent uppercase font-bold tracking-wider">
                          {cs.categoryLabel}
                        </span>
                        <span className="text-slate-400 text-[10px] font-semibold">
                          Client: {cs.client}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-extrabold text-slate-900 hover:text-brand-accent transition-colors">
                        <a href={cs.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          {cs.title} <ExternalLink className="w-4 h-4 inline-block" />
                        </a>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <h4 className="text-slate-700 font-heading text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-brand-gold" /> The Challenge
                          </h4>
                          <p className="text-slate-500 leading-relaxed text-xs">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-slate-700 font-heading text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-brand-accent" /> The Strategy
                          </h4>
                          <p className="text-slate-500 leading-relaxed text-xs">{cs.strategy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-100">
                      {cs.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] bg-brand-secondary border border-slate-200 px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-brand-secondary p-8 flex flex-col justify-center space-y-4">
                    <h3 className="text-slate-600 font-heading text-xs font-bold uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-brand-accent" /> Audited Growth Metrics
                    </h3>
                    <div className="space-y-3">
                      {cs.results.map((res, rIdx) => (
                        <div key={rIdx} className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col shadow-sm">
                          <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-brand-secondary border-y border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col space-y-3">
            <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
              Client Endorsements
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-slate-900">
              Trusted by Growing Brands.
            </h2>
            <p className="text-slate-500 text-sm">
              Real feedback from store founders and marketing directors who started small and scaled.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="glass-card rounded-2xl p-8 md:p-12 mb-8 relative border border-slate-200 text-center flex flex-col items-center cursor-default shadow-sm transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <span className="text-6xl text-brand-accent/15 font-serif leading-none absolute top-4 left-6 select-none">&ldquo;</span>
              <p className="text-slate-700 text-lg md:text-xl font-light italic leading-relaxed mb-8 relative z-10">
                {testimonials[activeTab].quote}
              </p>
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-slate-900 font-heading font-bold text-sm">
                  {testimonials[activeTab].author}
                </span>
                <span className="text-slate-400 text-xs">
                  {testimonials[activeTab].role}
                </span>
                <span className="mt-3 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent font-heading font-semibold text-xs uppercase tracking-wide">
                  {testimonials[activeTab].metric}
                </span>
              </div>
            </div>

            {/* Dot nav */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-3 h-3 rounded-full border transition-all duration-200 ${
                    activeTab === idx
                      ? "bg-brand-accent border-transparent scale-110"
                      : "border-slate-300 hover:border-slate-500"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / AUDIT FORM ─────────────────────────────── */}
      <section id="contact" className="py-24 bg-brand-bg">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left copy */}
            <div className="lg:col-span-6 flex flex-col space-y-5">
              <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
                Let&apos;s Work Together
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                Request a Free eCommerce Growth Audit
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                I will personally review your Shopify store speed, organic search footprint,
                and checkout conversion path, then outline the 3 biggest bottlenecks blocking
                your growth. No obligation — 100% actionable blueprint.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  { icon: ShieldCheck, text: "Comprehensive CRO + Page Speed Audit" },
                  { icon: Users, text: "Traffic & Competitor Keyword Opportunity Scan" },
                  { icon: TrendingUp, text: "Custom Paid Funnel Roadmap Strategy" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-slate-600 text-sm">
                    <Icon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right form */}
            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl p-8 border border-slate-200 shadow-sm">
                {formSuccess ? (
                  <div className="py-12 flex flex-col items-center space-y-4 text-center">
                    <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900">Audit Request Received!</h3>
                    <p className="text-slate-500 text-sm max-w-sm">
                      Thank you. I will analyze your store and contact you within 24–48 business hours with your personalized growth blueprint.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors placeholder:text-slate-300"
                          placeholder="e.g. Shah Nawaz"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                          Professional Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors placeholder:text-slate-300"
                          placeholder="e.g. partner@brand.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="website" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                          Store URL (Shopify)
                        </label>
                        <input
                          type="url"
                          id="website"
                          required
                          value={formData.website}
                          onChange={handleFormChange}
                          className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors placeholder:text-slate-300"
                          placeholder="e.g. https://yourstore.com"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="revenue" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                          Current Monthly Revenue
                        </label>
                        <select
                          id="revenue"
                          value={formData.revenue}
                          onChange={handleFormChange}
                          className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors"
                        >
                          <option value="<$10k">Under $10,000 / month</option>
                          <option value="$10k-$50k">$10,000 – $50,000 / month</option>
                          <option value="$50k-$200k">$50,000 – $200,000 / month</option>
                          <option value="$200k+">Over $200,000 / month</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="challenge" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                        Primary Scaling Challenge
                      </label>
                      <select
                        id="challenge"
                        value={formData.challenge}
                        onChange={handleFormChange}
                        className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors"
                      >
                        <option value="shopify-cro">Shopify Checkout Speed & Conversion Optimization</option>
                        <option value="performance-ads">Paid Ad Funnels (Meta/Google Ads/ROAS)</option>
                        <option value="organic-traffic">Organic SEO Collection Ranking</option>
                        <option value="multi-funnel">Comprehensive Full Funnel Strategy Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="flex justify-between items-center">
                        <label className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-brand-accent" /> Select Available Day (EST / GMT)
                        </label>
                        <span className="text-[10px] text-slate-400">Monday - Friday availability</span>
                      </div>

                      <div className="grid grid-cols-5 gap-2">
                        {weekdays.map((day) => (
                          <button
                            key={day.date}
                            type="button"
                            onClick={() => setSelectedDay(day.date)}
                            className={`py-3.5 rounded-xl text-center flex flex-col justify-center transition-all duration-150 ${
                              selectedDay === day.date
                                ? "bg-brand-accent text-white shadow-[0_0_12px_rgba(16,185,129,0.25)] border-transparent"
                                : "bg-white border border-slate-200 hover:border-slate-400 text-slate-600"
                            }`}
                          >
                            <span className="text-xs font-bold font-heading">{day.label.slice(0, 3)}</span>
                            <span className="text-[10px] mt-0.5 opacity-80">{day.date.split(" ")[2]}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedDay && (
                      <div className="space-y-4 pt-3 animate-fade-in">
                        <label className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider block">
                          Select Available Time Slot
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3.5 text-center text-xs font-heading font-semibold rounded-xl transition-all duration-150 border ${
                                selectedTime === time
                                  ? "bg-brand-accent/10 border-brand-accent text-brand-accent"
                                  : "bg-white border-slate-200 hover:border-slate-400 text-slate-600"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                          <label htmlFor="custom-time" className="text-slate-500 font-heading text-xs font-semibold uppercase tracking-wider">
                            Or Choose a Custom Time (EST / GMT)
                          </label>
                          <input
                            type="time"
                            id="custom-time"
                            value={selectedTime && !timeSlots.includes(selectedTime) ? (selectedTime.includes(" (Custom)") ? ((() => {
                              const cleanTime = selectedTime.replace(" (Custom)", "");
                              const [timePart, ampm] = cleanTime.split(" ");
                              let [h, m] = timePart.split(":");
                              let hour = parseInt(h);
                              if (ampm === "PM" && hour < 12) hour += 12;
                              if (ampm === "AM" && hour === 12) hour = 0;
                              return `${hour.toString().padStart(2, '0')}:${m}`;
                            })()) : "") : ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val) {
                                const [h, m] = val.split(":");
                                const hour = parseInt(h);
                                const ampm = hour >= 12 ? "PM" : "AM";
                                const formattedHour = hour % 12 || 12;
                                setSelectedTime(`${formattedHour}:${m} ${ampm} (Custom)`);
                              }
                            }}
                            className="bg-brand-secondary border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-colors w-full"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span>Your URL & data remains strictly private. We do not share lead information.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-brand-accent to-emerald-600 hover:from-emerald-600 hover:to-brand-accent text-white font-heading font-bold rounded-xl mt-1 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand-accent/15 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting Booking..." : "Confirm Strategic Consultation Booking →"}
                      </button>
                    </div>
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
