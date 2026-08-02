import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export interface TabItem {
  id: string;
  label: string;
}

const DEFAULT_TABS: TabItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "level-test", label: "Level Test" },
  { id: "resources", label: "Resources" },
  { id: "reviews", label: "Reviews" },
];

interface HeaderProps {
  active?: string;
  onNavigate?: (id: string) => void;
  tabs?: TabItem[];
}

export default function Header({ active = "home", onNavigate, tabs = DEFAULT_TABS }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = (id: string) => {
    if (onNavigate) onNavigate(id);
    else window.location.hash = id;
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed z-[100] transition-all duration-500 ease-out left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl
      ${scrolled ? "top-4 md:top-6" : "top-6 md:top-8"}`}
    >
      <div className="bg-white/85 backdrop-blur-[40px] border border-gray-100 rounded-[2rem] shadow-card relative overflow-hidden">
        {/* Scroll progress bar */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gray-100">
          <div
            className="h-full bg-primary transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="px-4 sm:px-6 h-16 flex items-center justify-between relative z-10 gap-3">
          {/* Logo */}
          <button onClick={() => nav("home")} className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="/webprofile.jpg" alt="Wonbin Ssem Logo" className="w-full h-full object-contain" />
            </div>
            <span className="hidden sm:block text-sm font-black text-foreground tracking-tighter uppercase leading-none">
              Wonbin Ssem
            </span>
          </button>

          {/* Desktop tab nav */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => nav(t.id)}
                aria-current={active === t.id ? "page" : undefined}
                className={`whitespace-nowrap px-2.5 lg:px-3 py-2 rounded-xl text-[13px] lg:text-sm font-bold transition-all duration-300
                  ${active === t.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-gray-100"}`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => nav("classes")}
              className="rounded-full px-5 py-2.5 text-sm font-black h-auto bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Start Journey
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 w-full bg-white border border-gray-100 rounded-[1.5rem] p-3 shadow-lg origin-top animate-fade-in md:hidden">
          <nav className="flex flex-col gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => nav(t.id)}
                className={`text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors
                  ${active === t.id ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {t.label}
              </button>
            ))}
            <div className="h-px bg-gray-100 my-1 mx-2" />
            <Button
              onClick={() => nav("classes")}
              className="rounded-xl w-full py-5 text-base bg-primary hover:bg-primary/90"
            >
              Start Your Journey
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
