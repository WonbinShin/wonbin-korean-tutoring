import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Award, Star, Clock, Globe } from "lucide-react";

const trustBadges = [
  { icon: Star, title: "5.0 Star Rated", desc: "Verified Super Tutor" },
  { icon: Clock, title: "1,000+ Hours", desc: "Teaching Experience" },
  { icon: Globe, title: "25+ Countries", desc: "Global Students" },
  { icon: Award, title: "Certified", desc: "Overseas Educator" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden bg-[#FDFCF8] pt-28 pb-16"
    >
      {/* Background Decorative Auras */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[15%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[15%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-secondary/15 rounded-full blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#4D71FF 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10">

          {/* High-Contrast Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] gpu-accelerated"
          >
            <Zap size={14} className="animate-pulse text-primary" />
            Easy, Fun & Real Korean Coaching
          </motion.div>

          {/* Headline & Subtitle */}
          <div className="space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground gpu-accelerated [text-wrap:balance]"
            >
              <span className="inline-block">Unlock Your Real Korean</span>{" "}
              <span className="text-primary font-black tracking-tight whitespace-nowrap">with Wonbin Ssem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed gpu-accelerated [text-wrap:balance]"
            >
              Learn real spoken Korean from lesson one. Read Hangul easily, speak with confidence, and make real Korean friends!
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md mx-auto gpu-accelerated"
          >
            <a href="#courses" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="w-full h-15 rounded-2xl px-8 bg-primary text-primary-foreground text-base sm:text-lg font-black tracking-tight hover:scale-[1.02] transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
              >
                View Classes & Prices
                <ArrowRight size={18} />
              </Button>
            </a>

            <a href="#curriculum" className="w-full sm:w-auto flex-1">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-15 rounded-2xl px-8 border-gray-200 text-foreground text-base sm:text-lg font-black tracking-tight hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Explore Courses
                <Sparkles size={18} className="text-primary" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-10 w-full max-w-4xl mx-auto gpu-accelerated"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.title} 
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary/50 hover:shadow-[0_0_25px_rgba(77,113,255,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <badge.icon size={20} />
                  </div>
                  <div className="text-lg md:text-xl font-black text-foreground tracking-tight text-center leading-tight mb-1 group-hover:text-primary transition-colors">
                    {badge.title}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold text-center">
                    {badge.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}