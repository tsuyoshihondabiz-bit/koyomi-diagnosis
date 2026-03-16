import { FORTUNE_TELLER } from '@/data/lp-content';

export default function FortunetellerProfile() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#060612]">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <p className="text-gold-dim text-[11px] tracking-[0.4em] uppercase text-center mb-10">
          Fortune Teller
        </p>

        <div className="text-center mb-10">
          {/* Avatar placeholder - circular with initials */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-6 border border-gold/20 bg-gradient-to-br from-[#0f0f25] to-[#1a1a35] flex items-center justify-center">
            <span className="font-serif text-gold text-2xl sm:text-3xl font-bold">
              {FORTUNE_TELLER.name}
            </span>
          </div>

          {/* Name */}
          <h2 className="font-serif text-gold text-xl sm:text-2xl font-bold mb-1">
            {FORTUNE_TELLER.title}　{FORTUNE_TELLER.name}
          </h2>
          <p className="font-display italic text-text-dim/50 text-xs tracking-[0.2em]">
            {FORTUNE_TELLER.nameReading}
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-3 mb-10">
          {FORTUNE_TELLER.bio.map((line, i) => (
            <p key={i} className="text-text/80 text-sm leading-[1.9] text-center">
              {line}
            </p>
          ))}
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FORTUNE_TELLER.specialties.map((s, i) => (
            <span
              key={i}
              className="text-[11px] text-gold-dim tracking-wider border border-gold/10 rounded-full px-4 py-1.5"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative max-w-lg mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mb-6" />
          <p className="font-serif text-text/70 text-sm sm:text-base leading-[2] italic">
            「{FORTUNE_TELLER.quote}」
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mt-6" />
        </blockquote>
      </div>
    </section>
  );
}
