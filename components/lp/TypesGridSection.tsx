'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ZODIAC_ORDER, ZODIAC_SYMBOLS } from '@/data/lp-content';
import typesData from '@/data/types-108.json';
import SectionHeading from './SectionHeading';

export default function TypesGridSection() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const typesByZodiac = useMemo(() => {
    const grouped: Record<string, typeof typesData> = {};
    for (const z of ZODIAC_ORDER) {
      grouped[z] = typesData.filter((t) => t.zodiac === z);
    }
    return grouped;
  }, []);

  const visibleZodiacs = showAll ? ZODIAC_ORDER : ZODIAC_ORDER.slice(0, 3);

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-3 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="全108タイプ一覧"
          subtitle="108 Types"
        />

        <div className="space-y-10">
          {visibleZodiacs.map((zodiac) => (
            <div key={zodiac}>
              {/* Zodiac header with ornamental line */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-gold text-xl">{ZODIAC_SYMBOLS[zodiac]}</span>
                <h3 className="font-serif text-gold text-base font-bold tracking-wider">
                  {zodiac}
                </h3>
                <span className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                <span className="sparkle-star text-[6px] text-gold/30">✦</span>
              </div>

              {/* Type buttons grid */}
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
                {typesByZodiac[zodiac]?.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => router.push(`/result/${type.id}`)}
                    className="py-3 px-1.5 text-center rounded-lg border border-gold/10 hover:border-gold/30 transition-all cursor-pointer group"
                    style={{
                      background: 'linear-gradient(160deg, rgba(255,255,255,0.7), rgba(251,247,240,0.5))',
                    }}
                  >
                    <p className="text-text/60 text-[10px] sm:text-xs font-bold truncate group-hover:text-gold transition-colors">
                      {type.typeName}
                    </p>
                    <p className="text-text-dim/30 text-[9px] mt-0.5">
                      数秘{type.numerology}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="frame-card px-10 py-4 text-gold text-sm hover:border-gold/40 transition-all cursor-pointer tracking-wider"
              style={{ boxShadow: '0 0 20px rgba(184,150,62,0.06)' }}
            >
              <span className="sparkle-star text-[8px] mr-2">✦</span>
              もっと見る（残り9星座）
              <span className="sparkle-star text-[8px] ml-2" style={{ animationDelay: '1s' }}>✦</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
