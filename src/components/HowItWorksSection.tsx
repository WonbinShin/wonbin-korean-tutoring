import React from "react";
import { Coffee, MessagesSquare, MessageCircle, HardDrive, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Coffee,
    title: "Daily Warm-Up",
    description: "We start every session by talking about your day and reviewing previous notes."
  },
  {
    icon: MessagesSquare,
    title: "Role-Play Learning",
    description: "You practice real conversations for everyday situations from day one."
  },
  {
    icon: MessageCircle,
    title: "KakaoTalk Community",
    description: "You join a private chat for daily useful phrases, homework checks, and Q and A."
  },
  {
    icon: HardDrive,
    title: "Google Drive Hub",
    description: "You get full access to organized lesson notes and session recordings."
  },
  {
    icon: LayoutTemplate,
    title: "Custom Study Decks",
    description: "You receive original visual study sheets and Anki flashcard sets."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            How My Classes Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Designed for Real Fluency
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
