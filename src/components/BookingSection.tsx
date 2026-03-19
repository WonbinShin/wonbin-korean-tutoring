import { CalendarDays, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  "Comprehensive Level Test",
  "Personalized Learning Roadmap",
  "Consultation on Study Goals",
  "Zero Commitment — Just Learn!"
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-32 relative overflow-hidden bg-white">
      {/* Background kinetic element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 translate-x-[-20%] translate-y-[20%]" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left side: Context & Value */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="gpu-accelerated"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-black uppercase tracking-widest mb-6">
                  <Zap size={14} className="animate-pulse" />
                  Limited Time Availability
                </div>
                <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight leading-[0.9] mb-6">
                  Experience Your <br />
                  <span className="text-secondary text-gradient-primary">First Lesson Free</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Not sure where to start? Join me for a 20-minute consultation where we'll test your level and build your perfect learning roadmap.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 gpu-accelerated"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-secondary" />
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: Smart Booking Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative gpu-accelerated"
            >
              <div className="relative z-10 p-10 rounded-[3.5rem] bg-white border border-gray-100 shadow-2xl overflow-hidden group">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center">
                      <CalendarDays size={32} className="text-primary" />
                    </div>
                    <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">Live on Calendly</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">20-Min Level Test & Roadmap</h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      Pick any available slot from the calendar. No credit card required.
                    </p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div className="space-y-4">
                    <a
                      href="https://calendly.com/eorn6796/new-meeting"
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/95 text-lg font-black tracking-tight flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20">
                        Book Your Free Trial
                        <ArrowRight size={20} />
                      </Button>
                    </a>
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Rescheduling is easy and 100% free
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind card */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl -z-10 rounded-[4rem]" />
            </motion.div>

          </div>
        </div >
      </div >
    </section >
  );
}
