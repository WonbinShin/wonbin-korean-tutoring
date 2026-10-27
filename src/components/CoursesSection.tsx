import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Mail, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PAYPAL = "https://www.paypal.com/ncp/payment/Z564W438HLQWW";
const EMAIL = "wonbinssem@gmail.com";

const included = [
  "Fully tailored to you — any level",
  "Memory-hook method that sticks",
  "Notes in Google Drive after class",
  "KakaoTalk support between lessons",
  "Free Level 1–5 workbooks",
];

const canCover = [
  "Everyday conversation",
  "Grammar made simple",
  "TOPIK & exam prep",
  "Travel Korean",
  "Kids & teens",
  "Korean for work",
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function CoursesSection() {
  const [showCover, setShowCover] = useState(false);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div {...reveal} className="mb-8">
          <p className="text-xs font-black text-primary uppercase tracking-[0.22em]">Classes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            1:1 Private Lessons
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground">One-on-one, tailored to any level or goal.</p>
        </motion.div>

        {/* Price card */}
        <motion.div {...reveal} className="rounded-3xl border border-gray-200 shadow-card p-7 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl text-gray-400 line-through">$159.99</span>
                <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight">$119.99</span>
              </div>
              <p className="text-sm font-bold text-muted-foreground mt-1.5">4 weeks · 1 lesson a week · 50 min</p>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            {included.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <Check size={15} className="text-primary shrink-0" />
                <span className="text-sm text-foreground/80">{f}</span>
              </div>
            ))}
          </div>

          <a href={PAYPAL} target="_blank" rel="noreferrer" className="mt-7 block">
            <Button className="w-full h-14 rounded-2xl text-base font-black bg-foreground text-white hover:bg-primary transition-colors flex items-center justify-center gap-2">
              Book a lesson <ArrowRight size={17} />
            </Button>
          </a>

          <button
            onClick={() => setShowCover((v) => !v)}
            className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            What we cover
            <ChevronDown size={14} className={`transition-transform ${showCover ? "rotate-180" : ""}`} />
          </button>
          {showCover && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-4 justify-center">
                {canCover.map((c) => (
                  <span key={c} className="text-xs font-semibold text-foreground bg-gray-100 rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trial + friend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <a
            href={`mailto:${EMAIL}?subject=Free%2025-min%20trial`}
            className="rounded-2xl border border-gray-200 p-5 hover:border-primary/40 transition-colors flex items-center gap-3"
          >
            <Mail size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-sm font-black text-foreground">Free 25-min trial</p>
              <p className="text-xs text-muted-foreground">Email to book</p>
            </div>
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Learning%20with%20a%20friend`}
            className="rounded-2xl border border-gray-200 p-5 hover:border-primary/40 transition-colors flex items-center gap-3"
          >
            <Users2 size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-sm font-black text-foreground">With a friend?</p>
              <p className="text-xs text-muted-foreground">Cheaper — email me</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
