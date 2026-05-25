import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { products, farmer } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Larger crop art for detail page
const DetailArt = ({ product }) => {
  const arts = {
    "black-pepper": (
      <svg viewBox="0 0 360 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pepBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8DFB8" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#E8D4B0" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="180" cy="180" r="165" fill="url(#pepBg)"/>
        {/* Main vine */}
        <path d="M180 340 C180 295 176 255 172 215 C168 180 175 155 180 120 C183 100 180 75 180 50" stroke="#3A6B35" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Branches */}
        {[[172,215,135,195],[168,255,128,238],[180,165,210,148],[176,300,210,288]].map(([sx,sy,ex,ey],i)=>(
          <path key={i} d={`M${sx} ${sy} C${(sx+ex)/2} ${sy-15} ${ex} ${ey+5} ${ex} ${ey}`} stroke="#5C8A3C" strokeWidth="3" fill="none"/>
        ))}
        {/* Leaves */}
        {[[135,195],[128,238],[210,148],[210,288],[172,125],[185,90]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="24" ry="13" fill="#5C8A3C" opacity="0.68" transform={`rotate(${-25+i*20} ${x} ${y})`}/>
        ))}
        {/* Berry strand 1 */}
        {[195,210,225,240,255].map((y,i)=>(
          <circle key={i} cx={128+i*2} cy={y} r="10" fill="#1E1208" opacity="0.88"/>
        ))}
        {/* Berry strand 2 */}
        {[150,165,180,195].map((y,i)=>(
          <circle key={i} cx={212+i*2} cy={y} r="9" fill="#3A6B35" opacity="0.8"/>
        ))}
        <text x="180" y="355" textAnchor="middle" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="14" fill="#3A6B35" opacity="0.55" fontStyle="italic">Piper nigrum · Malabar Vine</text>
      </svg>
    ),
    "tamarind": (
      <svg viewBox="0 0 360 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="180" cy="180" r="165" fill="#F0D4B8" opacity="0.4"/>
        {/* Trunk */}
        <path d="M180 345 C178 305 182 265 180 220" stroke="#7B6534" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* Canopy clusters */}
        <circle cx="180" cy="155" r="80" fill="#5C8A3C" opacity="0.35"/>
        <circle cx="140" cy="138" r="58" fill="#3A6B35" opacity="0.38"/>
        <circle cx="218" cy="142" r="62" fill="#5C8A3C" opacity="0.32"/>
        <circle cx="180" cy="115" r="52" fill="#3A6B35" opacity="0.32"/>
        <circle cx="158" cy="165" r="40" fill="#5C8A3C" opacity="0.25"/>
        {/* Pods */}
        {[[165,155],[195,148],[148,130],[210,135],[175,120],[195,170],[155,172],[215,155]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="16" ry="6.5" fill="#6B2D0F" opacity="0.65" transform={`rotate(${15+i*32} ${x} ${y})`}/>
        ))}
        <text x="180" y="358" textAnchor="middle" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="14" fill="#6B2D0F" opacity="0.55" fontStyle="italic">Tamarindus indica · 75-year tree</text>
      </svg>
    ),
    "turmeric": (
      <svg viewBox="0 0 360 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="180" cy="180" r="165" fill="#F5DFA0" opacity="0.5"/>
        {/* Rhizome group */}
        {[[180,220,50,25],[155,235,44,22],[205,232,46,20],[140,250,38,18],[215,248,40,18],[168,262,36,16],[198,258,38,17]].map(([cx,cy,rx,ry],i)=>(
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="#C9930A" opacity={0.62+i*0.03} transform={`rotate(${-28+i*18} ${cx} ${cy})`}/>
        ))}
        {/* Lush leaves */}
        {[[170,155,75,16,-12],[192,135,68,15,8],[160,118,62,14,-6],[202,110,60,14,12],[150,100,55,12,-8]].map(([cx,cy,rx,ry,rot],i)=>(
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={i%2===0?"#5C8A3C":"#3A6B35"} opacity={0.65-i*0.03} transform={`rotate(${rot} ${cx} ${cy})`}/>
        ))}
        {/* Stems */}
        {[[175,220],[195,230]].map(([x,by],i)=>(
          <path key={i} d={`M${x} ${by} C${x+2} ${by-35} ${x-3} ${by-70} ${x} ${by-90}`} stroke="#5C8A3C" strokeWidth="3.5" fill="none"/>
        ))}
        <text x="180" y="358" textAnchor="middle" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="14" fill="#C9930A" opacity="0.6" fontStyle="italic">Curcuma aromatica · Kasturi Manjal</text>
      </svg>
    ),
    "coconut": (
      <svg viewBox="0 0 360 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="180" cy="180" r="165" fill="#F5E6D3" opacity="0.4"/>
        {/* Tall palm trunk */}
        <path d="M180 348 C178 305 182 260 176 210 C172 170 180 140 185 100" stroke="#7B6534" strokeWidth="14" fill="none" strokeLinecap="round"/>
        {/* Trunk rings */}
        {[330,305,280,255,230,205,185,165,145,128].map((y,i)=>(
          <path key={i} d={`M${173} ${y} Q180 ${y-5} ${187} ${y}`} stroke="#C9930A" strokeWidth="2" fill="none" opacity="0.4"/>
        ))}
        {/* Fronds */}
        {[
          [185,100,-90,-70,-162,-35],
          [185,100, 88,-65, 162,-30],
          [185,100,-60,-100,-75,-188],
          [185,100, 42,-106, 58,-196],
          [185,100,-120,-25,-198,12],
          [185,100, 118,-20, 202,20],
        ].map(([sx,sy,mx,my,ex,ey],i)=>(
          <path key={i} d={`M${sx} ${sy} Q${sx+mx} ${sy+my} ${sx+ex} ${sy+ey}`} stroke="#5C8A3C" strokeWidth={4.5-i*0.3} fill="none" strokeLinecap="round" opacity="0.82"/>
        ))}
        {/* Coconut cluster */}
        <circle cx="190" cy="113" r="24" fill="#C9930A" opacity="0.9"/>
        <circle cx="170" cy="122" r="21" fill="#A0522D" opacity="0.85"/>
        <circle cx="206" cy="125" r="18" fill="#C9930A" opacity="0.78"/>
        <circle cx="183" cy="130" r="15" fill="#6B3A1A" opacity="0.7"/>
        <text x="180" y="358" textAnchor="middle" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="14" fill="#A0522D" opacity="0.55" fontStyle="italic">Cocos nucifera · Cold-Pressed Oil</text>
      </svg>
    ),
  };
  return arts[product.slug] || (
    <svg viewBox="0 0 360 360" className="w-full h-full">
      <circle cx="180" cy="180" r="165" fill="#DBBF97" opacity="0.5"/>
      <text x="180" y="200" textAnchor="middle" fontSize="80">{product.emoji}</text>
    </svg>
  );
};

export async function getStaticPaths() {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug) || null;
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [qty, setQty] = useState(1);
  const [celebrated, setCelebrated] = useState(false);

  if (!product) return null;

  const related = products.filter((p) => p.slug !== product.slug);

  const buildWhatsApp = () => {
    const v = product.variants[selectedVariant];
    const msg = encodeURIComponent(
      `Namaskaram Govindan! 🙏\n\nI'd like to pre-order:\n\nProduct: ${product.name} (${product.localName})\nVariant: ${v.label} — ${v.price}\nQty: ${qty} unit(s)\n\n${product.whatsappMsg}`
    );
    return `https://wa.me/${farmer.whatsApp}?text=${msg}`;
  };

  const handlePreOrder = () => {
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 1200);
    window.open(buildWhatsApp(), "_blank");
  };

  return (
    <>
      <Head>
        <title>{product.name} (Pre-Order) — Nelpadam Farms</title>
        <meta name="description" content={product.shortDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-[#E8D4B0] min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-20 px-6 lg:px-10 max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#8B6040] pt-4">
            <Link href="/" className="hover:text-[#2C1A0E] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/#crops" className="hover:text-[#2C1A0E] transition-colors">The Crops</Link>
            <span>›</span>
            <span className="text-[#2C1A0E] font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Main detail */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Art */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden border-2 border-dashed p-8 aspect-square max-w-lg mx-auto relative"
                style={{ background: product.bgColor, borderColor: product.color + "50" }}
              >
                {/* Field status banner */}
                <div
                  className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold tracking-wider"
                  style={{ background: product.color, color: "#F2E6D0" }}
                >
                  {product.fieldStatus}
                </div>

                <div className="mt-6">
                  <DetailArt product={product} />
                </div>

                {/* Harvest badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#2C1A0E] text-[#E8D4B0] px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                  🗓 Harvest: {product.harvestLabel}
                </div>
              </div>

              {/* Pre-order count */}
              <div className="mt-5 bg-[#3A6B35] text-white rounded-2xl p-4 text-center shadow-md">
                <span className="text-2xl font-serif font-bold">{product.preorderCount}</span>
                <span className="text-[#8FB87A] text-sm ml-2">families from metro cities have pre-ordered this season</span>
                <div className="text-xs text-[#8FB87A] mt-1">🧑‍🌾 Govindan knows exactly how much to harvest</div>
              </div>
            </div>

            {/* Right — Info */}
            <div>
              {/* Local name badge */}
              <div
                className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wider"
                style={{ background: product.color + "18", color: product.color }}
              >
                {product.localName} · {product.category}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2C1A0E] leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-[#A0522D] font-serif italic text-lg mb-6">{product.tagline}</p>

              {/* Govindan's story about this crop */}
              <div className="bg-[#DBBF97] rounded-2xl p-5 mb-6 border-l-4" style={{ borderColor: product.color }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🧑‍🌾</span>
                  <span className="text-xs font-bold text-[#A0522D] tracking-wider uppercase">Govindan says:</span>
                </div>
                <p className="text-[#2C1A0E] font-serif italic leading-relaxed text-base">
                  "{product.story}"
                </p>
              </div>

              <p className="text-[#5C3317] text-base leading-relaxed mb-6">{product.description}</p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 mb-7">
                {product.benefits.map((b) => (
                  <span key={b} className="text-xs bg-[#DBBF97] text-[#5C3317] px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A6B35]" />{b}
                  </span>
                ))}
              </div>

              {/* Variant selector */}
              <div className="mb-5">
                <div className="chapter-label text-[#A0522D] mb-3">Select Size / Pack</div>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v, i) => (
                    <button key={i} onClick={() => setSelectedVariant(i)}
                      className={`flex flex-col items-center px-5 py-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                        i === selectedVariant
                          ? "border-[#2C1A0E] bg-[#2C1A0E] text-[#E8D4B0]"
                          : "border-[#DBBF97] bg-white text-[#2C1A0E] hover:border-[#C9930A]"
                      }`}>
                      <span className="font-bold text-sm">{v.label}</span>
                      <span className="font-serif text-base font-bold text-[#C9930A] mt-0.5">{v.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty + total */}
              <div className="flex items-center gap-8 mb-7">
                <div>
                  <div className="chapter-label text-[#A0522D] mb-2">Quantity</div>
                  <div className="flex items-center border-2 border-[#DBBF97] rounded-xl overflow-hidden bg-white">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center text-[#2C1A0E] hover:bg-[#DBBF97] transition-colors text-xl font-bold">−</button>
                    <span className="w-12 text-center font-bold text-[#2C1A0E]">{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 flex items-center justify-center text-[#2C1A0E] hover:bg-[#DBBF97] transition-colors text-xl font-bold">+</button>
                  </div>
                </div>
                <div>
                  <div className="chapter-label text-[#A0522D] mb-2">Total</div>
                  <div className="font-serif text-3xl font-bold text-[#2C1A0E]">
                    {product.variants[selectedVariant].price}
                    {qty > 1 && <span className="text-[#5C3317] text-sm font-sans font-normal ml-2">× {qty}</span>}
                  </div>
                </div>
              </div>

              {/* CTAs with farmer smile animation */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handlePreOrder}
                  className={`support-btn flex-1 flex items-center justify-center gap-2 bg-[#C9930A] text-[#2C1A0E] font-bold py-4 rounded-full text-base shadow-lg ${celebrated ? "celebrate" : ""}`}
                >
                  <span className="farmer-emojis">🧑‍🌾😊🌾🎉✨</span>
                  Pre-Order via WhatsApp
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </button>
                <Link href={`/?product=${product.slug}&qty=${qty}#preorder`}
                  className="support-btn flex-1 flex items-center justify-center border-2 border-[#2C1A0E] text-[#2C1A0E] font-bold py-4 rounded-full text-base hover:bg-[#2C1A0E] hover:text-[#E8D4B0] transition-all">
                  <span className="farmer-emojis">📝😊</span>
                  Fill Pre-Order Form
                </Link>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-3 text-xs text-[#8B6040]">
                {["✅ No advance payment", "🌾 Ships at harvest", "🤝 Fair price to Govindan", "📦 Packed by hand"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other crops */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16">
          <div className="border-t border-[#DBBF97] pt-14">
            <div className="chapter-label text-[#A0522D] mb-2">Also growing on Govindan's farm</div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-8">Other crops to pre-order</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}
                  className="harvest-card group block"
                  style={{ background: p.bgColor }}>
                  <div className="p-5 flex gap-4 items-center">
                    <div className="text-3xl">{p.emoji}</div>
                    <div>
                      <div className="font-serif font-bold text-[#2C1A0E] group-hover:text-[#6B2D0F] transition-colors">{p.name}</div>
                      <div className="text-[#5C3317] text-xs">{p.price} / {p.unit}</div>
                      <div className="text-[#3A6B35] text-xs font-bold mt-1">{p.fieldStatus}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-12">
          <Link href="/" className="text-[#8B6040] hover:text-[#2C1A0E] transition-colors text-sm flex items-center gap-2">
            ← Back to Nelpadam Farms
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
