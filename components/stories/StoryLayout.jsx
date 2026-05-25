import Image from "next/image";

const themes = {
  govindan: {
    sectionBg: "bg-cream-alt",
    borderAccent: "bg-clay/30",
    quoteAccent: "text-gold",
    avatarBg: "bg-gold",
    avatarText: "text-ink",
    circleBorder: "border-cream-deep",
    circleHover: "group-hover:border-gold group-hover:bg-gold/5",
    circleText: "text-ink-mid",
    chapterHover: "group-hover:text-tamarind",
    infoBoxBg: "bg-cream-deep",
    infoBoxBorder: "border-gold",
    infoAccent: "text-clay",
    infoAccentAlt: "text-leaf",
  },
  kanyamma: {
    sectionBg: "bg-maroon-pale/30",
    borderAccent: "bg-maroon/30",
    quoteAccent: "text-maroon",
    avatarBg: "bg-maroon",
    avatarText: "text-white",
    circleBorder: "border-maroon-pale",
    circleHover: "group-hover:border-maroon group-hover:bg-maroon-pale/30",
    circleText: "text-ink-mid",
    chapterHover: "group-hover:text-maroon",
    infoBoxBg: "bg-maroon-pale/50",
    infoBoxBorder: "border-maroon",
    infoAccent: "text-maroon",
    infoAccentAlt: "text-gold",
  },
};

export default function StoryLayout({
  farmer,
  chapters,
  imageSrc,
  establishedYear,
  chapterLabel = "Chapter 01",
  heading,
  storyIntro,
  infoBox,
  themeName = "govindan",
  id,
}) {
  const t = themes[themeName] || themes.govindan;
  const initial = farmer.name.charAt(0);

  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${t.sectionBg} overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="section-sub">{chapterLabel}</span>
          <span className={`w-8 h-px ${t.borderAccent}`} />
          <h2 className="section-heading">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[3/4] bg-cream-deep">
              <Image
                src={imageSrc}
                alt={`${farmer.name} — Nelpadam Farms`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl p-4">
                  <div className="font-serif font-bold text-ink text-base">{farmer.name}</div>
                  <div className="text-ink-mid text-xs">{farmer.detail}</div>
                </div>
              </div>
              {establishedYear && (
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-ink-mid rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  {establishedYear}
                </div>
              )}
            </div>

            <div className="mt-5 bg-ink rounded-2xl p-6 text-cream relative">
              <div className={`absolute -top-4 left-6 text-5xl ${t.quoteAccent} font-serif leading-none`}>&quot;</div>
              <p className="font-serif italic text-lg leading-relaxed mt-3">
                {farmer.quote}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-ink-mid/40">
                <div className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center ${t.avatarText} font-bold text-sm font-serif`}>
                  {initial}
                </div>
                <div>
                  <div className="font-bold text-sm text-cream">{farmer.name}</div>
                  <div className="text-ink-light text-xs">{farmer.detail}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-ink-mid text-lg leading-relaxed mb-10 italic font-serif">
              {storyIntro}
            </p>

            <div className="space-y-8">
              {chapters.map((ch, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-cream-deep border-2 ${t.circleBorder} ${t.circleHover} transition-all flex items-center justify-center font-serif font-bold ${t.circleText} group-hover:text-ink`}>
                      {ch.number}
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-serif text-xl font-bold text-ink mb-2 ${t.chapterHover} transition-colors`}>
                      {ch.title}
                    </h4>
                    <p className="text-ink-mid leading-relaxed text-base">{ch.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {infoBox && (
              <div className={`mt-10 ${t.infoBoxBg} rounded-xl p-6 border-l-4 ${t.infoBoxBorder}`}>
                {infoBox.lines.map((line, i) => (
                  <p key={i} className={i === 0 ? "text-ink font-semibold text-base" : "text-ink-mid text-sm mt-2"}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
