import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-[150] bg-gradient-to-r from-[#0E8579] via-[#059669] to-[#047857] text-white shadow-xl transition-all duration-300">
      {/* Background Subtle Sparkle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 py-3.5 md:py-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6 max-w-7xl mx-auto">
          
          {/* Content Left */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-1.5">
              <span className="bg-white/20 text-white text-[11px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                <Sparkles size={13} className="text-yellow-300 animate-pulse" /> August Special Batch
              </span>
              <span className="bg-black/25 text-white/90 text-xs font-bold px-3 py-0.5 rounded-full backdrop-blur-md">
                Level 0 Beginners (No Hangul Needed)
              </span>
            </div>
            
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-snug text-white">
              Absolute Beginner Hangul Batch — Start Reading Session 1
            </h2>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-1.5 mt-2 text-xs md:text-sm font-medium text-white/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-200" />
                <span>Read Korean letters after session 1 & build clean pronunciation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-200" />
                <span>Includes Free Hangul PDF & KakaoTalk group access</span>
              </div>
              <span className="text-yellow-200 font-bold text-xs bg-black/20 px-2 py-0.5 rounded">
                * Limited to 4 students max
              </span>
            </div>
          </div>

          {/* Action Right */}
          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-center lg:justify-end mt-1 lg:mt-0">
            <div className="text-center sm:text-right">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 block">Full Month Special</span>
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">$60 USD</span>
            </div>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0zeUQSB2iRgjD5sSHqOnFgv7_GNBCIaabKRLxQAktqunFlQ/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <Button className="h-11 bg-white text-[#0E8579] hover:bg-emerald-50 text-sm font-black px-6 rounded-full shadow-lg transition-all hover:scale-105 gap-2">
                Claim Your $60 Spot
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>

        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:top-3 md:right-4 w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/20 text-white/80 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
