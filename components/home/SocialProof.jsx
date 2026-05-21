import { impactStats } from "@/data/products";

export default function SocialProof() {
  return (
    <div className="bg-[#3A6B35] py-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {impactStats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-[#E8D4B0]">{s.number}</div>
                <div className="text-[#8FB87A] text-xs tracking-wide">{s.label}</div>
              </div>
              {i < impactStats.length - 1 && (
                <span className="hidden md:block text-[#5C8A3C] text-2xl">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
