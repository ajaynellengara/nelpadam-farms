"use client";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsSlider() {
  return (
    <section id="crops" className="py-24 soil-strata-bg texture-overlay overflow-hidden border-b border-soil-base-deep">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Chapter header */}
        <div className="flex items-start gap-5 mb-5">
          <div className="font-serif text-8xl font-bold text-soil-base-deep select-none leading-none shrink-0 -mt-2">02</div>
          <div>
            <div className="chapter-label text-clay mb-2">What's Growing</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-soil leading-tight">
              Pre-Order the Harvest
            </h2>
          </div>
        </div>

        <p className="text-soil-mid text-base mb-4 max-w-xl md:ml-[calc(5.5rem+1.25rem)]">
          These crops are growing right now on Govindan's land. Pre-order your share — he harvests, packs, and ships directly when ready.
        </p>

        {/* Kolam divider */}
        <div className="kolam-divider mb-12 md:ml-[calc(5.5rem+1.25rem)]" />

        {/* Product photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="crop-card group block aspect-[3/4] cursor-pointer"
            >
              {/* Photo */}
              <div className="absolute inset-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="crop-img object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Top pills */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                <span className="glass-pill">{product.badge}</span>
                <span className="glass-pill">⏳ {product.harvestMonths}mo</span>
              </div>

              {/* Glass info overlay */}
              <div className="glass-card-overlay z-10">
                {/* Field status */}
                <div className="text-[10px] text-leaf-pale font-medium mb-1.5 tracking-wide">
                  {product.fieldStatus}
                </div>

                {/* Local name */}
                <div className="text-gold text-xs font-semibold tracking-wider uppercase mb-1">
                  {product.localName}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-2 group-hover:text-gold-light transition-colors">
                  {product.name}
                </h3>

                <p className="text-soil-base-alt text-xs leading-relaxed mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.shortDesc}
                </p>

                {/* Price + count row */}
                <div className="flex items-end justify-between border-t border-white/10 pt-2.5">
                  <div>
                    <div className="font-serif text-xl font-bold text-white">{product.price}</div>
                    <div className="text-white/50 text-[10px]">{product.unit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-leaf-pale text-xs font-bold">{product.preorderCount}</div>
                    <div className="text-white/40 text-[10px]">pre-ordered</div>
                  </div>
                </div>

                {/* Pre-order CTA */}
                <div
                  className="mt-3 text-center py-2 rounded-full text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ background: '#1E463E', color: '#FAF9F6' }}
                >
                  Pre-Order Now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tile stripe accent */}
        <div className="tile-stripe mt-12 opacity-40" />

        {/* Bottom note */}
        <p className="text-center text-soil-mid text-xs mt-5 italic">
          * No advance payment. You pay only when Govindan ships your harvest.
        </p>
      </div>
    </section>
  );
}
