"use client";
import { useState } from "react";

// What happens when you pre-order — journey steps
const journey = [
  {
    step: "You pre-order",
    icon: "📱",
    farmer: "🧑‍🌾",
    farmerMood: "Govindan gets notified — he knows exactly how much to harvest.",
    color: "#3A6B35",
    bg: "#C8DFB8",
  },
  {
    step: "Govindan harvests",
    icon: "🌾",
    farmer: "😊",
    farmerMood: "He picks only what was pre-ordered. Zero waste. Zero guessing.",
    color: "#C9930A",
    bg: "#F5DFA0",
  },
  {
    step: "Packed by hand",
    icon: "📦",
    farmer: "🧑‍🌾",
    farmerMood: "Shanthi, his wife, packs each order with a small note inside.",
    color: "#A0522D",
    bg: "#F5E6D3",
  },
  {
    step: "Ships direct to you",
    icon: "🚚",
    farmer: "🎉",
    farmerMood: "No warehouse. No superstore. From their hands to yours.",
    color: "#6B2D0F",
    bg: "#F0D4B8",
  },
];

const middlemanChart = [
  { label: "Middlemen get", amount: "₹620", percent: 77, color: "#E07B39", isMiddleman: true },
  { label: "Govindan gets", amount: "₹180", percent: 23, color: "#3A6B35", isMiddleman: false },
];

const nelpadamChart = [
  { label: "Platform fee", amount: "₹80", percent: 10, color: "#C9930A", isMiddleman: true },
  { label: "Govindan gets", amount: "₹620", percent: 77, color: "#3A6B35", isMiddleman: false },
  { label: "Shipping", amount: "₹100", percent: 13, color: "#A0522D", isMiddleman: true },
];

export default function BenefitsZigZag() {
  const [activeStep, setActiveStep] = useState(null);
  const [celebrated, setCelebrated] = useState(false);

  const handleSupportClick = () => {
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 1200);
  };

  return (
    <section id="impact" className="bg-[#E8D4B0] texture-overlay overflow-hidden">
      {/* Chapter 03 — What happens when you buy */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-14">
            <div className="font-serif text-7xl font-bold text-[#DBBF97] select-none leading-none">03</div>
            <div>
              <div className="chapter-label text-[#A0522D] mb-1">Your Impact</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E]">
                What happens when you pre-order
              </h2>
            </div>
          </div>

          {/* Journey steps */}
          <div className="relative mb-20">
            {/* Connector line */}
            <div className="absolute top-10 left-10 right-10 h-0.5 bg-[#CCAA80] hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {journey.map((j, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="text-left relative group cursor-default"
                >
                  {/* Step circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto lg:mx-0 border-4 border-white shadow-md transition-all duration-300 group-hover:scale-110"
                    style={{ background: j.bg, borderColor: j.color + "30" }}
                  >
                    {activeStep === i ? j.farmer : j.icon}
                  </div>

                  <div
                    className="rounded-2xl p-4 border-2 border-transparent transition-all duration-300 group-hover:border-current"
                    style={{ color: j.color }}
                  >
                    <div className="font-bold text-base text-[#2C1A0E] mb-2">{j.step}</div>
                    <p className="text-[#5C3317] text-sm leading-relaxed">{j.farmerMood}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Middleman comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Without Nelpadam */}
            <div className="bg-[#DBBF97] rounded-3xl p-7 border border-[#CCAA80]">
              <div className="chapter-label text-[#A0522D] mb-3">Without Nelpadam</div>
              <div className="text-[#2C1A0E] font-serif text-lg font-bold mb-1">You pay ₹800/kg</div>
              <p className="text-[#5C3317] text-sm mb-5">Of every ₹800 you spend on pepper:</p>
              <div className="space-y-3">
                {middlemanChart.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#5C3317]">{b.label}</span>
                      <span className="font-bold text-[#2C1A0E]">{b.amount}</span>
                    </div>
                    <div className="h-3 rounded-full bg-[#CCAA80] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${b.percent}%`, background: b.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-[#8B6040] italic">
                Govindan takes home 22% of what you paid.
              </div>
            </div>

            {/* With Nelpadam */}
            <div className="bg-[#2C1A0E] rounded-3xl p-7 border border-[#5C3317] relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#C9930A] text-[#2C1A0E] text-xs font-bold px-3 py-1 rounded-full">
                With Nelpadam
              </div>
              <div className="chapter-label text-[#C9930A] mb-3">With Nelpadam</div>
              <div className="text-[#E8D4B0] font-serif text-lg font-bold mb-1">You pay ₹800/kg</div>
              <p className="text-[#DBBF97] text-sm mb-5">Of the same ₹800:</p>
              <div className="space-y-3">
                {nelpadamChart.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#DBBF97]">{b.label}</span>
                      <span className="font-bold text-[#E8D4B0]">{b.amount}</span>
                    </div>
                    <div className="h-3 rounded-full bg-[#5C3317] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${b.percent}%`, background: b.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-[#8FB87A] italic">
                Govindan takes home 77% of what you paid. 🎉
              </div>
            </div>
          </div>

          {/* The big CTA — with farmer smile button */}
          <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#2C1A0E] font-bold mb-3">
              Ready to support Govindan?
            </p>
            <p className="text-[#5C3317] mb-8 text-base">
              Pre-order costs nothing upfront. You pay only when your harvest ships.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#crops"
                onClick={handleSupportClick}
                className={`support-btn inline-flex items-center gap-3 bg-[#3A6B35] text-[#F2E6D0] font-bold px-10 py-5 rounded-full text-lg shadow-xl ${celebrated ? "celebrate" : ""}`}
              >
                <span className="farmer-emojis">🧑‍🌾😊🌾🎉✨</span>
                Yes! Support Govindan →
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-pulse support-btn inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-full text-base shadow-lg"
              >
                <span className="farmer-emojis">👋😊</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat with Govindan
              </a>
            </div>

            {/* Reaction row */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm text-[#5C3317]">
              {[
                "🧑‍🌾 Govindan smiles every time someone pre-orders",
                "🌾 Your purchase lets him plan with confidence",
                "❤️ No advance payment until harvest",
              ].map((t) => (
                <span key={t} className="bg-[#DBBF97] rounded-full px-4 py-2">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
