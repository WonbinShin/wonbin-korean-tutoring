import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const legalSections = [
    {
        id: "terms",
        title: "Terms of Service",
        icon: Scale,
        content: [
            {
                subtitle: "1. Professional Engagement",
                text: "By booking a session or purchasing a product, you agree to a professional educational engagement. All sessions are conducted in English and Korean, tailored to your specific proficiency level."
            },
            {
                subtitle: "2. Booking & Attendance",
                text: "Sessions are booked via Calendly. Please arrive on time. If you are more than 15 minutes late without prior notice, the session may be considered a 'No-Show' and will not be eligible for a refund."
            },
            {
                subtitle: "3. Intellectual Property",
                text: "All course materials, including custom-designed mnemonics, PDFs, and recordings, are the intellectual property of Wonbin Ssem. These are for your personal use only and may not be redistributed or resold."
            }
        ]
    },
    {
        id: "privacy",
        title: "Privacy Policy",
        icon: ShieldCheck,
        content: [
            {
                subtitle: "1. Data Collection",
                text: "We only collect essential information needed for your learning journey: your name, email address, and learning goals. We do not store credit card information; all payments are handled securely by PayPal."
            },
            {
                subtitle: "2. Third-Party Services",
                text: "We use Calendly for scheduling and PayPal for transactions. Please refer to their respective privacy policies for how they handle your data. We do not sell or share your personal information with any other third parties."
            },
            {
                subtitle: "3. Communications",
                text: "We may use your email to send session reminders, course updates, or requested resources. You can opt-out of marketing communications at any time."
            }
        ]
    },
    {
        id: "refunds",
        title: "Refund & Cancellation",
        icon: FileText,
        content: [
            {
                subtitle: "1. Tutoring Sessions",
                text: "Cancellations made more than 24 hours before the scheduled session are eligible for a 100% refund or free rescheduling."
            },
            {
                subtitle: "2. Late Cancellations",
                text: "Cancellations made within 24 hours of the session start time, or 'No-Shows', are non-refundable as that time slot was reserved exclusively for you."
            },
            {
                subtitle: "3. Digital Products",
                text: "Due to the nature of digital goods, PDF guides and digital downloads are non-refundable once the download link has been accessed."
            }
        ]
    }
];

export default function Legal() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50 px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                    <ChevronLeft size={18} /> Back to Home
                </Link>
                <img src="/logo-ws.png" alt="Logo" className="w-8 h-8 object-contain" />
                <div className="w-20" /> {/* Spacer */}
            </nav>

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Page Header */}
                    <header className="mb-20 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            Professional Standards
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none">
                            Legal <span className="text-primary italic">&</span> Compliance.
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                            Transparent terms designed to protect both your learning journey and our educational standards.
                        </p>
                    </header>

                    {/* Legal Content Sections */}
                    <div className="space-y-24">
                        {legalSections.map((section, idx) => (
                            <section key={section.id} id={section.id} className="scroll-mt-32 space-y-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-primary border border-gray-100 shadow-sm">
                                        <section.icon size={32} />
                                    </div>
                                    <h2 className="text-3xl font-black text-foreground tracking-tight">{section.title}</h2>
                                </div>

                                <div className="grid gap-8">
                                    {section.content.map((item, itemIdx) => (
                                        <motion.div
                                            key={itemIdx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: itemIdx * 0.1 }}
                                            className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 space-y-4 hover:border-primary/20 transition-colors"
                                        >
                                            <h3 className="text-lg font-black text-foreground tracking-tight">{item.subtitle}</h3>
                                            <p className="text-muted-foreground leading-relaxed font-medium">{item.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <section className="mt-32 p-12 rounded-[3.5rem] bg-primary text-primary-foreground relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />

                        <div className="relative z-10 space-y-8 max-w-lg">
                            <h2 className="text-3xl font-black tracking-tight leading-none">Questions about these terms?</h2>
                            <p className="text-primary-foreground/80 font-medium">
                                We believe in clarity. If you have any questions regarding our policies, please reach out directly.
                            </p>
                            <a href="mailto:wonbinssem@gmail.com">
                                <Button className="h-16 px-10 rounded-2xl bg-white text-primary hover:bg-white/95 font-black text-lg tracking-tight flex items-center gap-3">
                                    Contact Wonbin Ssem
                                    <ArrowRight size={20} />
                                </Button>
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
