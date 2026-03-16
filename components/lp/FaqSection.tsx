'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/lp-content';
import SectionHeading from './SectionHeading';

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#060612]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="よくある質問"
          subtitle="FAQ"
        />

        <div className="divide-y divide-white/5">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-start justify-between py-5 sm:py-6 text-left cursor-pointer group"
              >
                <span className="text-text text-sm sm:text-base pr-4 leading-relaxed group-hover:text-gold/80 transition-colors">
                  <span className="text-gold-dim font-serif font-bold mr-2 text-xs">Q</span>
                  {item.q}
                </span>
                <span
                  className="text-text-dim/40 text-xs mt-1 flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: expanded === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: expanded === i ? '300px' : '0px',
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <div className="pb-5 sm:pb-6 pl-6">
                  <p className="text-text-dim text-sm leading-[1.9]">
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
