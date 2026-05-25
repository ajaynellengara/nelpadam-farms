// FarmHistory — Meet Govindan Nair chapter
import Image from "next/image";
import { chapters, farmer } from "@/data/products";

export default function FarmHistory() {
  return (
    <section id="story" className="py-20 soil-diagonal-bg overflow-hidden texture-overlay border-b border-[#E5E0D5]">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Chapter header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="font-serif text-7xl font-bold text-soil-base-alt select-none leading-none">01</div>
          <div>
            <div className="chapter-label text-clay mb-1">The Story</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soil">
              Meet Govindan Nair
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — real farmer portrait + glass quote */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-soil-base-deep shadow-xl aspect-[3/4] bg-soil-base-alt">
              <Image
                src="/images/govindan.png"
                alt="Govindan Nair — Nelpadam Farms"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-soil/70 via-transparent to-transparent" />
              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-4">
                  <div className="font-serif font-bold text-soil text-base">{farmer.name}</div>
                  <div className="text-soil-mid text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
              {/* Kolam badge top-left */}
              <div className="absolute top-4 left-4 bg-gold text-soil rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase shadow-md">
                Est. 1976
              </div>
            </div>

            {/* Quote card */}
            <div className="mt-5 bg-soil rounded-2xl p-6 text-soil-base relative shadow-lg">
              <div className="absolute -top-4 left-6 text-5xl text-gold font-serif leading-none">"</div>
              <p className="font-serif italic text-lg leading-relaxed mt-3 text-soil-base-alt">
                {farmer.quote}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-soil-mid">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-soil font-bold text-sm font-serif">G</div>
                <div>
                  <div className="font-bold text-sm text-soil-base">{farmer.name}</div>
                  <div className="text-leaf-pale/70 text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Story chapters */}
          <div>
            <p className="text-soil-mid text-lg leading-relaxed mb-10 italic font-serif">
              This is not just about buying spices. It is about reading four lines below and understanding why they matter.
            </p>

            <div className="space-y-8">
              {chapters.map((ch, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* Chapter number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-soil-base-alt border-2 border-soil-base-deep group-hover:border-gold group-hover:bg-gold/10 transition-all flex items-center justify-center font-serif font-bold text-clay group-hover:text-soil">
                      {ch.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-soil mb-2 group-hover:text-tamarind transition-colors">
                      {ch.title}
                    </h4>
                    <p className="text-soil-mid leading-relaxed text-base">{ch.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The punchline */}
            <div className="mt-10 bg-soil-base-alt rounded-2xl p-6 border-l-4 border-gold shadow-sm">
              <p className="text-soil font-semibold text-base">
                Without Nelpadam, Govindan earns <strong className="text-terracotta">₹180</strong> per kg of pepper.
                With Nelpadam, he earns <strong className="text-leaf">₹620</strong> per kg.
              </p>
              <p className="text-soil-mid text-sm mt-2">
                The difference is every middleman we skipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
