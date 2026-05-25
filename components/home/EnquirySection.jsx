"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { products, farmer } from "@/data/products";

export default function EnquirySection() {
  const [form, setForm] = useState({ name: "", city: "", product: "", qty: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const buildWhatsApp = () => {
    const p = products.find((x) => x.slug === form.product);
    const msg = encodeURIComponent(
      `Namaskaram Govindan! 🙏\n\nI'd like to pre-order from Nelpadam Farms.\n\nName: ${form.name}\nCity: ${form.city}\nProduct: ${p ? p.name : form.product || "General enquiry"}\nQuantity: ${form.qty} unit(s)\n\nMessage: ${form.message || "Please share harvest timeline and payment details."}\n\n— Sent from nelpadam.in`
    );
    return `https://wa.me/918301061753?text=${msg}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="preorder" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="section-sub">Chapter 04</span>
          <span className="w-8 h-px bg-clay/30" />
          <h2 className="section-heading">Reserve your harvest</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-ink-mid text-lg leading-relaxed mb-8 font-serif italic">
              Fill this form and Govindan will send you a WhatsApp message confirming your pre-order, harvest date, and payment link.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: "📋", title: "WhatsApp confirmation", desc: "Govindan personally confirms your order within 2 hours." },
                { icon: "🗓", title: "Harvest date update", desc: "You get notified when your crop is ready to be packed." },
                { icon: "📦", title: "Ships within 24hrs", desc: "Packed by hand and shipped the day of or after harvest." },
                { icon: "💰", title: "Pay at shipping", desc: "No advance. Pay via UPI, bank transfer, or COD when it ships." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-leaf-pale/60 flex items-center justify-center text-lg">
                    {icon}
                  </div>
                  <div>
                    <div className="text-ink text-sm font-semibold">{title}</div>
                    <div className="text-ink-light text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918301061753"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Message Govindan directly
            </a>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-cream-deep">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4 animate-bounce">🧑‍🌾🎉</div>
                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                  Govindan is doing a happy dance!
                </h3>
                <p className="text-ink-mid mb-2">Your pre-order request has been noted.</p>
                <p className="text-ink-mid text-sm mb-8">
                  Click below to send it directly to Govindan on WhatsApp — he&apos;ll reply within 2 hours.
                </p>
                <a
                  href={buildWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-ink mb-1">Pre-Order Form</h3>
                <p className="text-ink-mid text-sm mb-7">
                  Takes 30 seconds. Govindan will confirm on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="section-sub block mb-1.5">Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Priya Mehta"
                        className="w-full border border-cream-deep rounded-xl px-4 py-3 text-ink text-sm bg-cream placeholder:text-ink-pale focus:outline-none focus:border-leaf transition-colors"/>
                    </div>
                    <div>
                      <label className="section-sub block mb-1.5">Your City *</label>
                      <input type="text" name="city" required value={form.city} onChange={handleChange}
                        placeholder="Mumbai"
                        className="w-full border border-cream-deep rounded-xl px-4 py-3 text-ink text-sm bg-cream placeholder:text-ink-pale focus:outline-none focus:border-leaf transition-colors"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="section-sub block mb-1.5">Product</label>
                      <select name="product" value={form.product} onChange={handleChange}
                        className="w-full border border-cream-deep rounded-xl px-4 py-3 text-ink text-sm bg-cream focus:outline-none focus:border-leaf transition-colors cursor-pointer appearance-none">
                        <option value="">Select crop...</option>
                        {products.map((p) => (
                          <option key={p.slug} value={p.slug}>{p.name} — {p.price}/{p.unit}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="section-sub block mb-1.5">Quantity</label>
                      <select name="qty" value={form.qty} onChange={handleChange}
                        className="w-full border border-cream-deep rounded-xl px-4 py-3 text-ink text-sm bg-cream focus:outline-none focus:border-leaf transition-colors cursor-pointer appearance-none">
                        {["1","2","3","4","5","6+"].map(q => <option key={q} value={q}>{q} unit{q !== "1" ? "s" : ""}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="section-sub block mb-1.5">Message to Govindan</label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                      placeholder="Any questions about the crop, delivery, or payment..."
                      className="w-full border border-cream-deep rounded-xl px-4 py-3 text-ink text-sm bg-cream placeholder:text-ink-pale focus:outline-none focus:border-leaf transition-colors resize-none"/>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="submit"
                      className="btn-primary flex-1 justify-center text-sm">
                      Send Pre-Order Request
                    </button>
                    <a href={buildWhatsApp()} target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp flex-1 justify-center text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
