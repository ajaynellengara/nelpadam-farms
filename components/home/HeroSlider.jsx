"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function OpeningScene() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#2C1A0E] overflow-hidden flex flex-col" id="top">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }}
      />

      {/* Top strip — location tag */}
      <div className={`pt-20 px-6 md:px-16 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="chapter-label text-[#A0522D] flex items-center gap-3 mb-2">
          <span className="inline-block w-8 h-px bg-[#A0522D]" />
          Kottarakkara · Kerala · India
        </div>
      </div>

      {/* Main content — split */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 py-10 gap-10">
        {/* Left — The opening lines */}
        <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Opening word */}
          <div className="text-[#C9930A] font-serif text-sm italic mb-6 tracking-wide">
            — A story about soil, patience, and honest food
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#E8D4B0] leading-[1.05] mb-8">
            Somewhere in
            Kerala, a farmer
            <span className="text-[#C9930A] italic"> is growing</span>
            <br />your next meal.
          </h1>

          <p className="text-[#DBBF97] text-lg leading-relaxed mb-10 max-w-lg">
            His name is <strong className="text-[#E8D4B0]">Govindan Nair</strong>.
            He tends pepper, tamarind, and turmeric on the same 3.5-acre plot
            his grandfather cleared in 1948. He grows without middlemen.
            He sells without superstores.
          </p>

          {/* Pre-order CTA with farmer smile animation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#crops"
              className="support-btn group relative inline-flex items-center justify-center gap-2 bg-[#C9930A] text-[#2C1A0E] font-bold px-8 py-4 rounded-full text-base shadow-lg"
            >
              <span className="farmer-emojis">🧑‍🌾😊🌿✨</span>
              Pre-Order This Season's Harvest
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Micro trust */}
          <div className="flex flex-wrap gap-5 mt-8 text-xs text-[#8B6040]">
            {["🌾 Direct from farm", "⏳ Ships at harvest", "🤝 Fair price to Govindan"].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right — Real farm photograph with glass overlay */}
        <div className={`relative transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-3xl overflow-hidden border border-[#5C3317]/40 shadow-2xl aspect-[4/5]">
            <Image
              src="/images/hero-farm.png"
              alt="Nelpadam Farms, Kottarakkara Kerala"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/70 via-transparent to-transparent" />

            {/* Glass info card — bottom */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass rounded-2xl p-4">
                <div className="chapter-label text-[#A0522D] mb-1">Kottarakkara, Kerala</div>
                <div className="font-serif text-[#2C1A0E] font-bold text-lg leading-tight">
                  Govindan's 3.5-acre family land
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#3A6B35] animate-pulse" />
                  <span className="text-[#5C3317] text-xs">Farmed since 1976 · Est. 1948</span>
                </div>
              </div>
            </div>

            {/* Glass tag — top right */}
            <div className="absolute top-4 right-4 glass rounded-xl px-3 py-1.5 text-xs font-bold text-[#2C1A0E]">
              Est. 1976
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — scroll cue */}
      <div className="pb-10 flex flex-col items-center gap-3 text-[#5C3317]">
        <div className="text-xs tracking-[0.2em] uppercase">Read the story</div>
        <div className="w-px h-10 bg-[#5C3317] animate-bounce" />
      </div>
    </section>
  );
}
