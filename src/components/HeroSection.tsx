import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-32 pb-20"
    >
      {/* Cinematic Background Architecture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[150px]" style={{ animationDelay: '2s' }} />

        {/* Subtle geometric lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">

          {/* High-Contrast Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4 gpu-accelerated"
          >
            <Zap size={14} className="animate-pulse" />
            Zero-Barrier Learning Experience
          </motion.div>

          {/* Epic Typography */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] sm:text-[8vw] md:text-[7rem] font-black leading-[0.9] tracking-[-0.02em] text-foreground gpu-accelerated"
            >
              Master Korean <br />
              <span className="text-secondary italic text-gradient-primary tracking-[0.02em]">Naturally.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="gpu-accelerated"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                The high-performance roadmap to native fluency. <br />
                Skip the textbooks. Speak the culture.
              </p>
            </motion.div>
          </div>

          {/* High-Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-8 w-full justify-center gpu-accelerated"
          >
            <a href="#booking" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-16 rounded-[2rem] px-10 bg-primary text-primary-foreground text-lg font-black tracking-tight hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3"
              >
                Book Free Trial
                <ArrowRight size={20} />
              </Button>
            </a>

            <a href="#courses" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-16 rounded-[2rem] px-10 border-gray-200 text-foreground text-lg font-black tracking-tight hover:bg-gray-50 transition-all flex items-center gap-3"
              >
                Explore Paths
                <Sparkles size={20} className="text-primary" />
              </Button>
            </a>
          </motion.div>

          {/* Social Proof / Stats Hook - Polished & Balanced Sizing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-16 pb-48 border-t border-gray-100/50 w-full max-w-5xl mx-auto gpu-accelerated"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
              {[
                { label: "Active Students", value: "500+" },
                { label: "Countries Reached", value: "30+" },
                { label: "Success Rate", value: "100%" },
                { label: "Course Artifacts", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center space-y-2.5">
                  <div className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-black leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* High-End Scroll Indicator - Lowered to avoid overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">Initialize Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}