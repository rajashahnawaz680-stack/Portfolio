"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  ChevronDown, 
  Calendar as CalendarIcon, 
  ShieldCheck,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    revenue: "<$10k",
    challenge: "shopify-cro",
    notes: ""
  });

  const faqs = [
    {
      question: "What happens after I request a growth audit or book a slot?",
      answer: "I will personally audit your Shopify store's technical elements, speed, and acquisition footprint before our call. During our 30-minute consultation, I will screenshare the results and map out an actionable optimization blueprint. No pitch, just raw value."
    },
    {
      question: "Do you work with brand-new eCommerce stores?",
      answer: "To ensure a high return on investment, my growth agency solutions are best suited for Shopify stores generating at least $10,000 in monthly recurring revenue, or brands with validated product-market fit. If you're pre-revenue but have significant funding, contact me directly."
    },
    {
      question: "How long does a typical Shopify optimization or SEO campaign take?",
      answer: "Site speed and conversion rate optimization (CRO) audits are completed within 7-10 business days. SEO campaigns and paid ads restructuring yield initial ranking and acquisition efficiency indicators in 30-45 days, with compounding growth over 3-6 months."
    },
    {
      question: "What pricing models does your growth agency offer?",
      answer: "Depending on the scope of work, we offer project-based structures (for audits and core Shopify storefront rebuilds) and monthly performance retainer agreements (for ongoing SEO growth, paid advertising, and fractional CMO consulting)."
    }
  ];

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

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
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
          notes: formData.notes
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setBookingSuccess(true);
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setBookingSuccess(false);
    setSelectedDay(null);
    setSelectedTime(null);
    setFormData({
      name: "",
      email: "",
      website: "",
      revenue: "<$10k",
      challenge: "shopify-cro",
      notes: ""
    });
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden">
      <Header />

      {/* Header section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-brand-secondary/60 to-brand-bg">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-accent font-heading font-bold text-xs uppercase tracking-widest">
            Booking & Consultation
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 tracking-tight">
            Schedule a Free eCommerce Growth Call
          </h1>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-3 leading-relaxed">
            Pre-qualify your brand and schedule a screen-share strategy audit. Let's analyze your collection paths, page speeds, and ad campaigns.
          </p>
        </div>
      </section>

      {/* Contact Layout Grid */}
      <section className="py-12 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info & FAQ */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-white">
                Agency Presence & Support
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-heading font-bold">Email Communication</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      <a href="mailto:partner@shahnawaz.agency" className="hover:text-brand-accent transition-colors">
                        partner@shahnawaz.agency
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-heading font-bold">Global Coverage</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Serving brands across USA, UK, Canada, Australia, and Europe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-heading font-bold">Virtual Office Time Zones</h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Mon-Fri: 9:00 AM - 5:00 PM EST (New York) / GMT (London)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-brand-border/60">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Consultation FAQ
              </h3>
              
              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-brand-card/40 border border-brand-border rounded-lg overflow-hidden transition-all duration-200">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center text-slate-200 hover:text-white font-semibold text-sm"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${activeFaq === idx ? "rotate-180 text-brand-accent" : ""}`} />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-5 pb-4 text-slate-400 text-xs leading-relaxed border-t border-brand-border/40 pt-3 bg-brand-bg/20">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Pre-Qual & Calendar Booking Form */}
          <div className="lg:col-span-7">
            {bookingSuccess ? (
              <div className="glass-card rounded-2xl p-8 border border-brand-border text-center flex flex-col items-center space-y-6 animate-fade-in shadow-2xl">
                <div className="w-16 h-16 bg-brand-accent/15 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-extrabold text-white">Consultation Confirmed!</h3>
                  <p className="text-slate-400 text-sm max-w-md leading-relaxed mx-auto">
                    Hi {formData.name}, your growth strategy session has been scheduled for <span className="text-brand-accent font-semibold">{selectedDay}</span> at <span className="text-brand-accent font-semibold">{selectedTime}</span>.
                  </p>
                </div>

                <div className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-5 w-full text-left space-y-3">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Meeting Details</span>
                  <div className="text-xs text-slate-300 space-y-1">
                    <p>🌐 <span className="font-semibold">Format:</span> Google Meet Screen-Share</p>
                    <p>🌐 <span className="font-semibold">Shopify URL:</span> {formData.website}</p>
                    <p>🌐 <span className="font-semibold">Goal:</span> Rebuild conversion paths & ad campaigns</p>
                    <p>📧 A calendar invite with meeting access link was sent to {formData.email}</p>
                  </div>
                </div>

                <button
                  onClick={resetBooking}
                  className="px-6 py-3 bg-brand-card hover:bg-brand-card/80 text-white font-heading font-semibold rounded-lg border border-brand-border transition-colors text-sm"
                >
                  Schedule Another Meeting
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="glass-card rounded-2xl p-8 border border-brand-border shadow-xl space-y-6">
                <h3 className="text-2xl font-heading font-extrabold text-white border-b border-brand-border/60 pb-4">
                  Growth Intake & Scheduler
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="e.g. founder@brand.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="website" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      required
                      value={formData.website}
                      onChange={handleFormChange}
                      className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="e.g. https://brand.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="revenue" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                      Monthly Store Revenue
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
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="challenge" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                    Primary Scaling Challenge
                  </label>
                  <select
                    id="challenge"
                    value={formData.challenge}
                    onChange={handleFormChange}
                    className="bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25rem',
                    }}
                  >
                    <option value="shopify-cro">Shopify Checkout Speed & Conversion Optimization</option>
                    <option value="performance-ads">Paid Ad Funnels (Meta/Google Ads/ROAS)</option>
                    <option value="organic-traffic">Organic SEO Collection Ranking</option>
                    <option value="multi-funnel">Comprehensive Full Funnel Strategy Consultation</option>
                  </select>
                </div>

                {/* Custom Interactive Calendar scheduler component */}
                <div className="space-y-4 pt-4 border-t border-brand-border/60">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-brand-accent" /> Select Available Day (EST / GMT)
                    </label>
                    <span className="text-[10px] text-slate-500">Monday - Friday availability</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {weekdays.map((day) => (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => setSelectedDay(day.date)}
                        className={`py-3.5 rounded-lg text-center flex flex-col justify-center transition-all duration-150 ${
                          selectedDay === day.date
                            ? "bg-brand-accent text-white shadow-[0_0_12px_rgba(16,185,129,0.25)] border-transparent"
                            : "bg-brand-bg border border-brand-border hover:border-slate-400 text-slate-300"
                        }`}
                      >
                        <span className="text-xs font-bold font-heading">{day.label.slice(0, 3)}</span>
                        <span className="text-[10px] mt-0.5 opacity-80">{day.date.split(" ")[2]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot picker */}
                {selectedDay && (
                  <div className="space-y-4 pt-3 animate-fade-in">
                    <label className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider block">
                      Select Available Time Slot
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3.5 text-center text-xs font-heading font-semibold rounded-lg transition-all duration-150 border ${
                            selectedTime === time
                              ? "bg-brand-accent/20 border-brand-accent text-brand-accent"
                              : "bg-brand-bg border-brand-border hover:border-slate-400 text-slate-400 hover:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                      <label htmlFor="custom-time" className="text-slate-400 font-heading text-xs font-semibold uppercase tracking-wider">
                        Or Choose a Custom Time (EST / GMT)
                      </label>
                      <input
                        type="time"
                        id="custom-time"
                        value={selectedTime && !timeSlots.includes(selectedTime) ? (selectedTime.includes(" (Custom)") ? ((() => {
                          // Extract time from format like "2:30 PM (Custom)" and convert to 24h for time input value
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
                        className="bg-brand-bg/60 border border-brand-border rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-brand-accent transition-colors w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Submit consult info */}
                <div className="space-y-4 pt-4 border-t border-brand-border/60">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Your URL & data remains strictly private. We do not share lead information.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-brand-accent to-brand-accent/90 hover:from-brand-accent hover:to-brand-accent text-white font-heading font-bold rounded-lg text-center transition-all duration-200 hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Booking..." : "Confirm Strategic Consultation Booking"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
