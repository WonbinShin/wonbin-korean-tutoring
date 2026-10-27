import { Star, Users, MessageCircle, Brain, MapPin, ArrowRight } from "lucide-react";

/* Soft highlight for key phrases inside quotes */
const Hl = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-foreground bg-[linear-gradient(transparent_58%,hsl(var(--secondary)/0.28)_0)]">
    {children}
  </span>
);

interface GReview {
  name: string;
  tag: string;
  quote: React.ReactNode;
}

const groupReviews: GReview[] = [
  {
    name: "Shei",
    tag: "Season 2 · October",
    quote: (
      <>
        I really enjoyed Wonbin Ssaem's class! He makes Korean easy to understand for foreign
        learners, <Hl>focusing on real conversations rather than just grammar.</Hl> He teaches
        useful slang, cultural tips, and how locals actually speak. <Hl>His examples make
        vocabulary easier to remember,</Hl> and his passion for teaching really shows. Highly
        recommended for anyone who wants to communicate naturally with locals in Korea!
      </>
    ),
  },
  {
    name: "Madi",
    tag: "Season 1 · September",
    quote: (
      <>
        <Hl>I don't think I've ever spent better money on education.</Hl> After each class I'm
        excited to tell my family what I learned. The classes feel comfortable, so <Hl>I'm not
        afraid to make mistakes</Hl> — and that makes me learn faster. Looking forward to more!
      </>
    ),
  },
  {
    name: "Sam",
    tag: "Season 1 · September",
    quote: (
      <>
        The session was helpful and fun! <Hl>The mnemonic techniques are super useful,</Hl> and I
        love the real-life examples plus the <Hl>cultural insights and fun facts.</Hl> You're a
        great, engaging teacher — I'm definitely in for the next season!
      </>
    ),
  },
  {
    name: "Kely",
    tag: "Season 1 · September",
    quote: (
      <>
        Wonbin keeps every lesson smooth and engaging with <Hl>practical, easygoing methods and
        real-life examples,</Hl> and adjusts the pace to each student. Above all, his <Hl>patience
        and encouragement</Hl> make you feel confident and stress-free. Learning actually becomes
        enjoyable!
      </>
    ),
  },
];

const features = [
  { icon: Users, title: "Real talk, not drills", desc: "You practice with classmates every week." },
  { icon: Brain, title: "Memory-hook method", desc: "Vocabulary that actually sticks." },
  { icon: MessageCircle, title: "KakaoTalk group", desc: "Questions & feedback between classes." },
];

export default function GroupLessonsSection() {
  return (
    <section id="group-classes" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em]">
            <Users size={14} /> Group Lessons
          </span>
          <h2 className="mt-5 text-4xl sm:text-6xl font-black text-foreground tracking-tighter leading-[0.95]">
            Learn Korean <span className="text-secondary italic">together.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            Small-group classes — online and offline — where you actually <b className="text-foreground">speak</b>.
            Real conversation over textbook drills, memory-hook vocabulary, and a private group chat between sessions.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["3 seasons run", "Online + offline", "Groups A & B monthly", "Season 3 enrolling"].map((s) => (
              <span key={s} className="text-xs font-bold text-primary bg-gray-50 border border-gray-100 rounded-full px-3.5 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex sm:flex-col items-start gap-4 sm:gap-3 bg-gray-50 rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <f.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-foreground text-[15px]">{f.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">What we've run</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black text-foreground tracking-tight">Three seasons &amp; counting</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* Season 1 */}
            <div className="rounded-3xl border border-gray-100 p-6 bg-white shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary bg-primary/5 rounded-full px-3 py-1.5">
                Sep · Season 1 · Groups A·B
              </span>
              <h4 className="mt-3 text-xl font-black text-foreground tracking-tight">Small-Talk Korean: The Building Blocks</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Self-introduction &amp; <span className="text-secondary font-semibold">이에요/예요</span>, numbers &amp; age,
                past·present·future tense formulas, and essential particles — the foundation for real sentences.
              </p>
            </div>

            {/* Season 2 */}
            <div className="rounded-3xl border border-gray-100 overflow-hidden bg-white shadow-sm">
              <img src="/group/online.jpg" alt="October online group class on Google Meet" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary bg-primary/5 rounded-full px-3 py-1.5">
                  Oct · Season 2 · Groups A·B
                </span>
                <h4 className="mt-3 text-xl font-black text-foreground tracking-tight">Real Korean Small-Talk: One Day in Korea</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Morning meet-up → lunch → cafe → evening. Each week follows the real flow of a Korean day, and you swap in your own life.
                </p>
              </div>
            </div>

            {/* Offline meetup */}
            <div className="sm:col-span-2 rounded-3xl border border-gray-100 overflow-hidden bg-white shadow-sm sm:grid sm:grid-cols-2">
              <div className="grid grid-cols-2 gap-[3px]">
                <img src="/group/offline.jpg" alt="Offline free-talking class in Seoul" className="w-full h-full aspect-square sm:aspect-auto object-cover" />
                <img src="/group/food.jpg" alt="Korean restaurant tour with students" className="w-full h-full aspect-square sm:aspect-auto object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-secondary bg-secondary/10 rounded-full px-3 py-1.5">
                  <MapPin size={12} /> Oct 18 · Offline meetup · Seoul
                </span>
                <h4 className="mt-3 text-xl font-black text-foreground tracking-tight">Free-talking + a 맛집 tour</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  An in-person session for upper-intermediate learners — a free-talking class at the whiteboard, then out for a
                  real Korean <span className="text-secondary font-semibold">칼국수</span> 맛집 tour together. Learning the language, then living it.
                </p>
              </div>
            </div>

            {/* Season 3 — live */}
            <div className="sm:col-span-2 rounded-3xl border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-white p-6 sm:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary bg-primary/10 rounded-full px-3 py-1.5">
                Nov · Season 3 · Now enrolling
              </span>
              <h4 className="mt-3 text-2xl font-black text-foreground tracking-tight">Tell Your Story: A Life in Korean 🍂</h4>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Talk about your whole life — childhood to the future you dream of — and keep real conversations going.
                A new <b className="text-foreground">Beginner class</b> (start from zero) opens this month too.
              </p>
              <a
                href="#classes"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold text-sm px-6 py-3.5 hover:bg-primary/90 transition-colors"
              >
                Join Season 3 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Group reviews */}
        <div className="mt-16">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">Group lesson reviews</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black text-foreground tracking-tight">What learners say</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {groupReviews.map((r) => (
              <figure key={r.name} className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-[15px] leading-tight">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{r.tag}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-[15px] text-foreground/80 leading-relaxed">{r.quote}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
