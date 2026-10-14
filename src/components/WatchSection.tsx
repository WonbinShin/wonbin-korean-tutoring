import { useEffect, useMemo, useState } from "react";
import {
  Youtube,
  FileText,
  Download,
  ExternalLink,
  Play,
  Bell,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Instagram,
  Subtitles,
  Clock,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";

/**
 * Watch tab — Slow Korean Vlog (Comprehensible Input) videos from YouTube,
 * each with its free Study Pack PDF directly underneath, plus Word Hack Korean.
 *
 * Data flow
 *   1. /api/videos   → Vercel function that reads the YouTube channel and
 *                      parses the PDF link out of each description. Any new
 *                      upload shows up here automatically (≤ 1 h cache).
 *   2. /videos.json  → fallback list (and per-video overrides) in /public.
 */

export type WatchVideo = {
  id: string;
  title: string;
  publishedAt?: string | null;
  seconds?: number;
  thumbnail?: string | null;
  level?: string | null;
  pdfUrl?: string | null;
  pdfEmbedUrl?: string | null;
};

const CHANNEL_URL = "https://www.youtube.com/@wonbinssem";
const SUBSCRIBE_URL = `${CHANNEL_URL}?sub_confirmation=1`;
const WORD_HACK = {
  instagram: "https://www.instagram.com/wordhackkor/",
  tiktok: "https://www.tiktok.com/@wordhackkor",
};

const thumbOf = (v: WatchVideo) => v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

/** "Slow Korean Vlog | Going for a Run 🏃 | Comprehensible Input (A1–B2)" → "Going for a Run 🏃" */
function shortTitle(title: string) {
  let t = title.replace(/\s*\((?:A|B|C)[12](?:\s*[–-]\s*(?:A|B|C)[12])?\)\s*$/, "");
  t = t.replace(/\s*[|·]\s*Comprehensible Input\s*$/i, "");
  t = t.replace(/^Slow Korean Vlog\s*[|·]\s*/i, "");
  t = t.replace(/\s*[|·]\s*Slow Korean\s*$/i, "");
  return t.trim() || title;
}

function driveDownloadUrl(pdfUrl?: string | null) {
  const m = pdfUrl && /drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/.exec(pdfUrl);
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : pdfUrl || undefined;
}

function fmtDate(iso?: string | null) {
  if (!iso) return null;
  try {
    return format(parseISO(iso), "MMM d, yyyy");
  } catch {
    return null;
  }
}

function fmtDuration(seconds?: number) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

async function loadVideos(): Promise<{ videos: WatchVideo[]; live: boolean }> {
  // 1) live data from YouTube via our serverless function
  try {
    const r = await fetch("/api/videos", { headers: { accept: "application/json" } });
    if (r.ok) {
      const j = await r.json();
      if (Array.isArray(j.videos) && j.videos.length > 0) return { videos: j.videos, live: true };
    }
  } catch {
    /* fall through */
  }
  // 2) static fallback
  const r = await fetch("/videos.json");
  const j = await r.json();
  return { videos: (j.videos || []) as WatchVideo[], live: false };
}

const TikTokIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export default function WatchSection() {
  const [videos, setVideos] = useState<WatchVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pdfOpen, setPdfOpen] = useState(true);

  useEffect(() => {
    let alive = true;
    loadVideos()
      .then(({ videos: list }) => {
        if (!alive) return;
        setVideos(list);
        setSelectedId((cur) => cur || (list[0] ? list[0].id : null));
      })
      .catch(() => alive && setFailed(true))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const current = useMemo(
    () => videos.find((v) => v.id === selectedId) || videos[0] || null,
    [videos, selectedId],
  );

  const pick = (id: string) => {
    setSelectedId(id);
    setPdfOpen(true);
    const el = document.getElementById("player");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="watch" className="pt-32 pb-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xs font-black text-primary uppercase tracking-[0.25em]">
            Slow Korean Vlog · Comprehensible Input
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight [text-wrap:balance]">
            Watch, Listen, Pick It Up Naturally
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
            Slow, clear Korean through real days in Korea. Don&apos;t try to understand everything &mdash;
            just relax and follow the story. Every episode comes with a free Study Pack PDF right below the
            video.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {[
              { icon: Clock, label: "Slow & clear" },
              { icon: Subtitles, label: "CC in 9 languages" },
              { icon: FileText, label: "Free PDF per episode" },
            ].map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-foreground text-xs font-black"
              >
                <c.icon size={13} className="text-primary" /> {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Player + Study Pack */}
        <div id="player" className="max-w-5xl mx-auto scroll-mt-28">
          {loading ? (
            <div className="aspect-video w-full rounded-[2rem] bg-gray-100 animate-pulse" />
          ) : failed || !current ? (
            <div className="rounded-[2rem] border border-gray-100 bg-[#FDFCF8] p-10 text-center space-y-4">
              <p className="text-muted-foreground font-medium">
                Videos couldn&apos;t be loaded right now. Watch directly on YouTube instead.
              </p>
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-block">
                <Button className="rounded-full px-6 h-11 font-black bg-foreground text-white hover:bg-primary">
                  <Youtube size={16} className="mr-2" /> Open channel
                </Button>
              </a>
            </div>
          ) : (
            <>
              {/* Video */}
              <div className="rounded-[2rem] overflow-hidden shadow-card bg-black border border-gray-100">
                <div className="aspect-video w-full">
                  <iframe
                    key={current.id}
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${current.id}?rel=0&modestbranding=1&cc_load_policy=1`}
                    title={current.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Title row */}
              <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {current.level && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                        Level {current.level}
                      </span>
                    )}
                    {fmtDate(current.publishedAt) && (
                      <span className="text-xs font-bold text-muted-foreground">{fmtDate(current.publishedAt)}</span>
                    )}
                    {fmtDuration(current.seconds) && (
                      <span className="text-xs font-bold text-muted-foreground">· {fmtDuration(current.seconds)}</span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight [text-wrap:balance]">
                    {shortTitle(current.title)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <a
                    href={`https://www.youtube.com/watch?v=${current.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full h-11 px-5 font-black border-gray-200 hover:bg-gray-50 hover:text-foreground"
                    >
                      <Youtube size={16} className="mr-2 text-[#FF0000]" /> Watch on YouTube
                    </Button>
                  </a>
                  <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                    <Button className="rounded-full h-11 px-5 font-black bg-foreground text-white hover:bg-primary">
                      <Bell size={16} className="mr-2" /> Subscribe
                    </Button>
                  </a>
                </div>
              </div>

              {/* Study Pack */}
              <div className="mt-8 rounded-[2rem] border border-gray-100 bg-[#FDFCF8] overflow-hidden">
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <FileText size={24} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-black text-foreground tracking-tight">Free Study Pack (PDF)</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest">
                          Free
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                        Full script with translation, vocabulary, grammar from the video, memory hacks, culture
                        tips, a quiz and a shadowing script for this episode.
                      </p>
                    </div>
                  </div>

                  {current.pdfUrl ? (
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <a href={current.pdfUrl} target="_blank" rel="noreferrer">
                        <Button
                          variant="outline"
                          className="rounded-xl h-11 px-4 font-black border-gray-200 hover:bg-white hover:text-foreground"
                        >
                          <ExternalLink size={15} className="mr-2" /> Open
                        </Button>
                      </a>
                      <a href={driveDownloadUrl(current.pdfUrl)} target="_blank" rel="noreferrer">
                        <Button className="rounded-xl h-11 px-4 font-black bg-foreground text-white hover:bg-primary">
                          <Download size={15} className="mr-2" /> Download
                        </Button>
                      </a>
                      {current.pdfEmbedUrl && (
                        <Button
                          variant="ghost"
                          onClick={() => setPdfOpen((o) => !o)}
                          className="rounded-xl h-11 px-3 font-black text-muted-foreground hover:text-foreground"
                          aria-expanded={pdfOpen}
                        >
                          {pdfOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          <span className="ml-1.5">{pdfOpen ? "Hide" : "Preview"}</span>
                        </Button>
                      )}
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-500 text-xs font-black shrink-0">
                      <Clock size={14} /> Study Pack coming soon
                    </span>
                  )}
                </div>

                {current.pdfUrl && current.pdfEmbedUrl && pdfOpen && (
                  <div className="border-t border-gray-100 bg-white">
                    <iframe
                      key={current.pdfEmbedUrl}
                      src={current.pdfEmbedUrl}
                      title={`Study Pack — ${shortTitle(current.title)}`}
                      className="w-full h-[70vh] min-h-[420px] max-h-[900px]"
                      loading="lazy"
                      allow="autoplay"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Episodes */}
        {videos.length > 1 && (
          <div className="max-w-6xl mx-auto mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
                All Episodes
              </span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v) => {
                const isCurrent = current && v.id === current.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => pick(v.id)}
                    aria-current={isCurrent ? "true" : undefined}
                    className={`text-left rounded-[1.75rem] overflow-hidden border bg-white transition-all duration-300 group flex flex-col
                      ${isCurrent ? "border-primary shadow-xl" : "border-gray-100 hover:border-primary/30 hover:shadow-xl"}`}
                  >
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={thumbOf(v)}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-foreground flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play size={18} className="ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      {v.level && (
                        <span className="absolute left-3 bottom-3 px-2.5 py-1 rounded-full bg-white/95 text-foreground text-[10px] font-black uppercase tracking-widest shadow">
                          {v.level}
                        </span>
                      )}
                      {fmtDuration(v.seconds) && (
                        <span className="absolute right-3 bottom-3 px-2 py-0.5 rounded-md bg-black/75 text-white text-[11px] font-bold tabular-nums">
                          {fmtDuration(v.seconds)}
                        </span>
                      )}
                      {isCurrent && (
                        <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                          Now playing
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <h4 className="text-[15px] font-black text-foreground leading-snug tracking-tight line-clamp-2">
                        {shortTitle(v.title)}
                      </h4>
                      <div className="mt-auto flex items-center justify-between text-xs font-bold text-muted-foreground pt-1">
                        <span>{fmtDate(v.publishedAt) || "Slow Korean Vlog"}</span>
                        {v.pdfUrl && (
                          <span className="inline-flex items-center gap-1 text-primary">
                            <FileText size={13} /> PDF
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Word Hack Korean */}
        <div id="word-hack" className="max-w-6xl mx-auto mt-20 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
              Short &amp; Daily
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="bg-gradient-to-r from-[#3D5FE6] via-[#4D71FF] to-[#3D5FE6] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex items-start gap-5 flex-1 text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                  <Sparkles size={30} />
                </div>
                <div className="space-y-2">
                  <div className="inline-block px-3 py-0.5 rounded-full bg-white/15 border border-white/25 text-blue-100 text-[10px] font-black uppercase tracking-widest">
                    Reels &amp; TikTok · @wordhackkor
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">Word Hack Korean</h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-100/90 max-w-lg leading-relaxed">
                    One Korean word, one memory hack, under a minute. Quick daily shorts that make words stick
                    &mdash; the fast companion to the slow vlogs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href={WORD_HACK.instagram} target="_blank" rel="noreferrer" className="w-full md:w-auto">
                  <Button className="w-full md:w-auto h-12 px-7 rounded-full bg-white text-[#4D71FF] hover:bg-blue-50 font-black text-sm shadow-lg flex items-center gap-2">
                    <Instagram size={18} /> Instagram
                  </Button>
                </a>
                <a href={WORD_HACK.tiktok} target="_blank" rel="noreferrer" className="w-full md:w-auto">
                  <Button className="w-full md:w-auto h-12 px-7 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 font-black text-sm flex items-center gap-2">
                    <TikTokIcon size={18} /> TikTok
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground font-medium mt-12">
          New episodes appear here automatically.{" "}
          <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer" className="text-primary font-black hover:underline">
            Subscribe on YouTube
          </a>{" "}
          to get notified.
        </p>
      </div>
    </section>
  );
}
