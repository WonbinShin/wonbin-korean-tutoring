import React, { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, Check, ShieldCheck, BookOpen, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CurriculumSection() {
  const [expandedPack, setExpandedPack] = useState(null);

  const toggleExpand = (packId) => {
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
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Your Korean Learning Path
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Start from zero and grow step by step. Each level helps you read, speak, and use Korean in real life.
          </p>
        </div>

        {/* 3 Main Packs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
          
          {/* STARTER */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-card hover:border-primary/30 transition-all flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen size={24} />
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                Level 0
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2">
              Starter
            </h3>
            
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              For beginners who cannot read Hangul yet
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6">
              Learn to read and write Hangul in your first lesson. We also fix your pronunciation early so you can learn faster later.
            </p>

            <a href="#courses" className="mt-auto block pt-2">
              <Button className="w-full h-12 rounded-xl text-sm font-black bg-primary text-white hover:bg-primary/90 transition-all shadow-md">
                Apply for Starter
              </Button>
            </a>
          </div>

          {/* BOOSTER */}
          <div className="bg-white border-2 border-primary/30 rounded-[2.5rem] p-8 shadow-md hover:shadow-card transition-all flex flex-col h-full relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-md">
              Most Popular
            </div>

            <div className="flex items-center justify-between mb-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Rocket size={24} />
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                Elementary – Intermediate
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2">
              Booster
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              You can read Hangul and want to start speaking
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6">
              Learn useful Korean for daily life. Turn basic grammar into natural speech you can use right away.
            </p>

            <button 
              onClick={() => toggleExpand("booster")}
              className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between text-left hover:bg-gray-100/70 transition-colors mb-4"
            >
              <span className="text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                <Sparkles size={14} className="text-primary" /> What You Learn {expandedPack === "booster" ? "Show Less" : "Show Details"}
              </span>
              {expandedPack === "booster" ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-primary" />}
            </button>

            {expandedPack === "booster" && (
              <div className="space-y-3 pt-1 pb-4 animate-fade-in text-left">
                {[
                  { title: "Self Introduction", desc: "Introduce yourself clearly in real-life settings." },
                  { title: "Tense Patterns", desc: "Learn easy rules for past, present, future, and ongoing actions." },
                  { title: "Two Number Systems", desc: "Know when to use each Korean number for dates, time, and counting." },
                  { title: "Particles in Speech", desc: "Learn when to use particles and when Koreans skip them." },
                  { title: "Must-Know Grammar", desc: "Talk about wants, rules, ability, and simple conditions." },
                  { title: "1-Minute Free Talk", desc: "Speak without a script on everyday topics." }
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
                Apply for Booster
              </Button>
            </a>
          </div>

          {/* MASTER */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-card hover:border-primary/30 transition-all flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Crown size={24} />
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                Upper-Intermediate & Up
              </span>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-2">
              Master
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              For learners who want to sound more like a native speaker
            </p>

            <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6">
              Learn 3 real Korean expressions every lesson. Practice slang, culture, and free conversation on any topic.
            </p>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-2 mb-6">
              <div className="text-xs font-black text-primary flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>Extra Perks</span>
              </div>
              <p className="text-xs text-foreground/70 font-medium leading-relaxed">
                By the end of each lesson, new expressions feel natural to you. When you visit Korea, I can also meet you and show you local spots!
              </p>
            </div>

            <a href="#courses" className="mt-auto block">
              <Button variant="outline" className="w-full h-12 rounded-xl text-sm font-black border-gray-200 text-foreground hover:bg-gray-50 transition-all">
                Apply for Master
              </Button>
            </a>
          </div>

        </div>

        {/* Specialized Programs Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-3 text-left max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300 block">Special Programs</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Need Something Different?</h3>
              <p className="text-sm text-gray-300 font-medium leading-relaxed">
                I also offer 1:1 classes made for your goal:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-300 shrink-0" /> Kids Korean
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-300 shrink-0" /> TOPIK Prep
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-300 shrink-0" /> Job in Korea
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-white/10 border border-white/15 text-center max-w-[180px] backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-1 block">Note</span>
              <p className="text-xs text-gray-200 font-medium">
                Special programs are 1:1 private classes only.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}