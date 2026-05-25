"use client";
import { useState, useEffect } from "react";

export default function OpeningScene() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen bg-ink overflow-hidden flex flex-col" id="top">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-farm.png)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }}
      />

      <div className="h-16 md:h-20" />

      {/* Farmer address strip */}
      <div className="bg-white/10 backdrop-blur-md border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-16 py-2 md:py-2.5 flex flex-wrap items-center gap-x-6 gap-y-1 text-white/70 text-xs md:text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf-light" />
            <span className="text-white/90 font-semibold">Govindan Nair</span>
          </span>
          <span>Kottarakkara, Kerala</span>
          <span>3.5 acres</span>
          <span>Est. 1976</span>
          <span className="text-white/40 hidden sm:inline">·</span>
          <span className="text-white/40 text-[10px] tracking-wide">More farmers →</span>
        </div>
      </div>

      <div className="flex-1 flex items-center px-6 lg:px-16 max-w-6xl mx-auto w-full">
        <div
          className={`max-w-2xl transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5">
            Somewhere in Kerala — <span className="text-gold-light italic">a farmer</span>
            <br />
            is growing your next meal.
          </h1>

          <p className="text-white/70 text-base leading-relaxed mb-6 max-w-lg">
            He tends pepper, tamarind, and turmeric on the same plot
            his grandfather cleared in 1948 — no middlemen, no superstores.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#crops"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gold-light transition-all shadow-lg"
            >
              Pre-Order This Season&apos;s Harvest
              <span className="text-base">→</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              Read Govindan&apos;s Story
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
