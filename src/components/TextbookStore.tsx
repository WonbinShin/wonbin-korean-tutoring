import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Level Textbook store.
 * Buy buttons open PayPal checkout (PayPal "no-code" payment links).
 * Swap these two URLs if the PayPal item IDs ever change.
 */
const SINGLE_URL = "https://www.paypal.com/ncp/payment/DNGBW8JXNGL4Q"; // $3.99 — pick level at checkout
const BUNDLE_URL = "https://www.paypal.com/ncp/payment/6LLDL6FSQ47UG"; // $14.99 — all 5 levels

const LEVELS = [
  { n: 1, name: "Survival", band: "Beginner", img: "/learn-level1.png",
    cando: "Introduce yourself, ask prices, and handle day-one situations." },
  { n: 2, name: "Daily Life", band: "Elementary", img: "/learn-level2.png",
    cando: "Numbers, time & dates, counting, reasons, and simple plans." },
  { n: 3, name: "Connecting", band: "Pre-Intermediate", img: "/learn-level3.png",
    cando: "Link ideas and start speaking in longer, natural sentences." },
  { n: 4, name: "Natural", band: "Intermediate", img: "/learn-level4.png",
    cando: "Sound native — report speech and add the endings that make it real." },
  { n: 5, name: "Fluency", band: "Upper-Intermediate", img: "/learn-level5.png",
    cando: "Nuance, hindsight, and advanced grammar for real fluency." },
];

const INSIDE = [
  { icon: BookOpen, title: "Real-life examples", desc: "10+ per lesson — the way Koreans actually say it, never textbook filler." },
  { icon: AlertTriangle, title: "Mistakes caught early", desc: "A clear rule plus a “Watch out” box on the traps learners really fall into." },
  { icon: HelpCircle, title: "A quiz every lesson", desc: "Check what stuck — answers stay hidden at the bottom until you look." },
  { icon: MessageSquare, title: "Real-life dialogues", desc: "Every level ends with real conversations that use all its grammar." },
];

export default function TextbookStore() {
  const [active, setActive] = useState(0);
  const lv = LEVELS[active];

  return (
    <section id="textbooks" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">Level Textbooks</p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Learn the Korean People Actually Speak
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Real, high-frequency Korean from daily life in Korea — not textbook lines, and <b>not AI-generated</b>.
            Flip through the levels to see exactly what's inside.
          </p>
        </div>

        {/* Hero image + stats */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="bg-[#FDFCF8] border border-gray-100 rounded-[2.5rem] p-8 sm:p-10">
            <img src="/textbook-bundle-3d.png" alt="wonbinssem Level 1–5 textbooks"
              className="w-full max-w-3xl mx-auto" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                ["770+", "example sentences"],
                ["79", "grammar lessons"],
                ["100+", "mistake warnings"],
                ["Every", "lesson has a quiz"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary leading-none">{n}</div>
                  <div className="text-xs text-muted-foreground font-bold mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's inside */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
          {INSIDE.map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-[1.75rem] p-6 hover:shadow-card hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <f.icon size={22} />
              </div>
              <h4 className="text-base font-black text-foreground mb-1.5">{f.title}</h4>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Level switcher */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {LEVELS.map((l, i) => (
              <button
                key={l.n}
                onClick={() => setActive(i)}
                className={
                  "px-5 py-2.5 rounded-full text-sm font-black transition-all " +
                  (i === active
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-50 text-foreground hover:bg-gray-100 border border-gray-100")
                }
              >
                Level {l.n}
              </button>
            ))}
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-foreground">
              Level {lv.n} · {lv.name}
              <span className="ml-2 align-middle text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                {lv.band}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground font-medium mt-2 max-w-lg mx-auto">{lv.cando}</p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-card max-w-2xl mx-auto">
            <img src={lv.img} alt={`Level ${lv.n} contents`} className="w-full block" />
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Single */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-black text-foreground">Single Level</h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">Any one level (1–5)</p>
            <div className="text-4xl font-black text-foreground mt-4">$3.99</div>
            <ul className="text-left text-sm font-medium text-foreground/80 my-6 space-y-2">
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> One full level workbook (PDF)</li>
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Examples, rules, quizzes & dialogues</li>
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> Instant download after checkout</li>
            </ul>
            <a href={SINGLE_URL} target="_blank" rel="noreferrer" className="mt-auto block">
              <Button className="w-full h-12 rounded-xl text-sm font-black bg-foreground text-white hover:bg-primary transition-all flex items-center justify-center gap-2">
                Buy a Level — $3.99 <ArrowRight size={16} />
              </Button>
            </a>
            <p className="text-[11px] text-muted-foreground font-medium mt-2">Pick your level at checkout</p>
          </div>

          {/* Bundle */}
          <div className="bg-white border-2 border-primary/40 rounded-[2.5rem] p-8 flex flex-col text-center relative shadow-card">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-md">
              Best value
            </div>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 mt-2">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-black text-foreground">Complete Bundle · Levels 1–5</h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">Beginner → Fluency</p>
            <div className="mt-4">
              <span className="text-base text-muted-foreground line-through mr-2">$19.95</span>
              <span className="text-4xl font-black text-foreground">$14.99</span>
            </div>
            <ul className="text-left text-sm font-medium text-foreground/80 my-6 space-y-2">
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> All 5 level workbooks (PDF)</li>
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> 770+ examples · 79 lessons</li>
              <li className="flex gap-2"><Check size={16} className="text-primary shrink-0 mt-0.5" /> 100+ mistake tips · quizzes · dialogues</li>
            </ul>
            <a href={BUNDLE_URL} target="_blank" rel="noreferrer" className="mt-auto block">
              <Button className="w-full h-12 rounded-xl text-sm font-black bg-primary text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                Get all 5 — $14.99 <ArrowRight size={16} />
              </Button>
            </a>
            <p className="text-[11px] text-muted-foreground font-medium mt-2">Save $5 vs. buying separately</p>
          </div>
        </div>

        {/* Free with class */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 flex items-center justify-center gap-3 text-center">
            <Gift size={20} className="text-primary shrink-0" />
            <p className="text-sm font-bold text-foreground">
              Taking a class? Your level's workbook is <span className="text-primary">free</span> — just book a lesson.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground font-medium mt-8">
          Instant PDF delivery after purchase · works on phone, tablet &amp; desktop · secure checkout with PayPal
        </p>
      </div>
    </section>
  );
}
