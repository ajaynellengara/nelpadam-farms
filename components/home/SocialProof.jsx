import { impactStats } from "@/data/products";

export default function SocialProof() {
  return (
    <div className="bg-leaf py-6 overflow-hidden shadow-inner border-y border-[#142923]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {impactStats.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-center md:text-left md:flex md:items-baseline md:gap-2">
                <div className="font-serif text-3xl font-extrabold text-soil-base leading-none">{s.number}</div>
                <div className="text-leaf-pale text-xs tracking-wider uppercase font-semibold mt-1 md:mt-0">{s.label}</div>
              </div>
              {i < impactStats.length - 1 && (
                <span className="hidden md:block text-leaf-light text-2xl font-bold opacity-45">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
