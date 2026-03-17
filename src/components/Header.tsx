import { useState, useEffect } from "react";
import { Menu, X, BookOpen, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  { label: "Lessons", href: "#courses", icon: BookOpen },
  { label: "Library", href: "#useful-korean", icon: MessageCircle },
  { label: "Booking", href: "#booking", icon: Calendar },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed z-[100] transition-all duration-500 ease-out left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl
      ${scrolled ? "top-4 md:top-6" : "top-6 md:top-8"}
      bottom-auto md:bottom-auto`}
    >
      <div className="bg-[#FFFFFF10] backdrop-blur-[40px] border border-[#FFFFFF10] rounded-[2rem] shadow-card relative overflow-hidden">

        {/* Live Telemetry Progress Bar */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-white/5">
          <div
            className="h-full bg-primary transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="px-6 h-16 flex items-center justify-between relative z-10 gap-4">
          <a href="#home" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-liquid">
              <img src="/favicon-ws.png" alt="Wonbin Ssem Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-black text-foreground tracking-tighter uppercase leading-none mb-0.5">
                Wonbin Ssem
              </span>
              <span className="text-[9px] font-mono text-primary/80 uppercase tracking-widest">
                Progress: {Math.round(progress)}%
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                <item.icon size={14} className="text-primary/70" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block flex-shrink-0">
            <a href="#booking">
              <Button className="rounded-full px-6 py-3 text-sm font-black h-auto bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap min-w-[140px]">
                Start Journey
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 w-full bg-[#1A1A1A]/90 backdrop-blur-[40px] border border-[#FFFFFF10] rounded-[1.5rem] p-3 shadow-card-hover origin-top animate-fade-in md:hidden before:absolute before:inset-0 before:bg-noise before:rounded-[1.5rem] before:opacity-50">
          <nav className="flex flex-col gap-2 relative z-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <div className="p-2 rounded-lg bg-white/5">
                  <item.icon size={18} className="text-primary" />
                </div>
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-1 mx-2" />
            <a href="#booking" onClick={() => setMobileOpen(false)}>
              <Button className="rounded-xl w-full py-6 text-base bg-primary hover:bg-primary/90">
                Start Your Journey
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
