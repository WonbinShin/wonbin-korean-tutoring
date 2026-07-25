import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden shadow-lg z-[150]">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white/20 to-transparent skew-x-12 translate-x-16" />

      <div className="container mx-auto px-4 py-4 md:py-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* Content Left */}
          <div className="flex-1 w-full max-w-4xl mx-auto lg:mx-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                <Sparkles size={12} /> Special Event
              </span>
              <span className="text-white/90 text-sm font-bold bg-black/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                Level 0 Learners (No Hangul)
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-black mb-1 leading-tight text-white shadow-sm">
              August Summer Special: Absolute Beginner Hangul Batch
            </h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 mt-3 text-sm font-medium text-white/90">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-white/80" />
                <span>Read all Korean letters after session 1 & Build clean pronunciation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-white/80" />
                <span>Includes Free original Hangul PDF & KakaoTalk group access</span>
              </div>
            </div>
            <div className="mt-2 text-xs font-bold text-white/70 uppercase tracking-wide">
              * Strictly limited to 4 students on a first-come, first-served basis
            </div>
          </div>

          {/* Action Right */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <div className="flex flex-col items-center sm:items-end">
              <span className="text-sm font-black text-white/80 uppercase tracking-widest mb-0.5">Full Month</span>
              <span className="text-3xl font-black text-white tracking-tighter">$60 USD</span>
            </div>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0zeUQSB2iRgjD5sSHqOnFgv7_GNBCIaabKRLxQAktqunFlQ/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-12 bg-white text-primary hover:bg-gray-50 text-base font-black px-8 rounded-full shadow-xl shadow-black/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20 gap-2">
                Claim Your $60 Summer Spot
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>

        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
