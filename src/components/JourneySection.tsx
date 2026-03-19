import { motion } from "framer-motion";
import { Award, Globe, Users, BookOpen, Star, Heart, GraduationCap, MapPin } from "lucide-react";

const credentials = [
  {
    icon: Star,
    title: "Preply Supertutor",
    detail: "Top 1% Global Ranking",
    description: "Recognized for high-quality 1:1 Korean coaching and exceptional student satisfaction.",
    year: "2023-Present"
  },
  {
    icon: GraduationCap,
    title: "Samsung Dream Class Mentor",
    detail: "Educational Excellence",
    description: "Selected for the prestigious Samsung Dream Class, mentoring students in Korean language and culture.",
    year: "2023"
  },
  {
    icon: Globe,
    title: "Global Language Lead",
    detail: "Cultural Exchange Expert",
    description: "Head of Korean language programs for international learners in Vietnam and beyond.",
    year: "2024-2025"
  },
  {
    icon: Award,
    title: "World Culture Contest",
    detail: "1st Place Winner",
    description: "Awarded for excellence in promoting global cultural awareness and language education.",
    year: "2024"
  },
];

const stats = [
  { label: "Students Helped", value: "500+", icon: Users },
  { label: "Lessons Taught", value: "2,000+", icon: BookOpen },
  { label: "Positive Reviews", value: "100%", icon: Heart },
  { label: "Countries Reached", value: "30+", icon: MapPin }
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-48 relative overflow-visible bg-[#FDFCF8]">
      {/* Background kinetic element - simplified for performance */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">

          {/* Left: Content & Credentials */}
          <div className="space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 gpu-accelerated"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Proven Excellence</span>
                <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight leading-[0.9] mb-6">
                  Your Friendly <br />
                  <span className="text-primary tracking-tight">Korean Mentor</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
                  I combine modern educational psychology with practical, real-world context to help you master Korean naturally.
                </p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {credentials.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative p-6 rounded-[2.5rem] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-500 cursor-default gpu-accelerated"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 leading-none">{item.year}</span>
                      </div>
                      <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">{item.detail}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Stats - Simplified for Peak Performance */}
          <div className="relative order-1 lg:order-2 min-h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Floating Stats Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10 p-4 w-full h-full">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`relative flex flex-col items-center justify-center p-8 rounded-[3rem] bg-white border border-gray-50 shadow-card hover:shadow-card-hover transition-shadow duration-500 gpu-accelerated ${idx % 2 === 0 ? 'mt-12' : 'mt-0'}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                      <stat.icon size={32} className="text-primary" />
                    </div>
                    <span className="text-4xl font-black text-foreground mb-2 tracking-tight">{stat.value}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 text-center">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Minimalist decorative orbits - hardware accelerated */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full gpu-accelerated pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-t-2 border-primary/5 rounded-full gpu-accelerated pointer-events-none opacity-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
