import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
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
  link?: string;
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
    description: "Apply together as a custom group of 2-4 friends or colleagues.",
    priceDisplay: "$80 / person (4 Sessions)",
    longDescription: "Create a custom group with 2–4 friends or colleagues of similar proficiency levels. Enjoy a 4-week speaking-focused program where everyone gets high interaction at a highly affordable rate of $80 per person.",
    features: [
      "4-week program (4x 60-min live sessions)",
      "Apply together with 2–4 partners",
      "Highly affordable ($80 USD per person)",
      "Must be of similar Korean proficiency levels"
    ],
    isPremium: true,
    category: "service",
    tag: "Custom Groups",
    duration: "4 Weeks / 4 Sessions"
  },
  {
    id: "the-private",
    title: "The Private: 1:1 Premium Coaching",
    description: "Fully customized roadmap for your language journey.",
    priceDisplay: "From $35",
    longDescription: "I design every lesson based on your specific goals and interests. I provide custom visual mnemonics, fun memory tricks, and tailored study tips for hard-to-remember words to ensure you remember expressions forever. You receive in-depth feedback and progress tracking to reach your goals faster.",
    features: [
      "50-minute personalized coaching sessions",
      "Tailored mnemonic visuals & memory tricks",
      "Detailed progress tracking & feedback",
      "Flexible scheduling & high-performance roadmap"
    ],
    variants: [
      { id: "single", title: "Single Session", price: "$35", paypalId: null, link: "https://calendly.com/wonbinssem/new-meeting" },
      { id: "bundle-5", title: "5-Session Bundle", price: "$165", paypalId: "EKHV4UWHBNH86" },
      { id: "bundle-10", title: "10-Session Bundle", price: "$300", paypalId: "YTB4VUSB3XTE6" }
    ],
    isPremium: true,
    category: "service",
    tag: "Fully Customized",
    duration: "50 Min / Session"
  },
  {
    id: "the-free-trial",
    title: "The Intro: 25-Min Session",
    description: "Experience my teaching style at exactly 50% of the regular rate.",
    priceDisplay: "$17.50 USD\n(FREE if you enroll)",
    longDescription: "Meet your tutor, evaluate your current proficiency, and discuss your learning goals. This 25-minute session provides an in-depth consultation.\n\n🎁 Risk-Free Refund Offer:\nThe $17.50 fee is fully refundable if you decide to enroll in a 1:1 Private Lesson after the trial. Essentially, your trial becomes completely FREE when you continue your journey!",
    features: [
      "25-minute introductory consultation",
      "Current proficiency & goal evaluation",
      "Trial fee fully refunded upon enrollment"
    ],
    isPremium: false,
    category: "service",
    link: "https://calendly.com/wonbinssem/30min",
    duration: "25 Min"
  }
];

const additionalResources: Product[] = [
  {
    id: "hangul-pack",
    title: "Learn Hangul in 1 Hour",
    description: "Master reading Korean in just 1 hour—it's like magic.",
    priceDisplay: "FREE",
    longDescription: "Unlock the magic of reading any Korean word in just one hour. No boring repetition—just an intuitive and engaging guide that makes learning Hangul effortless and fun.",
    features: ["Mnemonic Visuals", "Stroke Order Guide", "Pronunciation Files"],
    isPremium: false,
    category: "resource",
    link: "https://drive.google.com/file/d/1ICE_KjQtH5z8HXt1Yi33IPlzuW_h7UK9/view?usp=sharing"
  },
  {
    id: "travel-phrases",
    title: "Zero Grammar Fast-Track Korean",
    description: "Fast-track your travel Korean without learning any grammar.",
    priceDisplay: "FREE",
    longDescription: "The ultimate crash course for your Korea trip. Learn essential phrases to survive and thrive without studying a single grammar rule.",
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
    features: ["500+ Word Cards", "Visual Mnemonic Cards", "Sample Sentences"],
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
  const lenis = useLenis();

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
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [selectedProduct, lenis]);

  return (
    <section id="courses" className="py-32 relative min-h-screen bg-[#FDFCF8] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF608_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-[0.3em] text-primary"
          >
            Tailored for You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-black text-foreground tracking-tight leading-none pb-4"
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
                      <span className="text-xl font-black text-foreground whitespace-pre-wrap">{product.priceDisplay}</span>
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ outline: 'none' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[700px] max-h-[90vh] bg-white rounded-[2rem] shadow-2xl z-10 flex flex-col overflow-hidden gpu-accelerated"
            >
              {/* Sticky Header with Close */}
              <div className="shrink-0 p-6 flex justify-between items-center border-b border-gray-100 bg-white z-20">
                <span className="font-black text-lg text-foreground px-2">Program Details</span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div 
                className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10 pt-6 space-y-12 force-scrollbar bg-white"
                data-lenis-prevent="true"
                style={{ overscrollBehavior: 'none' }}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {/* Header Information */}
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center">
                    {selectedProduct.isPremium ? <Zap size={32} className="text-primary" /> : <Layers size={32} className="text-primary" />}
                  </div>
                  <h3 className="text-4xl font-black text-foreground tracking-tight leading-none">{selectedProduct.title}</h3>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-3xl font-black text-primary whitespace-pre-wrap leading-tight">{selectedProduct.priceDisplay}</span>
                    <div className="h-4 w-px bg-gray-200" />
                    {selectedProduct.duration && (
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                        <Clock size={14} /> {selectedProduct.duration}
                      </div>
                    )}
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground px-2 py-1 rounded bg-gray-50 border border-gray-100">Status: Operational</span>
                  </div>
                </div>

                {selectedProduct.id === "the-group" ? (
                  <div className="space-y-8 pb-8">
                    {/* How to Join */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">How to Join</h4>
                      <div className="grid gap-4">
                        {[
                          "Form a custom group of 2–4 friends, classmates, or colleagues.",
                          "Ensure all group members share a similar level of Korean proficiency.",
                          "Send a group inquiry using the button below to check available class schedule options.",
                          "I will reply to your group email with class timing options and setup details."
                        ].map((text, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-5 rounded-3xl bg-gray-50 border border-gray-100">
                            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm shrink-0">
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-sm font-bold text-foreground/80 leading-relaxed pt-1.5">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="p-6 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 space-y-3">
                      <div className="flex items-center gap-2 text-indigo-700 text-xs font-black uppercase tracking-wider">
                        <Sparkles size={14} /> Custom Group Notice
                      </div>
                      <p className="text-sm text-indigo-800/80 font-bold leading-relaxed">
                        Since this program is exclusively for self-formed groups (2–4 people) of similar level, you skip any waiting queues! Gather your study partners, apply together, and start your custom sessions right away.
                      </p>
                    </div>

                    {/* Action Area */}
                    <div className="pt-4 space-y-6">
                      <a href="mailto:wonbinssem@gmail.com" className="block">
                        <Button className="w-full h-16 rounded-2xl bg-primary text-white text-lg font-black tracking-tight hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                          Send an Inquiry
                          <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Description */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Overview</h4>
                      <p className="text-lg text-foreground font-medium leading-relaxed whitespace-pre-wrap">
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

                    {/* Booking Process Note (for intro session) */}
                    {selectedProduct.id === "the-free-trial" && (
                      <div className="p-6 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 space-y-3">
                        <div className="flex items-center gap-2 text-indigo-700 text-xs font-black uppercase tracking-wider">
                          <Sparkles size={14} /> Claiming Your Refund
                        </div>
                        <p className="text-sm text-indigo-800/80 font-bold leading-relaxed">
                          After your initial trial, I will send you a private booking link via email. If you use that link to enroll in a 1:1 Private Lesson, your $17.50 intro fee will be fully refunded—making this session <strong className="text-indigo-900 border-b border-indigo-200">100% FREE</strong>! Please ensure you provide a correct and active email address.
                        </p>
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
                                <div>
                                  <span className="block">{v.title}</span>
                                  {v.id !== 'single' && <span className="block text-xs font-normal opacity-60 mt-0.5">{v.price}</span>}
                                  {v.id === 'single' && <span className="block text-xs font-normal opacity-60 mt-0.5">{v.price} &nbsp;•&nbsp; Schedule Immediately</span>}
                                </div>
                                {selectedVariant?.id === v.id && <Check size={16} />}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bundle Policy (for private bundles) */}
                      {selectedProduct.id === "the-private" && selectedVariant && (selectedVariant.id === "bundle-5" || selectedVariant.id === "bundle-10") && (
                        <div className="p-6 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 space-y-3">
                          <div className="flex items-center gap-2 text-indigo-700 text-xs font-black uppercase tracking-wider">
                            <ShieldCheck size={14} /> Important Policies
                          </div>
                          <ul className="text-[11px] text-indigo-800/70 font-bold space-y-1 ml-6 list-disc">
                            <li>All {selectedVariant.id === "bundle-5" ? "5" : "10"} sessions remain valid for {selectedVariant.id === "bundle-5" ? "3" : "6"} months.</li>
                            <li>I will send your private booking link to your email within 24 hours.</li>
                            <li>Each session you book will be deducted from your total balance.</li>
                            <li>Bundle packages are non-refundable.</li>
                          </ul>
                        </div>
                      )}

                      {/* Payment / Link Button */}
                      {selectedProduct.isPremium && (!selectedVariant || selectedVariant.paypalId) ? (
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
                        <a href={selectedVariant?.link || selectedProduct.link} target="_blank" rel="noreferrer" className="block">
                          <Button className="w-full h-16 rounded-2xl bg-primary text-white text-lg font-black tracking-tight hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                            {selectedVariant?.link ? "Schedule Your Session" : selectedProduct.id === "the-free-trial" ? "Schedule Your Consultation" : "Secure Download Now"}
                            <ArrowRight className="ml-2" size={20} />
                          </Button>
                        </a>
                      )}

                      {selectedProduct.id === "the-daily" || selectedProduct.id === "the-private" ? (
                        <div className="pt-4 flex justify-center pb-8">
                          <a href="https://calendly.com/wonbinssem/30min" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]">
                            <CalendarDays size={14} /> Questions? Book Private Consultation
                          </a>
                        </div>
                      ) : <div className="pb-8"/>}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
