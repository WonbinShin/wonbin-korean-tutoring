import React from "react";
import { Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

const packs = [
  {
    title: "Pack 1: Starter",
    target: "Absolute beginners who cannot read Korean yet",
    focus: "Master Hangul reading, writing, and clean pronunciation in session one",
    note: "Check out our $60 August Summer Special Batch banner above for the promotional rate!",
    topics: []
  },
  {
    title: "Pack 2: Booster",
    target: "Learners who can read Hangul but want to start speaking",
    focus: "Master practical grammar formulas and daily speech",
    note: "",
    topics: [
      "Self-introductions for real-life settings",
      "Tense conversion formulas for present, past, future, and progressive",
      "Counting systems for dates, time, and units",
      "Real-life particle rules for spoken Korean",
      "Essential grammar for wants, rules, and ability",
      "Unscripted 1-minute conversation practice"
    ]
  },
  {
    title: "Pack 3: Master",
    target: "Upper-intermediate and advanced learners",
    focus: "Learn three native expressions each session and apply them through topic discussions and situational role-plays",
    note: "",
    topics: []
  }
];

export default function CurriculumSection() {
  return (
    <section className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Curriculum Levels
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Clear Learning Paths
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packs.map((pack) => (
            <div key={pack.title} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-card-hover transition-all">
              <h3 className="text-2xl font-black text-foreground mb-4">{pack.title}</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Target</span>
                  <p className="text-sm text-foreground/90 font-medium">{pack.target}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Focus</span>
                  <p className="text-sm text-foreground/90 font-medium">{pack.focus}</p>
                </div>
                
                {pack.topics.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Key Topics</span>
                    <ul className="space-y-2">
                      {pack.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <ArrowUpRight size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {pack.note && (
                  <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                    <Sparkles size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-primary leading-relaxed">{pack.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Programs */}
        <div className="max-w-4xl mx-auto bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-4">Specialized Programs</h3>
              <p className="text-gray-400 text-sm mb-6">
                We also offer custom private programs for specific goals:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold">
                  <ShieldCheck size={18} className="text-primary" /> Kids Korean
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <ShieldCheck size={18} className="text-primary" /> TOPIK Exam Preparation
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <ShieldCheck size={18} className="text-primary" /> Job Search Support in Korea (Interview prep & resume writing)
                </li>
              </ul>
            </div>
            <div className="shrink-0 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-center max-w-[200px]">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">Note</span>
              <p className="text-xs text-gray-200 font-medium">
                Specialized programs run exclusively as 1:1 Private Classes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
