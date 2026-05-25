import { impactStats } from "@/data/products";

export default function SocialProof() {
  return (
    <div className="bg-leaf-mid/10 border-y border-leaf-pale/30 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {impactStats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-serif text-2xl md:text-3xl font-bold text-leaf">{s.number}</div>
                <div className="text-ink-mid text-xs tracking-wide">{s.label}</div>
              </div>
              {i < impactStats.length - 1 && (
                <span className="hidden md:block text-ink-pale text-lg">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
