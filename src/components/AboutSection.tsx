import { Play, Star, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export default function AboutSection() {
  return (
    <section id="about" className="py-64 min-h-screen flex items-center bg-[#FDFCF8] relative overflow-hidden">
      {/* Background intensity - hardware accelerated */}
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF605_2px,transparent_2px)] [background-size:60px_60px] opacity-30 gpu-accelerated" />

      {/* Decorative Aura for depth without clutter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[140px] opacity-20 -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 max-w-7xl mx-auto">

          {/* Portrait Side - perfectly balanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:w-1/2 max-w-md w-full gpu-accelerated"
          >
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/10 group">
              <img
                src="/lovable-uploads/profile-website.jpg"
                alt="Wonbin Ssem"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Identity Token */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-white text-lg font-black tracking-tight">Wonbin Ssem</p>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Master Mentor</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Subtle accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/10 rounded-full opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-secondary/15 rounded-full opacity-30" />
          </motion.div>

          {/* Narrative Side - substantial content to fill space */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 gpu-accelerated"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                Meet Your Korean Friend: Wonbin Ssem
              </div>
              <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tighter leading-[0.85] [text-wrap:balance]">
                Your Personal <br />
                <span className="text-primary italic">Korean Mentor.</span>
              </h2>
              <div className="space-y-8 text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                <p>
                  I believe language is more than just grammar—it's <span className="text-foreground font-black italic">energy</span>. I'm here to translate that energy into a path you can actually walk.
                </p>
                <p>
                  Forget the boring drills. We build fluency through <span className="text-secondary font-black">visual mnemonics</span> and real-world cultural context. No barrier, just progress.
                </p>
              </div>
            </motion.div>

            {/* Premium CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="gpu-accelerated"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-[4.5rem] rounded-full px-12 border-gray-100 shadow-sm hover:bg-white hover:shadow-card-hover hover:border-primary/20 flex items-center gap-5 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Watch My Story</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-transparent border-none shadow-none">
                  <DialogTitle className="sr-only">Wonbin Ssem Story Video</DialogTitle>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/l4bJo0ClAoI?autoplay=1" 
                      title="Wonbin Ssem Story" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="w-full h-full"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}