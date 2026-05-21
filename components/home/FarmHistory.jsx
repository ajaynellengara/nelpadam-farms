// FarmHistory — Meet Govindan Nair chapter
import Image from "next/image";
import { chapters, farmer } from "@/data/products";


export default function FarmHistory() {
  return (
    <section id="story" className="py-20 soil-diagonal-bg overflow-hidden texture-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Chapter header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="font-serif text-7xl font-bold text-[#DBBF97] select-none leading-none">01</div>
          <div>
            <div className="chapter-label text-[#A0522D] mb-1">The Story</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E]">
              Meet Govindan Nair
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — real farmer portrait + glass quote */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#CCAA80] shadow-xl aspect-[3/4] bg-[#DBBF97]">
              <Image
                src="/images/govindan.png"
                alt="Govindan Nair — Nelpadam Farms"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/60 via-transparent to-transparent" />
              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-3">
                  <div className="font-serif font-bold text-[#2C1A0E] text-base">{farmer.name}</div>
                  <div className="text-[#5C3317] text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
              {/* Kolam badge top-left */}
              <div className="absolute top-4 left-4 bg-[#C9930A] text-[#2C1A0E] rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                Est. 1976
              </div>
            </div>

            {/* Quote card */}
            <div className="mt-5 bg-[#2C1A0E] rounded-2xl p-6 text-[#E8D4B0] relative">
              <div className="absolute -top-4 left-6 text-5xl text-[#C9930A] font-serif leading-none">"</div>
              <p className="font-serif italic text-lg leading-relaxed mt-3">
                {farmer.quote}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#5C3317]">
                <div className="w-9 h-9 rounded-full bg-[#C9930A] flex items-center justify-center text-[#2C1A0E] font-bold text-sm font-serif">G</div>
                <div>
                  <div className="font-bold text-sm">{farmer.name}</div>
                  <div className="text-[#8B6040] text-xs">{farmer.generation} farmer · {farmer.village}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Story chapters */}
          <div>
            <p className="text-[#5C3317] text-lg leading-relaxed mb-10 italic font-serif">
              This is not just about buying spices. It is about reading four lines below and understanding why they matter.
            </p>

            <div className="space-y-8">
              {chapters.map((ch, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* Chapter number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#DBBF97] border-2 border-[#CCAA80] group-hover:border-[#C9930A] group-hover:bg-[#C9930A]/10 transition-all flex items-center justify-center font-serif font-bold text-[#A0522D] group-hover:text-[#2C1A0E]">
                      {ch.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#2C1A0E] mb-2 group-hover:text-[#6B2D0F] transition-colors">
                      {ch.title}
                    </h4>
                    <p className="text-[#5C3317] leading-relaxed text-base">{ch.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The punchline */}
            <div className="mt-10 bg-[#DBBF97] rounded-2xl p-6 border-l-4 border-[#C9930A]">
              <p className="text-[#2C1A0E] font-semibold text-base">
                Without Nelpadam, Govindan earns <strong className="text-[#6B2D0F]">₹180</strong> per kg of pepper.
                With Nelpadam, he earns <strong className="text-[#3A6B35]">₹620</strong> per kg.
              </p>
              <p className="text-[#5C3317] text-sm mt-2">
                The difference is every middleman we skipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
