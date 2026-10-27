import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Lock } from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe_ScaxP9AizeY7nVN9S7JvvttFdOFvOHdQ331LD_4yz_QV4Q/viewform";
const EMAIL = "wonbinssem@gmail.com";

type Week = { kr: string; en: string; tip: string };
type Review = { name: string; quote: string };

interface Cohort {
  id: string;
  month: string;
  theme: string;
  concept: string;
  status: "closed" | "open";
  photos: string[];
  weeks: Week[];
  reviews: Review[];
  note?: string;
}

const cohorts: Cohort[] = [
  {
    id: "sep",
    month: "September",
    theme: "The basics — intro to particles",
    concept: "Building the foundation for real sentences, step by step.",
    status: "closed",
    photos: ["sep1", "sep2", "sep3", "sep4", "sep5", "sep6"],
    weeks: [
      { kr: "저는 ○○이에요 / 예요", en: "Self-introduction & “to be”", tip: "씨 after a full name sounds rude — use 님 or just the first name." },
      { kr: "몇 년생이에요? · 만 나이", en: "Numbers & age", tip: "Say your birth year (구팔년생) instead of your age — it sounds native." },
      { kr: "했어요 · 해요 · 할 거예요", en: "Past, present & future tense", tip: "-고 있어요 adds “am ~ing” to any verb." },
      { kr: "은/는 · 이/가 · 을/를", en: "Essential particles", tip: "In casual speech, dropping the particle sounds more natural." },
    ],
    reviews: [
      { name: "Madi", quote: "I don't think I've ever spent better money on education — I'm not afraid to make mistakes." },
      { name: "Sam", quote: "The mnemonic techniques are super useful, with real-life examples and fun cultural facts." },
    ],
  },
  {
    id: "oct",
    month: "October",
    theme: "One day in Korea",
    concept: "Morning to evening, scene by scene — you fill each one with your own life.",
    status: "closed",
    photos: ["oct1", "oct2", "oct3", "oct4", "offline", "food"],
    weeks: [
      { kr: "잘 지냈어요? · -는데 / -서", en: "Morning meet-up", tip: "밥 먹었어요? usually just means “how are you?” — not about food." },
      { kr: "맵게 해 주세요 · -는 편이에요", en: "Lunch & ordering", tip: "맵게 / 덜 맵게 해 주세요 to adjust the spice." },
      { kr: "푹 빠졌어요 · -아/어 봤어요?", en: "Cafe & deeper talk", tip: "푹 빠졌어요 = “totally into” something these days." },
      { kr: "-(으)ㄹ까요? · -기로 했어요", en: "Evening plans & goodbye", tip: "담에 밥 한번 먹어요 is usually just a friendly goodbye." },
    ],
    reviews: [
      { name: "Shei", quote: "He focuses on real conversations rather than just grammar, and his examples make vocabulary easy to remember." },
    ],
    note: "We also met offline in Seoul — a free-talking session and a 칼국수 맛집 tour.",
  },
  {
    id: "nov",
    month: "November",
    theme: "Tell your story",
    concept: "Talk about your whole life — childhood to the future. A Beginner class opens too.",
    status: "open",
    photos: [],
    weeks: [
      { kr: "-대요 / -았대요 · 닮다", en: "Baby & childhood", tip: "-았대요 = “I heard…” — great for stories you don't remember." },
      { kr: "-곤 했어요 · 되고 싶었어요", en: "Teenage years", tip: "-곤 했어요 = “used to”." },
      { kr: "-아/어졌어요 · -(으)ㄴ 지 ~됐어요", en: "Right now", tip: "한국어 배운 지 1년 됐어요 = “it's been a year since…”." },
      { kr: "-았으면 좋겠어요", en: "The future you", tip: "-았으면 좋겠어요 = “I hope / I wish”." },
    ],
    reviews: [],
  },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function GroupLessonsSection() {
  const [open, setOpen] = useState<Cohort | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="group-classes" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div {...reveal} className="mb-8">
          <p className="text-xs font-black text-primary uppercase tracking-[0.22em]">Group Classes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            Monthly group seasons
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Small groups, live on Google Meet. New theme every month.
          </p>
        </motion.div>

        <div className="space-y-3">
          {cohorts.map((c) => (
            <motion.button
              key={c.id}
              {...reveal}
              onClick={() => setOpen(c)}
              className={`w-full text-left rounded-2xl border px-5 py-4 flex items-center gap-4 transition-all hover:shadow-sm ${
                c.status === "open"
                  ? "border-primary/40 bg-primary/[0.03]"
                  : "border-gray-200 hover:border-primary/30"
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground">
                    {c.month}
                  </span>
                  {c.status === "closed" ? (
                    <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">
                      <Lock size={9} /> Closed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-white bg-primary rounded-full px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Enrolling
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-lg font-black text-foreground tracking-tight">
                  {c.month} Group Class
                </h3>
                <p className="text-sm text-muted-foreground truncate">{c.theme}</p>
              </div>
              <ArrowRight size={18} className="text-primary shrink-0" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-[560px] max-h-[86vh] bg-white rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
            >
              <div className="shrink-0 px-6 pt-6 pb-4 flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{open.month}</p>
                  <h3 className="text-xl font-black text-foreground tracking-tight">{open.month} Group Class</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{open.concept}</p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground hover:bg-gray-200 transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6" data-lenis-prevent="true">
                {/* Weeks */}
                <div className="divide-y divide-gray-100 border-y border-gray-100">
                  {open.weeks.map((w, i) => (
                    <div key={i} className="py-3.5 flex gap-4">
                      <span className="text-sm font-black text-primary/40 w-7 shrink-0">0{i + 1}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground">{w.en}</p>
                        <p className="text-[15px] text-primary font-semibold mt-0.5 leading-snug">{w.kr}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-snug">💡 {w.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photos */}
                {open.photos.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    {open.photos.map((p) => (
                      <img
                        key={p}
                        src={`/group/${p}.jpg`}
                        alt=""
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover rounded-xl"
                      />
                    ))}
                  </div>
                )}
                {open.note && (
                  <p className="text-xs text-muted-foreground mt-3">{open.note}</p>
                )}

                {/* Reviews */}
                {open.reviews.map((r, i) => (
                  <figure key={i} className="mt-4 rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">“{r.quote}”</p>
                    <figcaption className="text-xs font-bold text-foreground mt-2">— {r.name}</figcaption>
                  </figure>
                ))}

                {/* CTA */}
                {open.status === "open" && (
                  <div className="mt-6">
                    <a href={FORM_URL} target="_blank" rel="noreferrer">
                      <button className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                        Apply <ArrowRight size={16} />
                      </button>
                    </a>
                    <p className="text-center text-xs text-muted-foreground mt-2">
                      With a friend it's cheaper —{" "}
                      <a href={`mailto:${EMAIL}`} className="text-primary font-bold hover:underline">
                        email me
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
