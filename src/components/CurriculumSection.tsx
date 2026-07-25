import React, { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, Check, ArrowRight, ShieldCheck, Key, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CurriculumSection() {
  const [expandedPack, setExpandedPack] = useState<string | null>("booster"); // default booster open or toggleable

  const toggleExpand = (packId: string) => {
    setExpandedPack(expandedPack === packId ? null : packId);
  };

  return (
    <section id="curriculum" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">
            Curriculum Roadmap
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight [text-wrap:balance] break-keep">
            Unlock Your Korean Step by Step
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed [text-wrap:balance] break-keep">
            From reading your very first Hangul letter to having unscripted native conversations—here is your structured key to real spoken fluency.
          </p>
        </div>

        {/* 3 Main Packs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-start">
          
          {/* PACK 1: STARTER KEY */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-card hover:border-primary/30 transition-all flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🍼</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#0E8579] text-[10px] font-black uppercase tracking-widest">
                Level 0 Beginner
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2 flex items-center gap-2">
              <span>Starter Key</span>
              <Key size={18} className="text-primary" />
            </h3>
            
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              For absolute beginners who cannot read Hangul yet
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6 [text-wrap:balance]">
              Master reading and writing Hangul in session one! We build rock-solid pronunciation habits so you gain instant speed and momentum for your Korean journey.
            </p>

            {/* Summer Special Callout Card */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0zeUQSB2iRgjD5sSHqOnFgv7_GNBCIaabKRLxQAktqunFlQ/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="mt-auto block p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-[#0E8579] text-white shadow-lg hover:scale-[1.02] transition-transform group"
            >
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-200 mb-1">
                <Sparkles size={12} className="animate-pulse" /> Limited Special Event
              </div>
              <div className="text-base font-black tracking-tight mb-1 flex items-center justify-between">
                <span>August Summer Special Batch</span>
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded font-black">$60</span>
              </div>
              <p className="text-xs text-white/90 font-medium mb-3">
                Full month batch for level 0 learners. Only 4 spots available!
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                <span>Claim $60 Summer Spot</span>
                <ArrowRight size={14} />
              </div>
            </a>
          </div>

          {/* PACK 2: PROGRESS KEY (BOOSTER) */}
          <div className="bg-white border-2 border-primary/30 rounded-[2.5rem] p-8 shadow-md hover:shadow-card transition-all flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-md">
              Most Popular Choice
            </div>

            <div className="flex items-center justify-between mb-4 pt-2">
              <span className="text-3xl">🗝️</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                Elementary to Intermediate
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2 flex items-center gap-2">
              <span>Progress Key</span>
              <Key size={18} className="text-primary" />
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Can read Hangul & ready to start speaking
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6 [text-wrap:balance]">
              Master practical real-life spoken Korean formulas. Transform textbook rules into natural, unscripted speech with total confidence.
            </p>

            {/* Collapsible Topics Header */}
            <button 
              onClick={() => toggleExpand("booster")}
              className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between text-left hover:bg-gray-100/70 transition-colors mb-4"
            >
              <span className="text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                <Sparkles size={14} className="text-primary" /> Core Topics Covered ({expandedPack === "booster" ? "Hide" : "Show"})
              </span>
              {expandedPack === "booster" ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-primary" />}
            </button>

            {/* Expandable Topic Details */}
            {expandedPack === "booster" && (
              <div className="space-y-3 pt-1 pb-4 animate-fade-in text-left">
                {[
                  { title: "Self Introduction", desc: "Start speaking and introducing yourself confidently right away!" },
                  { title: "Tense Conversion Formulas", desc: "Master simple rules for present, past, future, and progressive tenses." },
                  { title: "Two Counting Systems", desc: "Learn exactly when to use Sino vs Native Korean numbers for dates, times & units." },
                  { title: "Spoken Particle Rules", desc: "Discover when to use particles—and when native speakers drop them!" },
                  { title: "Must-Know Expressions", desc: "Express wants, rules, ability & conditions (can't, don't, want to, if)." },
                  { title: "1-Minute Unscripted Speech", desc: "No scripts, no fear! Speak spontaneously on real daily topics." }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                    <div className="text-xs font-black text-foreground flex items-center gap-1.5 mb-0.5">
                      <Check size={14} className="text-primary shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-medium pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <a href="#courses" className="mt-auto block pt-2">
              <Button className="w-full h-12 rounded-xl text-sm font-black bg-primary text-white hover:bg-primary/90 transition-all shadow-md">
                Apply for Progress Key
              </Button>
            </a>
          </div>

          {/* PACK 3: GOLDEN KEY (MASTER) */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-card hover:border-primary/30 transition-all flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">✨</span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest">
                Upper-Inter & Advanced
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2 flex items-center gap-2">
              <span>Golden Key</span>
              <Key size={18} className="text-amber-500" />
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              For learners seeking native fluency & deep culture
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6 [text-wrap:balance]">
              Learn 3 authentic native expressions every session. Master real Korean street slang, current cultural trends, and unscripted topic discussions!
            </p>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2 mb-6">
              <div className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                <Compass size={14} className="text-amber-600" />
                <span>Native Fluency Perks</span>
              </div>
              <p className="text-xs text-amber-800 font-medium leading-relaxed">
                By the end of each session, native expressions become truly yours. Plus, get local insider tips and a personal meetup when you visit Korea!
              </p>
            </div>

            <a href="#courses" className="mt-auto block">
              <Button variant="outline" className="w-full h-12 rounded-xl text-sm font-black border-gray-200 text-foreground hover:bg-gray-50 transition-all">
                Apply for Golden Key
              </Button>
            </a>
          </div>

        </div>

        {/* Specialized Programs Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-3 text-left max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-400 block">Tailored Programs</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Need Something Specialized?</h3>
              <p className="text-sm text-gray-300 font-medium leading-relaxed">
                We also offer custom private programs built for specific milestones:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" /> Kids Korean
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" /> TOPIK Prep
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" /> Korea Job Search
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-white/10 border border-white/15 text-center max-w-[180px] backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1 block">Notice</span>
              <p className="text-xs text-gray-200 font-medium">
                Specialized programs run exclusively as 1:1 Private Coaching.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
