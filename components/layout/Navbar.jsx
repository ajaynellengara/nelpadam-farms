"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    {
      label: "Farmers Stories",
      hasDropdown: true,
      children: [
        { label: "Govindan Nair", href: "#story", desc: "3rd gen farmer · Kottarakkara, Kerala", initial: "G" },
        { label: "Kanyamma", href: "/stories/kanyamma", desc: "Sweet-maker · Kanyakumari, Tamil Nadu", initial: "K" },
      ],
    },
    { label: "Crops", href: "#crops" },
    { label: "Impact", href: "#impact" },
    { label: "Pre-Order", href: "#preorder" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-deep"
          : "bg-gradient-to-b from-white/80 via-white/30 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="group-hover:scale-105 transition-transform shrink-0">
            <circle cx="16" cy="16" r="15" fill="#2D6B35" opacity="0.12"/>
            <path d="M16 28C16 28 8 22 8 14C8 9 11.5 6 16 6C20.5 6 24 9 24 14C24 22 16 28 16 28Z" fill="#2D6B35" opacity="0.85"/>
            <path d="M16 28 L16 12" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <path d="M16 18 L12 14" stroke="#FAF7F2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
            <path d="M16 15 L20 12" stroke="#FAF7F2" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <div>
            <div className="font-serif text-ink text-lg md:text-xl font-bold leading-none tracking-tight">
              Nelpadam
            </div>
            <div className="text-ink-light text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-medium leading-none mt-0.5">
              Farms
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setStoryOpen(true)}
                onMouseLeave={() => setStoryOpen(false)}
              >
                <button className="text-ink text-sm font-semibold hover:text-leaf transition-colors flex items-center gap-1">
                  {l.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {storyOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-cream-deep py-3 min-w-[240px]">
                    {l.children.map((child, i) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-cream-alt transition-colors border-b border-cream-deep last:border-0"
                      >
                        <div className="w-9 h-9 rounded-full bg-leaf-pale/50 flex items-center justify-center font-serif font-bold text-leaf text-sm shrink-0">
                          {child.initial}
                        </div>
                        <div>
                          <div className="text-ink text-sm font-semibold leading-tight">{child.label}</div>
                          <div className="text-ink-light text-[11px] leading-tight mt-0.5">{child.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-ink text-sm font-semibold hover:text-leaf transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-leaf after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#preorder"
            className="btn-primary hidden sm:inline-flex"
          >
            Pre-Order Harvest
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-0.5 bg-ink block transition-all duration-200 ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-2" :
                  menuOpen && i === 1 ? "opacity-0" :
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-cream-deep transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 shadow-lg" : "max-h-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          <div className="py-2 border-b border-cream-alt">
            <div className="text-ink font-semibold text-base tracking-wide mb-2">Farmers Stories</div>
            <a href="#story" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl bg-leaf-pale/20 mb-1.5">
              <div className="w-10 h-10 rounded-full bg-leaf-pale/60 flex items-center justify-center font-serif font-bold text-leaf text-base shrink-0">G</div>
              <div>
                <div className="text-ink text-sm font-semibold leading-tight">Govindan Nair</div>
                <div className="text-ink-light text-[11px] leading-tight mt-0.5">3rd gen farmer · Kottarakkara, Kerala</div>
              </div>
            </a>
            <Link href="/stories/kanyamma" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl bg-maroon-pale/20">
              <div className="w-10 h-10 rounded-full bg-maroon-pale/60 flex items-center justify-center font-serif font-bold text-maroon text-base shrink-0">K</div>
              <div>
                <div className="text-ink text-sm font-semibold leading-tight">Kanyamma</div>
                <div className="text-ink-light text-[11px] leading-tight mt-0.5">Sweet-maker · Kanyakumari, Tamil Nadu</div>
              </div>
            </Link>
          </div>
          {links.filter(l => !l.hasDropdown).map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-ink font-semibold py-2 border-b border-cream-alt text-base tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#preorder" onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center text-base mt-2">
            Pre-Order Harvest
          </a>
        </div>
      </div>
    </header>
  );
}
