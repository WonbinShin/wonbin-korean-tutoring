import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Check,
  ShieldCheck,
  X,
  Download,
  Zap,
  Flame,
  Star,
  Layers,
  Sparkles,
  CalendarDays,
  ArrowRight,
  Lock,
  Clock,
  Briefcase,
  Users,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Product Types & Data ─── */

type ProductVariant = {
  id: string;
  title: string;
  price: string;
  paypalId: string | null;
  isSubscription?: boolean;
};

type Product = {
  id: string;
  title: string;
  description: string;
  priceDisplay: string;
  longDescription: string;
  features: string[];
  variants?: ProductVariant[];
  paypalId?: string | null;
  link?: string;
  isPremium: boolean;
  category: "service" | "resource";
  tag?: string;
  duration?: string;
};

const mainServices: Product[] = [
  {
    id: "the-daily",
    title: "The Daily: Korean Habit Membership",
    description: "Consistent daily exposure is the best entry point.",
    priceDisplay: "$9 / month",
    longDescription: "Build a natural Korean habit for less than the price of two coffees. You get practical content every day to improve your listening and vocabulary. You also join a supportive community where you can practice speaking in real-time.",
    features: [
      "10 essential Korean words every day",
      "Natural native sentences with voice recordings",
      "Exclusive Wonbin Lounge Discord community access",
      "Weekly live group conversation sessions"
    ],
    paypalId: "P-68P32646RX9471605NGJRAYI",
    isPremium: true,
    isSubscription: true,
    category: "service",
    tag: "Best Entry Point"
  } as any,
  {
    id: "the-group",
    title: "The Group: Small Class Intensive",
    description: "Speaking-focused program with high interaction.",
    priceDisplay: "$130 (Launch Special)",
    longDescription: "This class prioritizes active communication over textbook memorization. You practice real-life roleplays in a relaxed environment. I provide exclusive AI-generated visual aids to help you remember expressions forever.",
    features: [
      "4-week program (1x 60-min live session/week)",
      "Limited to 2 or 3 students per class",
      "Speaking-focused (no boring grammar)",
      "AI-generated visual mnemonic aids"
    ],
    paypalId: "YTB4VUSB3XTE6", // Placeholder for group, using Master Pack for now
    isPremium: true,
    category: "service",
    tag: "High Interaction",
    duration: "4 Weeks / 60 Min"
  },
  {
    id: "the-private",
    title: "The Private: 1:1 Premium Coaching",
    description: "Fully customized roadmap for your language journey.",
    priceDisplay: "From $35",
    longDescription: "I design every lesson based on your specific goals and interests. I provide custom AI mnemonic cards after every lesson to ensure you never forget what we learned. You receive in-depth feedback and progress tracking to reach your goals faster.",
    features: [
      "50-minute personalized coaching sessions",
      "Custom AI mnemonic cards after every lesson",
      "Detailed progress tracking & feedback",
      "Flexible scheduling & high-performance roadmap"
    ],
    variants: [
      { id: "single", title: "Single Session ($35 Launch)", price: "$35", paypalId: "Z564W438HLQWW" },
      { id: "bundle-5", title: "5-Session Bundle ($165)", price: "$165", paypalId: "EKHV4UWHBNH86" },
      { id: "master-pack", title: "Master Pack (10 Sessions - $300)", price: "$300", paypalId: "YTB4VUSB3XTE6" }
    ],
    isPremium: true,
    category: "service",
    tag: "Fully Customized",
    duration: "50 Min / Session"
  },
  {
    id: "the-free-trial",
    title: "The Free Trial: Intro Session",
    description: "Experience my teaching style before you commit.",
    priceDisplay: "FREE",
    longDescription: "Meet your tutor and discuss your learning goals. This is a short consultation to find the best program for you. No credit card is required for this session.",
    features: [
      "20-minute consultation",
      "Level testing & goal setting",
      "Personalized learning roadmap"
    ],
    isPremium: false,
    category: "service",
    link: "https://calendly.com/eorn6796/new-meeting",
    duration: "20 Min"
  }
];

const additionalResources: Product[] = [
  {
    id: "hangul-pack",
    title: "Hangul Starter Pack",
    description: "Visual mnemonic guide to master the alphabet.",
    priceDisplay: "FREE",
    longDescription: "A curated visual mnemonic guide to mastering the Korean alphabet. No boring repetition—just patterns that stick.",
    features: ["Mnemonic Visuals", "Stroke Order Guide", "Pronunciation Files"],
    isPremium: false,
    category: "resource",
    link: "https://docs.google.com/document/d/1AHNQlS1My8UFtCaezUbQ3oU3uqnoC422QoFRz-XjeIE/edit?usp=sharing"
  },
  {
    id: "travel-phrases",
    title: "Travel Survival Kit",
    description: "Speak like a local on your first trip.",
    priceDisplay: "FREE",
    longDescription: "100+ essential phrases for dining, shopping, and navigating Korea. Zero grammar, pure survival.",
    features: ["Map of Phrases", "Offline Access", "Ordering Tips"],
    isPremium: false,
    category: "resource",
    link: "https://drive.google.com/file/d/1YBYnN3qvKRD-SQmB3tU0lJZYaWX95RLi/view?usp=sharing"
  },
  {
    id: "daily-vocab",
    title: "Essential Daily Korean",
    description: "The top 500 words used in modern Seoul (Included with 1:1 Classes).",
    priceDisplay: "Free with 1:1 Class",
    longDescription: "Stop learning dictionary words. This guide covers the high-frequency vocabulary used in K-Dramas and real life. Provided complimentary to all 1:1 students.",
    features: ["500+ Word Cards", "AI-Generated Visuals", "Sample Sentences"],
    isPremium: false,
    category: "resource",
    link: "the-private"
  },
  {
    id: "topik-prep",
    title: "TOPIK Prep Bundle",
    description: "Complete study guide for TOPIK I & II (Included with 1:1 Classes).",
    priceDisplay: "Free with 1:1 Class",
    longDescription: "The most comprehensive guide to Korean proficiency exams, simplified for the modern learner. Provided complimentary to all 1:1 students.",
    features: ["Formula Cheat Sheets", "Practice Tests", "Common Mistakes"],
    isPremium: false,
    category: "resource",
    link: "the-private" // Special ID to trigger private class selection
  }
];

/* ─── Components ─── */

function PayPalButton({ hostedButtonId, isSubscription }: { hostedButtonId: string, isSubscription?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        if (isSubscription) {
          const ns = (window as any).paypalSubscription;
          if (ns?.Buttons) {
            ns.Buttons({
              style: { shape: "pill", color: "blue", layout: "vertical", label: "subscribe" },
              createSubscription: (_data: any, actions: any) =>
                actions.subscription.create({ plan_id: hostedButtonId }),
              onApprove: (data: any) => alert("Subscription successful! ID: " + data.subscriptionID),
              onError: (err: any) => console.error("PayPal Subscription Error:", err)
            }).render(containerRef.current);
          }
        } else {
          const ns = (window as any).paypal;
          if (ns?.HostedButtons) {
            ns.HostedButtons({ hostedButtonId }).render(containerRef.current);
          }
        }
      }
    };

    const intervalId = setInterval(() => {
      const target = isSubscription ? (window as any).paypalSubscription : (window as any).paypal;
      if (target) {
        clearInterval(intervalId);
        render();
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [hostedButtonId, isSubscription]);

  return <div ref={containerRef} className="min-h-[50px] w-full mt-6" />;
}

export default function CoursesSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  // Set default variant if product has them
  useEffect(() => {
    if (selectedProduct?.variants) {
      setSelectedVariant(selectedProduct.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [selectedProduct]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <section id="courses" className="py-32 relative min-h-screen bg-[#FDFCF8] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF608_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-black uppercase tracking-[0.3em] text-primary"
          >
            Tailored for You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-7xl font-black text-foreground tracking-tighter leading-[0.85]"
          >
            Select Your <br />
            <span className="text-primary italic">Learning Path.</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Professional tutoring services and beautiful study materials designed to make your Korean journey effortless.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {/* Main Services Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 px-8">
              <div className="h-px flex-1 bg-gray-100" />
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap">
                Tutoring & Subscriptions
              </h3>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mainServices.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative bg-white p-10 rounded-[3.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-500 cursor-pointer overflow-hidden gpu-accelerated"
                >
                  {product.tag && (
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest z-20">
                      {product.tag}
                    </div>
                  )}

                  <div className="space-y-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      {product.id === "the-daily" ? <Flame size={28} className="text-primary" /> :
                        product.id === "the-group" ? <Users size={28} className="text-primary" /> :
                          product.id === "the-private" ? <Crown size={28} className="text-primary" /> :
                            <Sparkles size={28} className="text-primary" />}
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <span className="text-xl font-black text-foreground">{product.priceDisplay}</span>
                      <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        View Details <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Resources Section */}
          <div id="resources" className="space-y-12">
            <div className="flex items-center gap-4 px-8">
              <div className="h-px flex-1 bg-gray-100" />
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap">
                Digital Resources (PDFs)
              </h3>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {additionalResources.map((resource, idx) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    if (resource.link === "the-private") {
                      const privateProduct = mainServices.find(s => s.id === "the-private");
                      if (privateProduct) setSelectedProduct(privateProduct);
                    } else {
                      setSelectedProduct(resource);
                    }
                  }}
                  className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer gpu-accelerated"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    {resource.isPremium ? <Lock size={20} className="text-gray-400 group-hover:text-primary transition-colors" /> : <Download size={20} className="text-primary" />}
                  </div>
                  <h4 className="font-black text-foreground text-sm leading-tight mb-2">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium mb-4 line-clamp-2">{resource.description}</p>
                  <span className="text-sm font-black text-primary">{resource.priceDisplay}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Policies Toggle */}
        <div className="mt-32 flex justify-center">
          <div className="inline-flex flex-col items-center gap-4 max-w-xl text-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold text-muted-foreground">
              <ShieldCheck size={16} className="text-primary" />
              Professional Service Level Agreement (SLA) Active
            </div>
            <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60 leading-relaxed">
              100% Refund with 24h Notice • Late Cancellation Rules Apply • Secure Node Payments
            </p>
          </div>
        </div>
      </div>

      {/* Progressive Disclosure Panel */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-white z-[101] shadow-2xl flex flex-col gpu-accelerated"
            >
              {/* Sticky Header with Close */}
              <div className="shrink-0 p-8 md:px-16 md:pt-16 pb-4 flex justify-end border-b border-gray-50 bg-white relative z-20 sticky top-0">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div
                className="flex-1 overflow-y-auto p-8 md:p-16 pt-8 space-y-12 overscroll-contain"
                style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin' }}
              >
                {/* Header Information */}
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center">
                    {selectedProduct.isPremium ? <Zap size={32} className="text-primary" /> : <Layers size={32} className="text-primary" />}
                  </div>
                  <h3 className="text-4xl font-black text-foreground tracking-tighter leading-none">{selectedProduct.title}</h3>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-3xl font-black text-primary">{selectedProduct.priceDisplay}</span>
                    <div className="h-4 w-px bg-gray-200" />
                    {selectedProduct.duration && (
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                        <Clock size={14} /> {selectedProduct.duration}
                      </div>
                    )}
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground px-2 py-1 rounded bg-gray-50 border border-gray-100">Status: Operational</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Overview</h4>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    {selectedProduct.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">What's Included</h4>
                  <div className="grid gap-4">
                    {selectedProduct.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 border border-gray-100">
                        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-bold text-foreground/80">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Refund Policy (for services) */}
                {selectedProduct.category === "service" && (
                  <div className="p-6 rounded-[2rem] bg-amber-50/50 border border-amber-100/50 space-y-3">
                    <div className="flex items-center gap-2 text-amber-700 text-xs font-black uppercase tracking-wider">
                      <ShieldCheck size={14} /> Refund & Cancellation Policy
                    </div>
                    <ul className="text-[11px] text-amber-800/70 font-bold space-y-1 ml-6 list-disc">
                      <li>100% refund if cancelled 24 hours prior</li>
                      <li>No refunds for cancellations within 24 hours</li>
                      <li>Monthly subscriptions can be terminated at any time</li>
                    </ul>
                  </div>
                )}

                {/* Action Area */}
                <div className="pt-8 space-y-6">
                  {/* Variant Selector for Private Lessons */}
                  {selectedProduct.variants && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary text-center">Select Your Tier</h4>
                      <div className="flex flex-col gap-2">
                        {selectedProduct.variants.map((v) => (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariant(v)}
                            className={`p-4 rounded-2xl border text-sm font-black transition-all text-left flex justify-between items-center ${selectedVariant?.id === v.id
                              ? 'bg-primary/5 border-primary text-primary shadow-sm'
                              : 'bg-white border-gray-100 text-foreground hover:bg-gray-50'
                              }`}
                          >
                            {v.title}
                            {selectedVariant?.id === v.id && <Check size={16} />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Payment / Link Button */}
                  {selectedProduct.isPremium ? (
                    <div className="space-y-6">
                      <PayPalButton
                        hostedButtonId={selectedVariant ? selectedVariant.paypalId! : selectedProduct.paypalId!}
                        isSubscription={(selectedProduct as any).isSubscription}
                      />
                      <p className="text-[10px] text-center font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Transaction Secured by PayPal Node Protocol
                      </p>
                    </div>
                  ) : (
                    <a href={selectedProduct.link} target="_blank" rel="noreferrer" className="block">
                      <Button className="w-full h-16 rounded-2xl bg-primary text-white text-lg font-black tracking-tight hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                        {selectedProduct.id === "the-free-trial" ? "Schedule Your Consultation" : "Secure Download Now"}
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </a>
                  )}

                  {selectedProduct.id === "the-group" || selectedProduct.id === "the-daily" || (selectedProduct.id === "the-private") ? (
                    <div className="pt-4 flex justify-center">
                      <a href="https://calendly.com/eorn6796/new-meeting" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]">
                        <CalendarDays size={14} /> Questions? Book Private Consultation
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
