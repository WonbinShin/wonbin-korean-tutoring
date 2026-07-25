import React from "react";
import { Coffee, MessagesSquare, MessageCircle, HardDrive, LayoutTemplate, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Coffee,
    title: "1. Daily Warm-Up",
    description: "We start every session with casual catch-up chatter and a quick review of your previous lesson notes to warm up your brain."
  },
  {
    icon: MessagesSquare,
    title: "2. Role-Play Learning",
    description: "You practice real, natural conversations for everyday situations—ordering food, asking directions, making Korean friends—from day one."
  },
  {
    icon: MessageCircle,
    title: "3. KakaoTalk Community",
    description: "You join our private chat for daily native phrases, quick voice feedback on your homework, and instant Q&A whenever you get stuck."
  },
  {
    icon: HardDrive,
    title: "4. Google Drive Hub",
    description: "You get 24/7 personal access to organized class notes, custom worksheets, and full HD video recordings of every single session."
  },
  {
    icon: LayoutTemplate,
    title: "5. Custom Study Decks",
    description: "You receive original visual mnemonic cheatsheets and pre-made Anki flashcards to effortlessly memorize tricky words forever."
  },
  {
    icon: Target,
    title: "6. 100% Customized Roadmap",
    description: "We tailor every single session to your exact goals, interests, and reasons for learning—so you skip textbook fluff and master real Korean you'll actually use!"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">
            How My Classes Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight [text-wrap:balance] break-keep">
            Designed for Real Spoken Fluency
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed [text-wrap:balance] break-keep">
            No dry grammar lectures or outdated textbook sentences. Here is how we make learning fast, natural, and addictively fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#FDFCF8] border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-105 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed [text-wrap:balance] break-keep">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
