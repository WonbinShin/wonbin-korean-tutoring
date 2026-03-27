import { motion } from "framer-motion";
import { Star, Users, Globe, Play, Award, BookOpen, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const credentials = [
    {
        icon: Star,
        title: "Preply Supertutor",
        detail: "Top 1% Global Ranking",
        description: "Recognized for high-quality 1:1 Korean coaching and exceptional student satisfaction.",
        year: "2023-Present"
    },
    {
        icon: Globe,
        title: "Overseas Volunteer Educator",
        detail: "Outstanding Member Award",
        description: "Volunteered in Vietnam and Japan to teach Korean culture and language. Selected as an Outstanding Member for exceptional dedication.",
        year: "2024-2025"
    },
    {
        icon: Users,
        title: "Global Language Lead",
        detail: "Cultural Exchange Expert",
        description: "President of the university Cultural Exchange Club (2023-2025) and head of multiple international language programs.",
        year: "2023-2025"
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
    { label: "Active Students", value: "500+", icon: Users },
    { label: "Countries Reached", value: "30+", icon: MapPin },
    { label: "Success Rate", value: "100%", icon: Heart },
    { label: "Course Artifacts", value: "50+", icon: BookOpen }
];

export default function MentorSection() {
    return (
        <section id="about" className="py-32 md:py-48 bg-[#FDFCF8] relative overflow-hidden">
            {/* Cinematic Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#8B5CF605_2px,transparent_2px)] [background-size:60px_60px] opacity-30 gpu-accelerated" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[140px] opacity-20 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Part 1: Persona & Vision */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

                        {/* Visual Portrait */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
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

                                {/* Identity Tag */}
                                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                                    <div>
                                        <p className="text-white text-lg font-black tracking-tight">Wonbin Ssem</p>
                                        <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Master Korean Mentor</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                        <Star size={18} fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Accents */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/10 rounded-full opacity-30" />
                            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-secondary/15 rounded-full opacity-30" />
                        </motion.div>

                        {/* Content Side */}
                        <div className="lg:w-1/2 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 gpu-accelerated"
                            >
                                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                                    Your Korean Friend: Wonbin Ssem
                                </div>
                                <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight leading-[0.85] [text-wrap:balance]">
                                    Your Personal <br />
                                    <span className="text-primary italic">Korean Mentor.</span>
                                </h2>
                                <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                                    <p>
                                        I believe language is more than just grammar—it's <span className="text-foreground font-black italic">energy</span>. I'm here to translate that energy into a path you can actually walk.
                                    </p>
                                    <p>
                                        Forget the boring drills. We build fluency through <span className="text-secondary font-black">visual mnemonics</span> and real-world cultural context. No barrier, just progress.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-wrap gap-6 gpu-accelerated"
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

                    {/* Part 2: Impact & Credentials */}
                    <div className="grid lg:grid-cols-2 gap-20 items-start">

                        {/* Credentials Column */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="gpu-accelerated"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Professional Journey</span>
                                <h3 className="text-4xl font-black text-foreground tracking-tight leading-none mb-6">Proven Excellence</h3>
                                <p className="text-muted-foreground font-medium max-w-md">
                                    A track record of excellence in educational psychology and global cultural leadership.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {credentials.map((item, idx) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="group relative p-6 rounded-[2.5rem] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-500 cursor-default gpu-accelerated"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                                <item.icon size={24} className="text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors underline-offset-4 decoration-primary/20">{item.title}</h4>
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

                        {/* Multi-layered Stats Grid - Refined 2x2 Balanced Size */}
                        <div className="relative pt-10 lg:pt-20 w-full max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 gap-6 relative z-10 w-full">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: idx * 0.1,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="relative flex flex-col items-center justify-center p-10 rounded-[3.5rem] bg-white border border-gray-50 shadow-card hover:shadow-card-hover transition-all duration-500 gpu-accelerated min-h-[260px] text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                            <stat.icon size={32} className="text-primary" />
                                        </div>
                                        <span className="text-4xl md:text-6xl font-black text-foreground mb-2 tracking-tight">{stat.value}</span>
                                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-primary/60 leading-tight whitespace-normal max-w-[180px]">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Geometric Decor elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full gpu-accelerated pointer-events-none opacity-50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-t-2 border-primary/5 rounded-full gpu-accelerated pointer-events-none opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
