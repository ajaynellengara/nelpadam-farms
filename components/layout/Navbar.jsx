"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Govindan's Story", href: "#story" },
    { label: "The Crops", href: "#crops" },
    { label: "Your Impact", href: "#impact" },
    { label: "Pre-Order", href: "#preorder" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#E8D4B0]/96 backdrop-blur-md shadow-[0_2px_24px_rgba(44,26,14,0.10)] border-b border-[#CCAA80]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Leaf mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="group-hover:scale-105 transition-transform">
            <circle cx="16" cy="16" r="15" fill="#3A6B35" opacity="0.12"/>
            <path d="M16 28C16 28 8 22 8 14C8 9 11.5 6 16 6C20.5 6 24 9 24 14C24 22 16 28 16 28Z" fill="#3A6B35" opacity="0.8"/>
            <path d="M16 28 L16 12" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M16 18 L12 14" stroke="#E8D4B0" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M16 15 L20 12" stroke="#E8D4B0" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <div>
            <div className="font-serif text-[#2C1A0E] text-base font-bold leading-none tracking-tight">
              Nelpadam
            </div>
            <div className="text-[#A0522D] text-[9px] tracking-[0.25em] uppercase font-medium leading-none mt-0.5">
              Farms · Est. 1976
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#5C3317] text-sm font-medium hover:text-[#2C1A0E] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9930A] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Pre-order CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#preorder"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#2C1A0E] text-[#E8D4B0] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5C3317] transition-all duration-200 shadow-md"
          >
            <span>Pre-Order Harvest</span>
            <span className="text-base">🧑‍🌾</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-5 h-0.5 bg-[#2C1A0E] block transition-all duration-200 ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-2" :
                  menuOpen && i === 1 ? "opacity-0" :
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-[#E8D4B0] border-t border-[#CCAA80] transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[#2C1A0E] font-medium py-1 border-b border-[#DBBF97] text-sm">
              {l.label}
            </a>
          ))}
          <a href="#preorder" onClick={() => setMenuOpen(false)}
            className="bg-[#2C1A0E] text-[#E8D4B0] text-center font-semibold px-5 py-3 rounded-full mt-1 text-sm">
            Pre-Order Harvest 🧑‍🌾
          </a>
        </div>
      </div>
    </header>
  );
}
