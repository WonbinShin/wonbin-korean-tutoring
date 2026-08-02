import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Level Test tab.
 * Embeds the standalone adaptive Korean level test that lives at
 * /public/level-test.html (served at wonbinssem.com/level-test.html).
 */
export default function LevelTestSection() {
  return (
    <section id="level-test" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4D71FF08_2px,transparent_2px)] [background-size:60px_60px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={14} className="animate-pulse" />
            Free Korean Level Test
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Find Your Korean Level
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Take this quick adaptive test to discover your level (1&ndash;5). It stops automatically
            once your level is clear, then shows your result with simple explanations. About 5 minutes,
            no sign-up needed.
          </p>
        </div>

        {/* Embedded test */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden bg-white">
            <iframe
              src="/level-test.html"
              title="Korean Level Test by Wonbin Ssem"
              className="w-full block"
              style={{ height: "860px", border: "none" }}
              loading="lazy"
            />
          </div>

          {/* Secondary actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/level-test.html" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="rounded-2xl h-12 px-6 text-sm font-black border-gray-200 text-foreground hover:bg-gray-50 flex items-center gap-2"
              >
                Open in Full Screen
                <ExternalLink size={16} />
              </Button>
            </a>
            <a href="#booking">
              <Button className="rounded-2xl h-12 px-6 text-sm font-black bg-primary text-primary-foreground hover:bg-primary/95 flex items-center gap-2">
                Book a Free Level Check
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground font-medium mt-4">
            Prefer a human touch? Book a free 25-minute session and I&rsquo;ll check your level with you.
          </p>
        </div>
      </div>
    </section>
  );
}
