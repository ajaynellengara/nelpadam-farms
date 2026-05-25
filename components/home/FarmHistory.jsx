import Image from "next/image";
import { chapters, farmer } from "@/data/products";

export default function FarmHistory() {
  return (
    <section id="story" className="py-16 md:py-24 lg:py-32 bg-cream-alt overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="section-sub">Chapter 01</span>
          <span className="w-8 h-px bg-clay/30" />
          <h2 className="section-heading">Meet Govindan Nair</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[3/4] bg-cream-deep">
              <Image
                src="/images/govindan.png"
                alt="Govindan Nair — Nelpadam Farms"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-4">
                  <div className="font-serif font-bold text-ink text-base">{farmer.name}</div>
                  <div className="text-ink-mid text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-ink-mid rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase shadow-sm">
                Est. 1976
              </div>
            </div>

            <div className="mt-5 bg-ink rounded-2xl p-6 text-cream relative">
              <div className="absolute -top-4 left-6 text-5xl text-gold font-serif leading-none">&quot;</div>
              <p className="font-serif italic text-lg leading-relaxed mt-3">
                {farmer.quote}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-ink-mid/40">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-ink font-bold text-sm font-serif">G</div>
                <div>
                  <div className="font-bold text-sm text-cream">{farmer.name}</div>
                  <div className="text-ink-light text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-ink-mid text-lg leading-relaxed mb-10 italic font-serif">
              This is not just about buying spices. It is about knowing where they come from and why that matters.
            </p>

            <div className="space-y-8">
              {chapters.map((ch, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-cream-deep border-2 border-cream-deep group-hover:border-gold group-hover:bg-gold/5 transition-all flex items-center justify-center font-serif font-bold text-ink-mid group-hover:text-ink">
                      {ch.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-tamarind transition-colors">
                      {ch.title}
                    </h4>
                    <p className="text-ink-mid leading-relaxed text-base">{ch.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-cream-deep rounded-xl p-6 border-l-4 border-gold">
              <p className="text-ink font-semibold text-base">
                Without Nelpadam, Govindan earns <strong className="text-clay">₹180</strong> per kg of pepper.
                With Nelpadam, he earns <strong className="text-leaf">₹620</strong> per kg.
              </p>
              <p className="text-ink-mid text-sm mt-2">
                The difference is every middleman we skipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
