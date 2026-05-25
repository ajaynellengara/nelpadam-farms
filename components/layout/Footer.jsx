import { farmer } from "@/data/products";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050D0B] text-soil-base border-t border-soil-base-deep">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        {/* Top — brand + story close */}
        <div className="border-b border-[#2B4E44]/20 pb-10 mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              {/* Sun behind the barn */}
              <circle cx="26" cy="14" r="8" fill="#F59E0B" opacity="0.9" />
              {/* Barn silhouette */}
              <path d="M4 30V18L14 10L24 18V30H4Z" fill="#FAF9F6" />
              {/* Barn door */}
              <path d="M11 30V22H17V30H11Z" fill="#1E463E" />
            </svg>
            <div className="text-left">
              <div className="font-serif text-xl font-bold text-white tracking-tight">Lewis Farm</div>
              <div className="text-gold text-[9px] tracking-[0.25em] uppercase font-semibold">Est. 1976</div>
            </div>
          </div>

          <p className="font-serif italic text-leaf-pale/80 text-xl md:text-2xl max-w-xl mx-auto leading-relaxed">
            "Every pre-order is a promise — from your kitchen to our farm."
          </p>
        </div>

        {/* Links row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">The Story</h5>
            <ul className="space-y-2 text-sm text-leaf-pale/75">
              {["Govindan's Story", "The Land", "Our Crops", "Why Nelpadam"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Pre-Order</h5>
            <ul className="space-y-2 text-sm text-leaf-pale/75">
              {["Black Pepper", "Tamarind", "Turmeric", "Coconut Oil"].map(l => (
                <li key={l}><a href="#crops" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Connect</h5>
            <ul className="space-y-2 text-sm text-leaf-pale/75">
              <li><a href={`https://wa.me/${farmer.whatsApp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp Govindan</a></li>
              <li><span>Kottarakkara, Kerala</span></li>
              <li><span>hello@nelpadam.in</span></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Policies</h5>
            <ul className="space-y-2 text-sm text-leaf-pale/75">
              {["Harvest Guarantee", "Shipping Info", "Refund Policy", "Privacy"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2B4E44]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-soil-mid/60">
          <span>© {year} Lewis Farms, Kottarakkara, Kerala. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Made with <span className="text-red-400">❤️</span> to support rural farmers
          </span>
        </div>
      </div>
    </footer>
  );
}
