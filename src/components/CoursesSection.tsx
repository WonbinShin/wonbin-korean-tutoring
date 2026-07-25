import React from "react";
import { ArrowRight, Check, Star, Users, Users2, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const options = [
  {
    id: "private",
    title: "1:1 Private Class",
    icon: Star,
    originalPrice: "$180 USD",
    discountPrice: "$140 USD",
    priceSuffix: "per month",
    duration: "50 minutes per session, 4 sessions per month",
    status: "Open enrollment anytime with flexible schedule options",
    description: "100% custom-tailored coaching for your personal speed & goals.",
    buttonText: "Apply for 1:1 Private Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  },
  {
    id: "duo",
    title: "2:1 Duo Class",
    icon: Users2,
    originalPrice: "$150 USD",
    discountPrice: "$100 USD",
    priceSuffix: "per person / month",
    duration: "50 minutes per session, 4 sessions per month",
    status: "Cohort enrollment on a first-come, first-served basis",
    description: "Learn together with a friend or partner at your level.",
    buttonText: "Apply for 2:1 Duo Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  },
  {
    id: "group",
    title: "4:1 Group Class",
    icon: Users,
    originalPrice: "$130 USD",
    discountPrice: "$80 USD",
    priceSuffix: "per person / month",
    duration: "50 minutes per session, 4 sessions per month",
    status: "Cohort enrollment on a first-come, first-served basis",
    description: "High-interaction small group batch for maximum practice.",
    buttonText: "Apply for 4:1 Group Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  }
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">
            Pricing & Regular Class Options
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight [text-wrap:balance] break-keep">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed [text-wrap:balance] break-keep">
            Choose the format that fits your learning style best. All classes include full Google Drive notes, class recordings, and KakaoTalk feedback!
          </p>
        </div>

        {/* 3 Main Class Options Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 items-stretch">
          {options.map((opt) => (
            <div 
              key={opt.id} 
              className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm flex flex-col relative overflow-hidden group hover:border-primary/50 hover:shadow-card transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <opt.icon size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={11} /> Discount Active
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-foreground mb-2 tracking-tight">{opt.title}</h3>
              <p className="text-xs text-muted-foreground font-medium mb-6 leading-relaxed [text-wrap:balance]">
                {opt.description}
              </p>
              
              {/* Pricing Display with Strikethrough */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FDFCF8] border border-gray-100">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-xl font-bold text-gray-400 line-through decoration-red-400/70">
                    {opt.originalPrice}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                    {opt.discountPrice}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest block mt-1">
                  {opt.priceSuffix}
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <Check size={12} />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/80 font-medium leading-snug">
                    {opt.duration}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <Check size={12} />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/80 font-medium leading-snug">
                    {opt.status}
                  </span>
                </div>
              </div>

              {/* Apply Button */}
              <a href={opt.buttonLink} target="_blank" rel="noreferrer" className="mt-auto block">
                <Button className="w-full h-14 rounded-xl text-sm font-black bg-foreground text-white hover:bg-primary transition-all shadow-md group-hover:shadow-xl flex items-center justify-center gap-2">
                  <span>{opt.buttonText}</span>
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Option 4: Daily Korean Subscription */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white p-8 sm:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 justify-between shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          <div className="flex items-start gap-6 flex-1 text-left relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0 shadow-inner">
              <Flame size={32} />
            </div>
            <div className="space-y-2">
              <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 text-[10px] font-black uppercase tracking-widest">
                Daily Korean Habit Membership
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Daily Korean Subscription</h3>
              <p className="text-xs sm:text-sm font-medium text-emerald-100/90 max-w-lg leading-relaxed [text-wrap:balance]">
                Get daily vocabulary updates, personal life stories from Wonbin Ssem, and quick Korean language tips directly in your inbox & Discord community!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-4 shrink-0 w-full md:w-auto justify-between relative z-10">
            <div className="text-center md:text-right">
              <span className="text-3xl sm:text-4xl font-black text-emerald-300 tracking-tight block leading-none mb-1">$9 USD</span>
              <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest">per month</span>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-12 px-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-sm transition-all shadow-lg shadow-emerald-950/50">
                Join Subscription
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
