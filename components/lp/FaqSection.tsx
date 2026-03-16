'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/lp-content';
import SectionHeading from './SectionHeading';

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-4 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionHeading
          title="よくある質問"
          subtitle="FAQ"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="frame-card overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
              >
                <span className="text-text text-sm sm:text-base pr-4 leading-relaxed group-hover:text-gold-bright/80 transition-colors">
                  <span className="text-gradient-gold font-serif font-bold mr-3 text-base">Q.</span>
                  {item.q}
                </span>
                <span
                  className="text-gold-dim text-sm flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expanded === i ? '300px' : '0px',
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 mb-4" />
                  <p className="text-text-dim text-sm leading-[1.9]">
                    <span className="text-gradient-mystic font-serif font-bold mr-3 text-base">A.</span>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
