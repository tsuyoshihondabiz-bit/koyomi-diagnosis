import { FORTUNE_TELLER } from '@/data/lp-content';

export default function FortunetellerProfile() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="sparkle-star absolute text-gold/15 text-lg top-[10%] right-[10%]" style={{ animationDelay: '0.5s' }}>✧</span>
        <span className="sparkle-star absolute text-mystic/15 text-sm bottom-[15%] left-[8%]" style={{ animationDelay: '2s' }}>✦</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="sparkle-star text-[8px]">✦</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold/40 text-xs">☽</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
            <span className="sparkle-star text-[8px]" style={{ animationDelay: '1s' }}>✦</span>
          </div>
          <p className="text-gold-dim text-[10px] tracking-[0.4em] uppercase">Fortune Teller</p>
        </div>

        <div className="text-center mb-10">
          {/* Avatar with ornate frame */}
          <div className="profile-frame inline-block mb-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-gold/40 flex items-center justify-center"
                 style={{
                   background: 'linear-gradient(135deg, rgba(14,18,50,0.9), rgba(30,28,60,0.9))',
                   boxShadow: '0 0 40px rgba(201,168,76,0.15), inset 0 0 30px rgba(201,168,76,0.05)',
                 }}>
              <span className="font-serif text-gradient-gold text-3xl sm:text-4xl font-bold">
                {FORTUNE_TELLER.name}
              </span>
            </div>
          </div>

          {/* Name with ornamental styling */}
          <div className="mb-2">
            <h2 className="font-serif text-gradient-gold text-2xl sm:text-3xl font-bold"
                style={{ textShadow: '0 0 30px rgba(201,168,76,0.2)' }}>
              {FORTUNE_TELLER.title}　{FORTUNE_TELLER.name}
            </h2>
          </div>
          <p className="font-display italic text-text-dim/40 text-xs tracking-[0.3em]">
            {FORTUNE_TELLER.nameReading}
          </p>
        </div>

        {/* Bio in ornate frame */}
        <div className="frame-card p-6 sm:p-8 mb-10">
          <div className="space-y-3">
            {FORTUNE_TELLER.bio.map((line, i) => (
              <p key={i} className="text-text/80 text-sm leading-[2] text-center">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Specialties as ornate badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FORTUNE_TELLER.specialties.map((s, i) => (
            <span
              key={i}
              className="text-xs text-gold tracking-wider border border-gold/25 rounded-full px-5 py-2"
              style={{ background: 'rgba(201,168,76,0.05)' }}
            >
              <span className="sparkle-star text-[6px] mr-1.5" style={{ animationDelay: `${i * 0.5}s` }}>✦</span>
              {s}
            </span>
          ))}
        </div>

        {/* Quote in decorative frame */}
        <div className="frame-card corner-ornament p-8 sm:p-10 text-center">
          <div className="text-gold/30 text-3xl mb-4 font-display">&ldquo;</div>
          <blockquote className="font-serif text-text/80 text-base sm:text-lg leading-[2] italic mb-4">
            {FORTUNE_TELLER.quote}
          </blockquote>
          <div className="text-gold/30 text-3xl font-display">&rdquo;</div>
          <div className="mt-4">
            <span className="text-gold-dim text-xs tracking-wider">── {FORTUNE_TELLER.title}　{FORTUNE_TELLER.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
