import React, { useState, useEffect, useCallback } from "react";
import Header, { TabItem } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MentorSection from "@/components/MentorSection";
import CurriculumSection from "@/components/CurriculumSection";
import CoursesSection from "@/components/CoursesSection";
import BookingSection from "@/components/BookingSection";
import LevelTestSection from "@/components/LevelTestSection";
import ResourcesSection from "@/components/ResourcesSection";
import TextbookStore from "@/components/TextbookStore";
import UsefulKoreanSection from "@/components/MnemonicSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

// Top-level tabs shown in the header. Order = display order.
const TABS: TabItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "level-test", label: "Level Test" },
  { id: "resources", label: "Resources" },
  { id: "reviews", label: "Reviews" },
];

// Any in-page anchor (e.g. #courses used inside existing sections) maps to the
// tab that now contains it, so all existing links keep working.
const ANCHOR_TO_TAB: Record<string, string> = {
  "": "home",
  home: "home",
  how: "home",
  "how-it-works": "home",
  about: "about",
  experience: "about",
  mentor: "about",
  classes: "classes",
  courses: "classes",
  curriculum: "classes",
  booking: "classes",
  pricing: "classes",
  "level-test": "level-test",
  leveltest: "level-test",
  test: "level-test",
  resources: "resources",
  textbooks: "resources",
  "useful-korean": "resources",
  ebooks: "resources",
  library: "resources",
  materials: "resources",
  reviews: "reviews",
};

const getHash = () =>
  (typeof window !== "undefined" ? window.location.hash.replace("#", "") : "").toLowerCase();

const Index = () => {
  const [active, setActive] = useState<string>(() => ANCHOR_TO_TAB[getHash()] || "home");

  // React to hash changes (tab clicks, in-page anchors, deep links, back/forward)
  useEffect(() => {
    const applyHash = () => {
      const raw = getHash();
      const tab = ANCHOR_TO_TAB[raw] || "home";
      setActive(tab);
      // After the new tab renders, scroll to the specific element if it exists,
      // otherwise scroll to the top of the page.
      window.setTimeout(() => {
        const el = raw ? document.getElementById(raw) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 60);
    };
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const go = useCallback((id: string) => {
    const current = getHash();
    if (current === id) {
      // Same hash: no hashchange event fires, so update + scroll manually.
      setActive(ANCHOR_TO_TAB[id] || "home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = id;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header active={active} onNavigate={go} tabs={TABS} />
      <main>
        {active === "home" && (
          <>
            <HeroSection />
            <HowItWorksSection />
          </>
        )}

        {active === "about" && <MentorSection />}

        {active === "classes" && (
          <>
            <CurriculumSection />
            <CoursesSection />
            <BookingSection />
          </>
        )}

        {active === "level-test" && <LevelTestSection />}

        {active === "resources" && (
          <>
            <ResourcesSection />
            <TextbookStore />
            <UsefulKoreanSection />
          </>
        )}

        {active === "reviews" && <ReviewsSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
