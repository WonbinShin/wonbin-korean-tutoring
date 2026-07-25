import React from "react";
import { ArrowRight, Check, Star, Users, Users2, Flame } from "lucide-react";
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
    buttonText: "Apply for 1:1 Private Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  },
  {
    id: "duo",
    title: "2:1 Duo Class",
    icon: Users2,
    originalPrice: "$150 USD",
    discountPrice: "$100 USD",
    priceSuffix: "per person per month",
    duration: "50 minutes per session, 4 sessions per month",
    status: "Cohort enrollment on a first-come, first-served basis",
    buttonText: "Apply for 2:1 Duo Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  },
  {
    id: "group",
    title: "4:1 Group Class",
    icon: Users,
    originalPrice: "$130 USD",
    discountPrice: "$80 USD",
    priceSuffix: "per person per month",
    duration: "50 minutes per session, 4 sessions per month",
    status: "Cohort enrollment on a first-come, first-served basis",
    buttonText: "Apply for 4:1 Group Class",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header"
  }
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Pricing & Class Options
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Invest in Your Fluency
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {options.map((opt) => (
            <div key={opt.id} className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <opt.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-black text-foreground mb-4">{opt.title}</h3>
              
              <div className="mb-6 space-y-1">
                <div className="flex items-end gap-3 flex-wrap">
                  <span className="text-xl font-bold text-gray-400 line-through decoration-gray-300">
                    {opt.originalPrice}
                  </span>
                  <span className="text-4xl font-black text-primary tracking-tighter">
                    {opt.discountPrice}
                  </span>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {opt.priceSuffix}
                </span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-foreground/80 font-medium leading-snug">
                    {opt.duration}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-foreground/80 font-medium leading-snug">
                    {opt.status}
                  </span>
                </div>
              </div>

              <a href={opt.buttonLink} target="_blank" rel="noreferrer" className="mt-auto block">
                <Button className="w-full h-14 rounded-xl text-base font-black bg-foreground text-white hover:bg-primary transition-all shadow-md group-hover:shadow-xl">
                  {opt.buttonText}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Option 4: Daily Korean */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-8 sm:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 justify-between shadow-sm">
          <div className="flex items-start gap-6 flex-1">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-200">
              <Flame size={32} />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-2">
                Self-Paced Habit
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">Daily Korean Subscription</h3>
              <p className="text-sm font-medium text-foreground/70 max-w-md leading-relaxed">
                Get daily vocabulary updates, personal life stories from Wonbin Ssem, and quick Korean language tips.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <div className="text-center md:text-right">
              <span className="text-4xl font-black text-indigo-600 tracking-tighter block leading-none mb-1">$9 USD</span>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">per month</span>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScJ_GGJltryp_jyoH237Wc6ONFdUs-iYrjqmjGpBiRtddJJcA/viewform?usp=header" target="_blank" rel="noreferrer">
              <Button className="h-12 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm transition-all shadow-lg shadow-indigo-200">
                Join Subscription
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
