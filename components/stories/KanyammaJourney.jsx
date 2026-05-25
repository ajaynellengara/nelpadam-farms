"use client";
import { useState } from "react";
import { kanyamma } from "@/data/products";

const journey = [
  {
    step: "You pre-order",
    icon: "📱",
    producer: "🍬",
    producerMood: "Kanyamma gets notified exactly how much to prepare. No waste, no guesswork.",
    color: "#8B1A1A",
    bg: "#F5E0E0",
  },
  {
    step: "She prepares fresh",
    icon: "🍳",
    producer: "😊",
    producerMood: "Made to order using traditional recipes. Every batch is cooked with care.",
    color: "#C89B3C",
    bg: "#F5EAC8",
  },
  {
    step: "Packed with love",
    icon: "📦",
    producer: "🍬",
    producerMood: "Each order is hand-packed with traditional touch and a personal note.",
    color: "#B83030",
    bg: "#F0D0D0",
  },
  {
    step: "Ships direct to you",
    icon: "🚚",
    producer: "🎉",
    producerMood: "From her kitchen in Kanyakumari straight to your doorstep. No middlemen.",
    color: "#8B1A1A",
    bg: "#F5E0E0",
  },
];

const localChart = [
  { label: "Local reseller takes", amount: "60%", percent: 60, color: "#B83030", isMiddleman: true },
  { label: "Kanyamma gets", amount: "40%", percent: 40, color: "#8B1A1A", isMiddleman: false },
];

const nelpadamChart = [
  { label: "Platform fee", amount: "10%", percent: 10, color: "#C89B3C", isMiddleman: true },
  { label: "Kanyamma gets", amount: "75%", percent: 75, color: "#8B1A1A", isMiddleman: false },
  { label: "Shipping & packing", amount: "15%", percent: 15, color: "#C89B3C", isMiddleman: true },
];

export default function KanyammaJourney() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="kanyamma-impact" className="bg-maroon-pale/30 overflow-hidden">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="section-sub">Chapter 03</span>
            <span className="w-8 h-px bg-maroon/30" />
            <h2 className="section-heading">What happens when you pre-order</h2>
          </div>

          <div className="relative mb-24">
            <div className="absolute top-10 left-10 right-10 h-px bg-maroon-pale hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journey.map((j, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="text-left relative group cursor-default"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto lg:mx-0 shadow-sm transition-all duration-300 group-hover:scale-110"
                    style={{ background: j.bg }}
                  >
                    {activeStep === i ? j.producer : j.icon}
                  </div>

                  <div className="rounded-xl p-4 transition-all duration-300">
                    <div className="font-bold text-base text-ink mb-2">{j.step}</div>
                    <p className="text-ink-mid text-sm leading-relaxed">{j.producerMood}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-cream-deep">
              <div className="section-sub mb-4">Without Nelpadam</div>
              <p className="text-ink-mid text-sm mb-4">{kanyamma.name} sells only within her village. Her sweets rarely reach beyond the local market.</p>
              <div className="space-y-4">
                {localChart.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-ink-mid">{b.label}</span>
                      <span className="font-bold text-ink">{b.amount}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-cream-deep overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${b.percent}%`, background: b.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-ink-light italic">
                Limited reach means lower income and uncertain demand.
              </div>
            </div>

            <div className="bg-ink rounded-2xl p-8 shadow-card relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-maroon text-cream text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                With Nelpadam
              </div>
              <div className="section-sub text-maroon mb-4">With Nelpadam</div>
              <p className="text-ink-light text-sm mb-4">Your pre-order helps {kanyamma.name} reach customers across India — and earn fairly for her craft.</p>
              <div className="space-y-4">
                {nelpadamChart.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-ink-light">{b.label}</span>
                      <span className="font-bold text-cream">{b.amount}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-ink-mid/40 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${b.percent}%`, background: b.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-maroon-light italic">
                Your pre-order gives her the confidence to prepare in advance.
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-ink font-bold mb-3">
              Ready to support Kanyamma?
            </p>
            <p className="text-ink-mid mb-8 text-base">
              Place your order today. She prepares fresh only when ordered.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#kanyamma-crops" className="btn-primary btn-lg">
                Yes! Pre-Order Sweets →
              </a>

              <a
                href="https://wa.me/918301061753"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat with Kanyamma
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm text-ink-mid">
              {[
                "🍬 Kanyamma prepares fresh only when you order",
                "📦 Hand-packed with traditional care",
                "❤️ No advance payment — pay on dispatch",
              ].map((t) => (
                <span key={t} className="bg-maroon-pale/50 rounded-full px-4 py-2">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
