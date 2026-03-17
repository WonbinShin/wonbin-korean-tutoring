import React from "react";
import { Sparkles, GraduationCap } from "lucide-react";

export default function LessonTypesSection() {
    return (
        <section id="lesson-types" className="w-full flex flex-col justify-center py-32 min-h-screen">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-[#AB9FF2] uppercase tracking-wider mb-3">
                        Tailored Instruction
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-bold text-[#F9F9F9] mb-4 tracking-tight">
                        Learn at Any Age
                    </h2>
                    <p className="text-[#F9F9F9]/60 leading-relaxed text-lg">
                        Korean lessons optimized specifically for how your brain learns best.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Children Card */}
                    <div className="group relative bg-[#0F0F0F] rounded-[2rem] p-10 flex flex-col items-start border border-[#FFFFFF10] hover:border-[#2AF598]/50 transition-all duration-500 hover:scale-[0.98] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(42,245,152,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2AF598]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                        {/* Artifact Animation: Pulsing Waveform */}
                        <div className="absolute top-10 right-10 text-[#2AF598]/20 group-hover:text-[#2AF598]/60 transition-colors duration-500">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 100 100"
                                className="animate-pulse"
                                style={{ animationDuration: '3s' }}
                            >
                                <path
                                    d="M10 50 Q 25 20, 50 50 T 90 50"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    className="transition-all duration-700 ease-in-out group-hover:stroke-width-8"
                                    style={{ transform: 'scaleY(1)', transformOrigin: 'center' }}
                                />
                                <path
                                    d="M10 50 Q 25 80, 50 50 T 90 50"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    className="transition-all duration-500 ease-in-out delay-100 group-hover:stroke-width-6"
                                />
                            </svg>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-[#2AF598]/10 flex items-center justify-center mb-8 relative z-10">
                            <Sparkles size={32} className="text-[#2AF598]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#F9F9F9] mb-4 relative z-10">For Children</h3>
                        <p className="text-[#F9F9F9]/60 leading-relaxed mb-8 relative z-10 text-lg max-w-[280px]">
                            Play-based, high-energy learning modules using visual association and fun songs to build organic fluency.
                        </p>
                        <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#2AF598] uppercase tracking-wider relative z-10">
                            Explore Kids Curriculum <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                        </div>
                    </div>

                    {/* Adult Card */}
                    <div className="group relative bg-[#0F0F0F] rounded-[2rem] p-10 flex flex-col items-start border border-[#FFFFFF10] hover:border-[#AB9FF2]/50 transition-all duration-500 hover:scale-[0.98] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(171,159,242,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AB9FF2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                        {/* Artifact Animation: Rotating Geometric Motif */}
                        <div className="absolute top-10 right-10 text-[#AB9FF2]/20 group-hover:text-[#AB9FF2]/60 transition-colors duration-500 flex items-center justify-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 100 100"
                                className="transition-transform duration-[10s] ease-linear group-hover:rotate-180 origin-center tracking-in"
                            >
                                {/* Abstract Gear/Korean geometric */}
                                <rect x="40" y="10" width="20" height="80" rx="4" fill="currentColor" opacity="0.6" />
                                <rect x="10" y="40" width="80" height="20" rx="4" fill="currentColor" opacity="0.6" />
                                <rect x="25" y="25" width="50" height="50" rx="10" fill="transparent" stroke="currentColor" strokeWidth="8" />
                                <circle cx="50" cy="50" r="10" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-[#AB9FF2]/10 flex items-center justify-center mb-8 relative z-10">
                            <GraduationCap size={32} className="text-[#AB9FF2]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#F9F9F9] mb-4 relative z-10">For Adults</h3>
                        <p className="text-[#F9F9F9]/60 leading-relaxed mb-8 relative z-10 text-lg max-w-[280px]">
                            Structured contextual learning focusing on rapid conversational skills, practical grammar, and deep cultural immersion.
                        </p>
                        <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#AB9FF2] uppercase tracking-wider relative z-10">
                            Explore Adult Curriculum <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
