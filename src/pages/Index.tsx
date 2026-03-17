import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MentorSection from "@/components/MentorSection";
import UsefulKoreanSection from "@/components/MnemonicSection";
import CoursesSection from "@/components/CoursesSection";
import BookingSection from "@/components/BookingSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />

        {/* Unified Mentor Narrative (Replaces Stacking sections for 'One Flow' scroll) */}
        <MentorSection />

        {/* Smart Booking Interface */}
        <BookingSection />

        {/* Product Architecture & Paths (Consolidated: Tutoring & Resources) */}
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
