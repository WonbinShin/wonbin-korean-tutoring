import React from "react";
import { Coffee, MessagesSquare, MessageCircle, FolderCheck, BookOpenCheck, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Coffee,
    title: "1. Daily Warm-Up",
    description: "We start every lesson with friendly casual chatter and a quick review of your previous notes so your brain gets ready."
  },
  {
    icon: MessagesSquare,
    title: "2. Role-Play Practice",
    description: "You practice real conversations for everyday situations—ordering food, asking directions, making Korean friends—from day one."
  },
  {
    icon: MessageCircle,
    title: "3. KakaoTalk Chat",
    description: "You join our private chat for daily useful phrases, homework feedback, and quick help whenever you have questions."
  },
  {
    icon: FolderCheck,
    title: "4. Google Drive Hub",
    description: "You get 24/7 personal access to organized class notes and easy study materials anytime you need them."
  },
  {
    icon: BookOpenCheck,
    title: "5. Custom Vocabulary Sheets",
    description: "You get fun, visual word lists and memory tips to help you learn tricky new words quickly and easily."
  },
  {
    icon: Target,
    title: "6. 100% Personal Roadmap",
    description: "We build every lesson around your goals, so you skip boring textbook stuff and learn Korean you will actually use!"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">
            How My Classes Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Easy Steps to Learn Korean
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            No boring lectures. Here is how we make learning simple and fun.
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
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
