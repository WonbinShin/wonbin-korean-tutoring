import {
  Youtube,
  FileText,
  BookOpen,
  Plane,
  GraduationCap,
  Sparkles,
  Lock,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Resources tab: free video lessons (YouTube) + downloadable e-books / study packs.
 *
 * TO ADD A REAL DOWNLOAD OR PAYMENT LATER:
 *  - Put the file in /public (e.g. /public/essential-words-100.pdf) and set `href`.
 *  - For paid items, set `href` to your PayPal / checkout link.
 *  - Then change that item's `status` from "soon" to "ready".
 */
type Material = {
  icon: typeof BookOpen;
  title: string;
  desc: string;
  tag: "free" | "paid";
  status: "soon" | "ready";
  href?: string;
};

const materials: Material[] = [
  {
    icon: BookOpen,
    title: "Essential Korean Words 100",
    desc: "The 100 most useful everyday words to jump-start your vocabulary.",
    tag: "free",
    status: "soon",
  },
  {
    icon: Sparkles,
    title: "Essential Adjectives 100",
    desc: "100 core adjectives to describe anything naturally in Korean.",
    tag: "free",
    status: "soon",
  },
  {
    icon: FileText,
    title: "Hangul Starter Pack",
    desc: "Read and write Hangul from zero with clear charts and practice sheets.",
    tag: "free",
    status: "soon",
  },
  {
    icon: Plane,
    title: "Travel Korean Guide",
    desc: "Handy phrases for your trip to Korea — ordering, directions, and more.",
    tag: "free",
    status: "soon",
  },
  {
    icon: GraduationCap,
    title: "Level 1 Grammar Deep-Dive (PDF)",
    desc: "The detailed companion PDF to the free Level 1 video lessons.",
    tag: "paid",
    status: "soon",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">
            Free Resources &amp; E-books
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Learn On Your Own Time
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Free video lessons, downloadable study packs, and real-life expressions. Level 1 is always
            free — deeper materials are coming soon.
          </p>
        </div>

        {/* Video Lessons banner */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#3D5FE6] via-[#4D71FF] to-[#3D5FE6] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex items-start gap-5 flex-1 text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                  <Youtube size={32} />
                </div>
                <div className="space-y-2">
                  <div className="inline-block px-3 py-0.5 rounded-full bg-white/15 border border-white/25 text-blue-100 text-[10px] font-black uppercase tracking-widest">
                    Video Lessons · YouTube
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">Free Level 1 Lessons</h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-100/90 max-w-lg leading-relaxed">
                    All Level 1 video lessons are free on my YouTube channel. New lessons are posted
                    regularly — follow along and learn step by step.
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@wonbinssem"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto shrink-0"
              >
                <Button className="w-full md:w-auto h-12 px-8 rounded-full bg-white hover:bg-blue-50 text-[#4D71FF] font-black text-sm shadow-lg flex items-center gap-2">
                  Watch on YouTube
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Materials grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
              E-books &amp; Study Materials
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((m) => {
              const isReady = m.status === "ready" && m.href;
              const ButtonInner = isReady ? (
                <Button className="w-full h-11 rounded-xl text-sm font-black bg-foreground text-white hover:bg-primary transition-all flex items-center justify-center gap-2">
                  {m.tag === "paid" ? "Get it" : "Download"}
                  <ArrowRight size={14} />
                </Button>
              ) : (
                <Button
                  disabled
                  className="w-full h-11 rounded-xl text-sm font-black bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  <Clock size={14} /> Coming Soon
                </Button>
              );

              return (
                <div
                  key={m.title}
                  className="bg-[#FDFCF8] border border-gray-100 p-7 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <m.icon size={24} />
                    </div>
                    {m.tag === "free" ? (
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest">
                        Free
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                        <Lock size={10} /> Paid
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-black text-foreground mb-2 tracking-tight">{m.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6 flex-1">
                    {m.desc}
                  </p>
                  {isReady ? (
                    <a href={m.href} target="_blank" rel="noreferrer" className="block">
                      {ButtonInner}
                    </a>
                  ) : (
                    ButtonInner
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground font-medium mt-10">
            New free resources drop regularly. Follow on{" "}
            <a
              href="https://www.youtube.com/@wonbinssem"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-black hover:underline"
            >
              YouTube
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/wonbinssem/"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-black hover:underline"
            >
              Instagram
            </a>{" "}
            to get notified.
          </p>
        </div>
      </div>
    </section>
  );
}
