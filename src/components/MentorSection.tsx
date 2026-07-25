import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Globe, Play, Award, BookOpen, Heart, MapPin, Sparkles, Map, Compass } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const credentials = [
    {
        icon: Star,
        title: "Preply Supertutor",
        detail: "Top 1% Global Ranking",
        description: "Recognized for high-quality 1:1 Korean coaching and exceptional student satisfaction.",
        year: "2023-Present",
        images: [],
        link: "https://preply.com/ko/tutor/5155100?utm_source=friend_plg&utm_medium=copy_link&utm_campaign=tut_plg_st_all_0_mul_xx_multiplesub_share-your-tutor-6&utm_content=MTQ2ODc2Mzc%3D&adj_t=20yroq7d&adj_campaign=tut_plg_st_all_0_mul_xx_multiplesub_share-your-tutor-6&ts=17828076",
        detailedInfo: "Achieved the prestigious Supertutor status on Preply within the first few months, maintaining a stellar 5.0-star rating across hundreds of reviews. Features custom-tailored curriculum, high-retention mnemonic tools, and consistent student success track records."
    },
    {
        icon: Globe,
        title: "Overseas Volunteer Educator",
        detail: "Outstanding Member Award",
        description: "Volunteered in Vietnam and Indonesia to teach Korean culture and language. Selected as an Outstanding Member for exceptional dedication.",
        year: "2024-2025",
        images: [
            "/lovable-uploads/volunteer-1.jpg",
            "/lovable-uploads/volunteer-2.jpg",
            "/lovable-uploads/volunteer-3.jpg",
            "/lovable-uploads/volunteer-4.jpg"
        ],
        detailedInfo: "Conducted immersive cultural and language programs for local university students and communities. Developed interactive teaching resources that bridged cultural gaps and made learning enjoyable, receiving recognition for volunteer leadership."
    },
    {
        icon: Users,
        title: "Global Language Lead",
        detail: "Cultural Exchange Expert",
        description: "President of the university Cultural Exchange Club (2023-2025) and head of multiple international language programs.",
        year: "2023-2025",
        images: [],
        detailedInfo: "Led the university Cultural Exchange Club, designing and executing language exchange cafes, cultural festivals, and peer mentoring programs for over 300 international learners."
    },
    {
        icon: Award,
        title: "World Culture Contest",
        detail: "1st Place Winner",
        description: "Awarded for excellence in promoting global cultural awareness and language education.",
        year: "2024",
        images: [],
        detailedInfo: "Participated and won 1st place in the World Culture Contest, presenting innovative methods of teaching Korean culture and making language acquisition highly interactive."
    },
];

const stats = [
    { label: "Total Students", value: "150+", icon: Users },
    { label: "Countries Reached", value: "30+", icon: MapPin },
    { label: "Success Rate", value: "100%", icon: Heart },
    { label: "Course Artifacts", value: "50+", icon: BookOpen }
];

export default function MentorSection() {
    const [isPlayingStory, setIsPlayingStory] = useState(false);
    return (
        <section id="about" className="py-24 md:py-36 bg-[#FDFCF8] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#0E857908_2px,transparent_2px)] [background-size:60px_60px] opacity-40 gpu-accelerated" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[140px] opacity-20 -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Part 1: Persona & Vision */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                        {/* Visual Portrait */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative lg:w-1/2 max-w-md w-full gpu-accelerated"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/15 border-4 border-white group">
                                <img
                                    src="/lovable-uploads/profile-website.jpg"
                                    alt="Wonbin Ssem"
                                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                                {/* Identity Tag */}
                                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                                    <div>
                                        <p className="text-white text-lg font-black tracking-tight">Wonbin Ssem</p>
                                        <p className="text-emerald-300 text-[10px] font-black uppercase tracking-widest">Master Korean Mentor</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                                        <Star size={18} fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <div className="lg:w-1/2 space-y-8 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-5 gpu-accelerated"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-[0.25em]">
                                    Meet Your Korean Friend & Mentor
                                </div>
                                <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight leading-[1.05] [text-wrap:balance] break-keep">
                                    Learn Fast, Speak Real, <br />
                                    <span className="text-primary italic font-serif">And Experience Real Korea.</span>
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-xl [text-wrap:balance] break-keep">
                                    <p>
                                        Forget dry textbooks and awkward sentences no native actually says. My mission is to give you <span className="text-foreground font-black italic">rock-solid fundamentals</span> right from session one—so your learning speed exponentially accelerates!
                                    </p>
                                    <p>
                                        Every single lesson is <span className="text-primary font-black">100% custom-tailored to your goals</span>. Whether you love K-Dramas, prepare for travel, or plan to work in Korea, you only learn phrases you will actually use.
                                    </p>
                                    <p className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-emerald-900 text-sm font-semibold flex items-start gap-3">
                                        <Compass className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span>
                                            <strong className="font-black block text-primary mb-0.5">🇰🇷 Special Local Tour Perk:</strong>
                                            When you visit Korea, I will personally meet up with you, hang out, show you authentic hidden local spots, and introduce you to real Korean vibes!
                                        </span>
                                    </p>
                                </div>
                            </motion.div>

                            {/* Introduction Video Player */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full max-w-xl gpu-accelerated pt-2"
                            >
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Watch My Story & Teaching Style</span>
                                <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-xl border border-gray-100 group bg-black">
                                    {!isPlayingStory ? (
                                        <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlayingStory(true)}>
                                            <img
                                                src="https://img.youtube.com/vi/wvTeALc6DF4/maxresdefault.jpg"
                                                alt="Wonbin Ssem Story Video Thumbnail"
                                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                                                    <Play size={24} fill="currentColor" className="ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <iframe 
                                            width="100%" 
                                            height="100%" 
                                            src="https://www.youtube.com/embed/wvTeALc6DF4?autoplay=1" 
                                            title="Wonbin Ssem Story" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen 
                                            className="w-full h-full"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Part 2: Credentials */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="space-y-8 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-2 block">Background & Track Record</span>
                                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-3">Proven Teaching Excellence</h3>
                                <p className="text-muted-foreground font-medium text-base">
                                    Recognized globally for educational leadership, cultural exchange, and proven student success.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {credentials.map((item, idx) => {
                                    const CardContent = (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                                            className="group relative p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:scale-105 transition-transform">
                                                    <item.icon size={22} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-base">{item.title}</h4>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/50">{item.year}</span>
                                                    </div>
                                                    <p className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-1.5">{item.detail}</p>
                                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                    <div className="mt-2.5 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span>{(item as any).link ? "Visit Preply Profile" : "View Details"}</span>
                                                        <Sparkles size={10} />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );

                                    if ((item as any).link) {
                                        return (
                                            <a key={item.title} href={(item as any).link} target="_blank" rel="noreferrer" className="block">
                                                {CardContent}
                                            </a>
                                        );
                                    }

                                    return (
                                        <Dialog key={item.title}>
                                            <DialogTrigger asChild>
                                                {CardContent}
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[600px] p-8 rounded-3xl bg-white border-none shadow-2xl overflow-y-auto max-h-[85vh]">
                                                <DialogTitle className="text-2xl font-black text-foreground tracking-tight">{item.title}</DialogTitle>
                                                <div className="mt-4 space-y-6">
                                                    <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-primary/60 border-b border-gray-100 pb-3">
                                                        <span>{item.detail}</span>
                                                        <span>{item.year}</span>
                                                    </div>
                                                    <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">
                                                        {(item as any).detailedInfo}
                                                    </p>
                                                    
                                                    {(item as any).images && (item as any).images.length > 0 && (
                                                        <div className="space-y-4 pt-4 border-t border-gray-50">
                                                            <h5 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                                                <Sparkles size={12} /> Media Gallery
                                                            </h5>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                {(item as any).images.map((imgUrl: string, i: number) => (
                                                                    <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-gray-50 border border-gray-100">
                                                                        <img src={imgUrl} alt={`${item.title} media ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="pt-6 lg:pt-16 w-full max-w-xl mx-auto">
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 text-center"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <stat.icon size={28} />
                                        </div>
                                        <span className="text-3xl md:text-5xl font-black text-foreground mb-1 tracking-tight">{stat.value}</span>
                                        <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
