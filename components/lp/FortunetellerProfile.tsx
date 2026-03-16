import Image from 'next/image';
import { FORTUNE_TELLER } from '@/data/lp-content';

export default function FortunetellerProfile() {
  return (
    <section id="fortune-teller" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="sparkle-star absolute text-gold/15 text-lg top-[10%] right-[10%]" style={{ animationDelay: '0.5s' }}>✧</span>
        <span className="sparkle-star absolute text-mystic/15 text-sm bottom-[15%] left-[8%]" style={{ animationDelay: '2s' }}>✦</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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

        {/* Stitch-style horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start mb-10">
          {/* Left: Photo + Name */}
          <div className="text-center">
            {/* Avatar with ornate frame */}
            <div className="profile-frame inline-block mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-gold/40 overflow-hidden"
                   style={{
                     boxShadow: '0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)',
                   }}>
                <Image
                  src="/images/profile.png"
                  alt={`${FORTUNE_TELLER.title} ${FORTUNE_TELLER.name}`}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
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

            {/* Specialties as badges under name */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {FORTUNE_TELLER.specialties.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] text-gold tracking-wider border border-gold/25 rounded-full px-3 py-1"
                  style={{ background: 'rgba(201,168,76,0.05)' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Bio + Stats */}
          <div>
            {/* Bio in ornate frame */}
            <div className="frame-card p-6 sm:p-8 mb-6">
              <div className="space-y-3">
                {FORTUNE_TELLER.bio.map((line, i) => (
                  <p key={i} className="text-text/80 text-sm leading-[2]">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats badges - Stitch style */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="frame-card p-4 text-center">
                <p className="text-gold-dim text-[10px] tracking-wider mb-1">鑑定実績</p>
                <p className="font-serif text-gradient-gold text-2xl sm:text-3xl font-bold">30,000<span className="text-sm">件+</span></p>
              </div>
              <div className="frame-card p-4 text-center">
                <p className="text-gold-dim text-[10px] tracking-wider mb-1">的中率満足度</p>
                <p className="font-serif text-gradient-gold text-2xl sm:text-3xl font-bold">98.2<span className="text-sm">%</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote in decorative frame - full width */}
        <div className="frame-card corner-ornament p-8 sm:p-10 text-center max-w-2xl mx-auto">
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
