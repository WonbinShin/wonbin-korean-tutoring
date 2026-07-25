import React from "react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MentorSection from "@/components/MentorSection";
import CurriculumSection from "@/components/CurriculumSection";
import UsefulKoreanSection from "@/components/MnemonicSection";
import CoursesSection from "@/components/CoursesSection";
import BookingSection from "@/components/BookingSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />

        {/* How it works */}
        <HowItWorksSection />

        {/* Unified Mentor Narrative (Replaces Stacking sections for 'One Flow' scroll) */}
        <MentorSection />

        {/* Curriculum */}
        <CurriculumSection />

        {/* Pricing Options (formerly CoursesSection) */}
        <CoursesSection />

        {/* Useful Korean Expressions */}
        <UsefulKoreanSection />

        {/* Global Telemetry */}
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
