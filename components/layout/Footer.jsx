export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="border-b border-ink-mid/30 pb-10 mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M16 28C16 28 8 22 8 14C8 9 11.5 6 16 6C20.5 6 24 9 24 14C24 22 16 28 16 28Z" fill="#7FB883" opacity="0.8"/>
              <path d="M16 28 L16 12" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <div>
              <div className="font-serif text-xl font-bold">Nelpadam</div>
              <div className="text-ink-light text-[8px] tracking-[0.3em] uppercase">Farms</div>
            </div>
          </div>
          <p className="font-serif italic text-ink-light text-xl md:text-2xl max-w-xl mx-auto leading-relaxed">
            &quot;Every pre-order is a promise — from your kitchen to our farm.&quot;
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">The Story</h5>
            <ul className="space-y-2 text-sm text-ink-light">
              {["Govindan's Story", "The Land", "Our Crops", "Why Nelpadam"].map(l => (
                <li key={l}><a href="#" className="hover:text-cream transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Pre-Order</h5>
            <ul className="space-y-2 text-sm text-ink-light">
              {["Black Pepper", "Tamarind", "Turmeric", "Coconut Oil"].map(l => (
                <li key={l}><a href="#crops" className="hover:text-cream transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Connect</h5>
            <ul className="space-y-2 text-sm text-ink-light">
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-leaf-light transition-colors">WhatsApp Govindan</a></li>
              <li><span>Kottarakkara, Kerala</span></li>
              <li><span>hello@nelpadam.in</span></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Policies</h5>
            <ul className="space-y-2 text-sm text-ink-light">
              {["Harvest Guarantee", "Shipping Info", "Refund Policy", "Privacy"].map(l => (
                <li key={l}><a href="#" className="hover:text-cream transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-mid/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-light">
          <span>© {year} Nelpadam Farms, Kottarakkara, Kerala. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Made with <span className="text-gold">❤️</span> to support rural farmers
          </span>
        </div>
      </div>
    </footer>
  );
}
