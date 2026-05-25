"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { products, farmer } from "@/data/products";

export default function EnquirySection() {
  const [form, setForm] = useState({ name: "", city: "", product: "", qty: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [celebrated, setCelebrated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { product, qty } = router.query;
      if (product || qty) {
        setForm((prev) => ({
          ...prev,
          product: product ? String(product) : prev.product,
          qty: qty ? String(qty) : prev.qty,
        }));
      }
    }
  }, [router.isReady, router.query]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const buildWhatsApp = () => {
    const p = products.find((x) => x.slug === form.product);
    const msg = encodeURIComponent(
      `Namaskaram Govindan! 🙏\n\nI'd like to pre-order from Nelpadam Farms.\n\nName: ${form.name}\nCity: ${form.city}\nProduct: ${p ? p.name : form.product || "General enquiry"}\nQuantity: ${form.qty} unit(s)\n\nMessage: ${form.message || "Please share harvest timeline and payment details."}\n\n— Sent from nelpadam.in`
    );
    return `https://wa.me/${farmer.whatsApp}?text=${msg}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 1500);
  };

  return (
    <section id="preorder" className="py-20 bg-[#0B1B17] relative overflow-hidden texture-overlay border-b border-soil-base-deep">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none"/>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-leaf/10 blur-2xl pointer-events-none"/>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Chapter header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="font-serif text-7xl font-bold text-white/5 select-none leading-none">04</div>
          <div>
            <div className="chapter-label text-gold mb-1">Pre-Order Your Share</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soil-base">
              Reserve your harvest
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — messaging (2/5) */}
          <div className="lg:col-span-2">
            <p className="text-leaf-pale/85 text-lg leading-relaxed mb-8 font-serif italic">
              Fill this form and Govindan will send you a WhatsApp message confirming your pre-order, harvest date, and payment link.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "📋", title: "WhatsApp confirmation", desc: "Govindan personally confirms your order within 2 hours." },
                { icon: "🗓", title: "Harvest date update", desc: "You get notified when your crop is ready to be packed." },
                { icon: "📦", title: "Ships within 24hrs", desc: "Packed by hand and shipped the day of or after harvest." },
                { icon: "💰", title: "Pay at shipping", desc: "No advance. Pay via UPI, bank transfer, or COD when it ships." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-leaf-mid/30 flex items-center justify-center text-lg shadow-sm border border-leaf-light/10">
                    {icon}
                  </div>
                  <div>
                    <div className="text-soil-base text-sm font-semibold">{title}</div>
                    <div className="text-leaf-pale/60 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/${farmer.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse support-btn inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-4 rounded-full shadow-lg text-sm"
            >
              <span className="farmer-emojis">🧑‍🌾😊</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Message Govindan directly
            </a>
          </div>

          {/* Right — Form (3/5) */}
          <div className="lg:col-span-3 bg-soil-base-alt rounded-3xl p-8 lg:p-10 shadow-2xl border border-soil-base-deep">
            {submitted ? (
              <div className="text-center py-10">
                {/* Farmer celebration */}
                <div className="text-6xl mb-4 animate-[bounce_0.5s_ease_3]">🧑‍🌾🎉</div>
                <h3 className="font-serif text-2xl font-bold text-soil mb-3">
                  Govindan is doing a happy dance! 🕺
                </h3>
                <p className="text-soil-mid mb-2">Your pre-order request has been noted.</p>
                <p className="text-soil-mid text-sm mb-8">
                  Click below to send it directly to Govindan on WhatsApp — he'll reply within 2 hours.
                </p>
                <a
                  href={buildWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-pulse support-btn inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-full shadow-lg"
                >
                  <span className="farmer-emojis">🧑‍🌾😊✨</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-soil mb-1">Pre-Order Form</h3>
                <p className="text-soil-mid text-sm mb-7">
                  Takes 30 seconds. Govindan will confirm on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="chapter-label text-clay block mb-1.5">Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Priya Mehta"
                        className="w-full border border-soil-base-deep rounded-xl px-4 py-3 text-soil text-sm bg-white placeholder:text-soil-mid/30 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all shadow-sm"/>
                    </div>
                    <div>
                      <label className="chapter-label text-clay block mb-1.5">Your City *</label>
                      <input type="text" name="city" required value={form.city} onChange={handleChange}
                        placeholder="Mumbai"
                        className="w-full border border-soil-base-deep rounded-xl px-4 py-3 text-soil text-sm bg-white placeholder:text-soil-mid/30 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all shadow-sm"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="chapter-label text-clay block mb-1.5">Product</label>
                      <div className="relative">
                        <select name="product" value={form.product} onChange={handleChange}
                          className="w-full border border-soil-base-deep rounded-xl px-4 py-3 text-soil text-sm bg-white focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all cursor-pointer appearance-none shadow-sm">
                          <option value="">Select crop...</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.slug}>{p.name} — {p.price}/{p.unit}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-soil-mid/60 text-xs">▼</div>
                      </div>
                    </div>
                    <div>
                      <label className="chapter-label text-clay block mb-1.5">Quantity</label>
                      <div className="relative">
                        <select name="qty" value={form.qty} onChange={handleChange}
                          className="w-full border border-soil-base-deep rounded-xl px-4 py-3 text-soil text-sm bg-white focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all cursor-pointer appearance-none shadow-sm">
                          {["1","2","3","4","5","6+"].map(q => <option key={q} value={q}>{q} unit{q !== "1" ? "s" : ""}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-soil-mid/60 text-xs">▼</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="chapter-label text-clay block mb-1.5">Message to Govindan</label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                      placeholder="Any questions about the crop, delivery, or payment..."
                      className="w-full border border-soil-base-deep rounded-xl px-4 py-3 text-soil text-sm bg-white placeholder:text-soil-mid/30 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all resize-none shadow-sm"/>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="submit"
                      className={`support-btn flex-1 bg-soil text-soil-base font-bold py-4 rounded-xl hover:bg-clay-light transition-all shadow-md ${celebrated ? "celebrate" : ""}`}>
                      <span className="farmer-emojis">🧑‍🌾😊🌾✨</span>
                      Send Pre-Order Request
                    </button>
                    <a href={buildWhatsApp()} target="_blank" rel="noopener noreferrer"
                      className="support-btn flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl transition-all shadow-md">
                      <span className="farmer-emojis">👋😊</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
