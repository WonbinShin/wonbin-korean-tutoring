import { Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-32 pb-16 border-t border-gray-50 overflow-hidden">
      {/* Background kinetic touch */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/webprofile.jpg" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-black text-foreground tracking-tighter uppercase tracking-[0.2em]">Wonbin Ssem</span>
              </div>
              <p className="text-lg text-muted-foreground font-medium max-w-sm leading-relaxed">
                Building the future of Korean language education through cinematic, zero-barrier experiences.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/wonbinssem/", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@wonbinssem", label: "Youtube" },
                { icon: Mail, href: "mailto:wonbinssem@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Quick Links</h4>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Courses", href: "#courses" },
                  { label: "Level Test", href: "#booking" },
                  { label: "Experience", href: "#about" }
                ].map((link) => (
                  <a key={link.label} href={link.href} className="text-sm font-black text-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    {link.label} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Resources</h4>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "Hangul Pack", href: "#resources" },
                  { label: "Visual Mnemonics", href: "#courses" },
                  { label: "Useful Korean", href: "#useful-korean" },
                  { label: "Identity Guide", href: "#about" }
                ].map((link) => (
                  <a key={link.label} href={link.href} className="text-sm font-black text-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    {link.label} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Legal</h4>
              <nav className="flex flex-col gap-4">
                {[
                  { label: "Terms", href: "/legal#terms" },
                  { label: "Privacy", href: "/legal#privacy" },
                  { label: "Refunds", href: "/legal#refunds" }
                ].map((link) => (
                  <a key={link.label} href={link.href} className="text-sm font-black text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Wonbin Ssem. All rights reserved. Cinematic Education.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Operational Intensity: 100%</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">SEOUL — GLOBAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
