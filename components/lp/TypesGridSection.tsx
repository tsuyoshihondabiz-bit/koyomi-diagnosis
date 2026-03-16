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
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#07071a]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="全108タイプ一覧"
          subtitle="108 Types"
        />

        <div className="space-y-10">
          {visibleZodiacs.map((zodiac) => (
            <div key={zodiac}>
              {/* Zodiac header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold-dim/60 text-lg">{ZODIAC_SYMBOLS[zodiac]}</span>
                <h3 className="font-serif text-text text-sm font-bold tracking-wider">
                  {zodiac}
                </h3>
                <span className="flex-1 h-px bg-white/5" />
              </div>

              {/* Type buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5">
                {typesByZodiac[zodiac]?.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => router.push(`/result/${type.id}`)}
                    className="py-2.5 px-1 text-center rounded bg-white/[0.02] hover:bg-gold/5 border border-transparent hover:border-gold/15 transition-all cursor-pointer group"
                  >
                    <p className="text-text/70 text-[10px] sm:text-xs font-bold truncate group-hover:text-gold transition-colors">
                      {type.typeName}
                    </p>
                    <p className="text-text-dim/40 text-[9px] mt-0.5">
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
              className="text-gold-dim text-sm tracking-wider hover:text-gold transition-colors cursor-pointer border-b border-gold/20 hover:border-gold/40 pb-0.5"
            >
              残り9星座を表示する
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
