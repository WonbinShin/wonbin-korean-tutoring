import { useState } from "react";
import { Sparkles, MessageCircle, Zap } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const usefulKoreanCards = [
  {
    id: 1,
    term: "혹시 (Hok-si)",
    literal: "By any chance",
    meaning: "The Magic Word",
    context: "The ultimate politeness booster. Korean speakers use this before almost every question to sound soft and natural.",
    example: "혹시 커피 있어요? (Do you have coffee?)",
    color: "bg-primary/10",
  },
  {
    id: 2,
    term: "잠시만요 (Jam-si-man-yo)",
    literal: "Just a moment",
    meaning: "Excuse me",
    context: "Essential for navigating crowds or asking someone to wait. Your go-to 'Excuse me'.",
    example: "잠시만요, 지나갈게요. (Excuse me, let me pass.)",
    color: "bg-secondary/10",
  },
  {
    id: 3,
    term: "맛집 (Mat-jip)",
    literal: "Flavor House",
    meaning: "Must-visit Restaurant",
    context: "Use this to describe a place with legendary food. A core part of Korean food culture.",
    example: "여기 진짜 맛집이에요! (This place is a real Mat-jip!)",
    color: "bg-primary/10",
  },
  {
    id: 4,
    term: "꿀맛 (Ggul-mat)",
    literal: "Honey Taste",
    meaning: "Super Delicious",
    context: "When something is so good it's like honey. More natural and modern than textbook terms.",
    example: "우와, 진짜 꿀맛이다! (Wow, it's really delicious!)",
    color: "bg-secondary/10",
  },
  {
    id: 5,
    term: "강추 (Gang-chu)",
    literal: "Strong Recommend",
    meaning: "Highly Recommended",
    context: "Short for 'Strongly Recommend'. Use it for your favorite movies, places, or food.",
    example: "이 영화 진짜 강추해요! (I highly recommend this movie!)",
    color: "bg-primary/10",
  },
  {
    id: 6,
    term: "인생__ (In-saeng...)",
    literal: "Life-level",
    meaning: "Life-changing",
    context: "Add this before any noun (인생커피, 인생영화) to mean it's the best you've had in your life.",
    example: "제 인생영화예요. (It's the movie of my life.)",
    color: "bg-secondary/10",
  },
  {
    id: 7,
    term: "소맥 (So-maek)",
    literal: "Soju + Maekju",
    meaning: "Soju-Beer Mix",
    context: "The ultimate Korean social drink. Knowing this word shows you understand 'Hwesik' culture.",
    example: "우리 소맥 한잔 할까요? (Shall we have a glass of Somaek?)",
    color: "bg-primary/10",
  },
  {
    id: 8,
    term: "노잼 (No-jaem)",
    literal: "No Fun",
    meaning: "Boring / Not Funny",
    context: "Use this when a joke falls flat or a movie is dull. Short, punchy, and very common.",
    example: "이거 진짜 노잼이다... (This is really not funny...)",
    color: "bg-secondary/10",
  }
];

export default function UsefulKoreanSection() {
  const [cards, setCards] = useState(usefulKoreanCards);
  const [direction, setDirection] = useState(0); // 1 for right (next), -1 for left (prev)

  const handleSwipe = (swipeDirection: number) => {
    setDirection(swipeDirection);
    setCards((prev) => {
      const newCards = [...prev];
      if (swipeDirection > 0) {
        // Next: Move top card to bottom
        const movedCard = newCards.shift();
        if (movedCard) newCards.push(movedCard);
      } else {
        // Previous: Move bottom card to top
        const movedCard = newCards.pop();
        if (movedCard) newCards.unshift(movedCard);
      }
      return newCards;
    });
  };

  const handleDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      handleSwipe(1); // Right swipe -> Next
    } else if (info.offset.x < -100) {
      handleSwipe(-1); // Left swipe -> Previous
    }
  };

  return (
    <section id="useful-korean" className="py-32 relative overflow-hidden bg-white">
      {/* Background kinetic element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#8B5CF603_1px,transparent_1px)] [background-size:40px_40px] opacity-100" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Sparkles size={14} className="animate-pulse" />
            Linguistic Artifacts
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-black text-foreground tracking-tighter leading-[0.85]">
            Speak Like a <br />
            <span className="text-primary italic">Native Local.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed">
            Swipe through practical Korean expressions that define modern daily life. Real context. Real energy.
          </p>
        </div>

        {/* Stacked Swipe Deck Interface */}
        <div className="relative h-[600px] max-w-sm mx-auto perspective-1000 mt-10">
          <AnimatePresence mode="popLayout" custom={direction}>
            {cards.slice(0, 3).reverse().map((card, index) => {
              const totalVisible = 3;
              const displayIndex = (totalVisible - 1) - index; // 0 for top, 1 for second, 2 for third
              const isTop = displayIndex === 0;

              return (
                <motion.div
                  key={card.id}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  style={{
                    zIndex: cards.length - displayIndex,
                    cursor: isTop ? "grab" : "default"
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1 - displayIndex * 0.05,
                    opacity: 1 - displayIndex * 0.15,
                    y: displayIndex * 25,
                    x: displayIndex === 0 ? 0 : (displayIndex === 1 ? 15 : -15),
                    rotate: displayIndex === 0 ? 0 : (displayIndex === 1 ? -6 : 6),
                  }}
                  exit={{
                    x: direction > 0 ? 500 : -500,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.4 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`absolute inset-0 bg-white rounded-[3.5rem] p-10 border border-gray-100 shadow-2xl flex flex-col justify-between overflow-hidden group gpu-accelerated
                    ${isTop ? "active:cursor-grabbing" : "pointer-events-none"}`}
                >
                  {/* Internal Decorative Glass */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                  <div className="relative space-y-8">
                    <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center`}>
                      <MessageCircle size={32} className="text-primary" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-5xl font-black text-foreground tracking-tighter font-korean">{card.term}</h3>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Literal: {card.literal}</p>
                        <p className="text-2xl font-black text-primary">"{card.meaning}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <Zap size={18} fill="currentColor" />
                      </div>
                      <p className="text-base text-muted-foreground font-medium leading-tight pt-1">
                        {card.context}
                      </p>
                    </div>

                    {/* Practical Example Box */}
                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Practice Example:</p>
                      <p className="text-sm font-black text-foreground font-korean italic leading-snug">
                        {card.example}
                      </p>
                    </div>
                  </div>

                  {isTop && (
                    <motion.div
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-8 right-10 text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground"
                    >
                      ← Prev | Next →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
