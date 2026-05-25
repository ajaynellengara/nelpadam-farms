"use client";
import { useState, useEffect } from "react";

export default function KanyammaHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex flex-col" id="top">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-mid to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 L35 20 L50 20 L38 30 L42 45 L30 35 L18 45 L22 30 L10 20 L25 20 Z' fill='white' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px' }}
      />

      <div className="h-16 md:h-20" />

      <div className="bg-white/10 backdrop-blur-md border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-16 py-2 md:py-2.5 flex flex-wrap items-center gap-x-6 gap-y-1 text-white/70 text-xs md:text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-white/90 font-semibold">Kanyamma</span>
          </span>
          <span>Kanyakumari, Tamil Nadu</span>
          <span>Traditional sweets</span>
          <span className="text-white/40 hidden sm:inline">·</span>
          <span className="text-white/40 text-[10px] tracking-wide">Home kitchen →</span>
        </div>
      </div>

      <div className="flex-1 flex items-center px-6 lg:px-16 max-w-6xl mx-auto w-full">
        <div
          className={`max-w-2xl transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5">
            From a kitchen in <span className="text-gold italic">Kanyakumari</span>
            <br />
            comes the taste of tradition.
          </h1>

          <p className="text-white/70 text-base leading-relaxed mb-6 max-w-lg">
            Kanyamma prepares mundirikothu, athirasa, and other traditional sweets
            the way her mother taught her — no machines, no preservatives, just love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kanyamma-crops"
              className="btn-primary bg-gold text-ink hover:bg-gold-light shadow-lg"
            >
              Pre-Order Traditional Sweets →
            </a>
            <a
              href="#kanyamma-story"
              className="btn-outline border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              Read Kanyamma&apos;s Story
            </a>
          </div>
        </div>
      </div>

      <div className="pb-6 flex flex-col items-center gap-2 text-white/30">
        <div className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</div>
        <div className="w-px h-8 bg-white/20 animate-bounce" />
      </div>
    </section>
  );
}
