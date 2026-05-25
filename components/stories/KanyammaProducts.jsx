"use client";
import Image from "next/image";
import { kanyammaProducts } from "@/data/products";

export default function KanyammaProducts() {
  return (
    <section id="kanyamma-crops" className="py-16 md:py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-sub">Chapter 02</span>
          <span className="w-8 h-px bg-maroon/30" />
          <h2 className="section-heading">Pre-Order the Sweets</h2>
        </div>

        <p className="text-ink-mid text-base mb-12 max-w-xl">
          Pre-order your favourite sweets — Kanyamma prepares them fresh only after you order. Zero wastage, zero tension, and the same traditional taste every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kanyammaProducts.map((product) => (
            <a
              key={product.slug}
              href={`#kanyamma-reserve`}
              className="group block rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-ink text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-ink-light text-[10px] font-semibold tracking-wider uppercase mb-0.5">
                  {product.localName}
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-1 group-hover:text-maroon transition-colors">
                  {product.name}
                </h3>
                <p className="text-ink-light text-xs leading-relaxed line-clamp-2 mb-3">
                  {product.shortDesc}
                </p>

                <div className="flex items-end justify-between pt-3 border-t border-cream-deep">
                  <div>
                    <div className="font-serif text-xl font-bold text-ink">{product.price}</div>
                    <div className="text-ink-pale text-[10px]">{product.unit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-maroon text-xs font-bold">{product.preorderCount}</div>
                    <div className="text-ink-pale text-[10px]">ordered</div>
                  </div>
                </div>

                <div className="mt-3 btn-sm text-center transition-all duration-300 bg-cream-alt text-ink-mid group-hover:bg-maroon group-hover:text-white">
                  Pre-Order Now →
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-ink-light text-xs mt-8 italic">
          * Pre-order now, pay only when dispatched. Kanyamma prepares fresh after your order — zero wastage.
        </p>
      </div>
    </section>
  );
}
