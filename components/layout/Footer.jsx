export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#2C1A0E] text-[#E8D4B0]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        {/* Top — brand + story close */}
        <div className="border-b border-[#5C3317] pb-10 mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M16 28C16 28 8 22 8 14C8 9 11.5 6 16 6C20.5 6 24 9 24 14C24 22 16 28 16 28Z" fill="#8FB87A" opacity="0.8"/>
              <path d="M16 28 L16 12" stroke="#E8D4B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <div>
              <div className="font-serif text-xl font-bold">Nelpadam</div>
              <div className="text-[#A0522D] text-[9px] tracking-[0.25em] uppercase">Farms · Est. 1976</div>
            </div>
          </div>

          <p className="font-serif italic text-[#DBBF97] text-xl md:text-2xl max-w-xl mx-auto leading-relaxed">
            "Every pre-order is a promise — from your kitchen to our farm."
          </p>
        </div>

        {/* Links row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-[#C9930A] text-xs font-bold tracking-[0.2em] uppercase mb-4">The Story</h5>
            <ul className="space-y-2 text-sm text-[#DBBF97]">
              {["Govindan's Story", "The Land", "Our Crops", "Why Nelpadam"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[#C9930A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Pre-Order</h5>
            <ul className="space-y-2 text-sm text-[#DBBF97]">
              {["Black Pepper", "Tamarind", "Turmeric", "Coconut Oil"].map(l => (
                <li key={l}><a href="#crops" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[#C9930A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Connect</h5>
            <ul className="space-y-2 text-sm text-[#DBBF97]">
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp Govindan</a></li>
              <li><span>Kottarakkara, Kerala</span></li>
              <li><span>hello@nelpadam.in</span></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#C9930A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Policies</h5>
            <ul className="space-y-2 text-sm text-[#DBBF97]">
              {["Harvest Guarantee", "Shipping Info", "Refund Policy", "Privacy"].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5C3317] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8B6040]">
          <span>© {year} Nelpadam Farms, Kottarakkara, Kerala. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Made with <span className="text-red-400">❤️</span> to support rural farmers
          </span>
        </div>
      </div>
    </footer>
  );
}
