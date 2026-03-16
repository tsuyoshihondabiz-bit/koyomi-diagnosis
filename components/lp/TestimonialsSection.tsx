'use client';

import { TESTIMONIALS } from '@/data/lp-content';
import SectionHeading from './SectionHeading';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i < rating ? 'bg-gold/80' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#07071a]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="体験者の声"
          subtitle="Testimonials"
        />

        {/* Featured testimonial */}
        <div className="border-l-2 border-gold/30 pl-6 sm:pl-8 mb-12">
          <p className="font-serif text-text text-base sm:text-lg leading-[2] mb-4">
            {TESTIMONIALS[0].text}
          </p>
          <div className="flex items-center gap-3">
            <StarRating rating={TESTIMONIALS[0].rating} />
            <span className="text-text-dim text-xs">
              {TESTIMONIALS[0].age} {TESTIMONIALS[0].gender}
            </span>
          </div>
        </div>

        {/* Other testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div
              key={i}
              className="border-t border-white/5 pt-5"
            >
              <p className="text-text/70 text-sm leading-[1.9] mb-3">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <StarRating rating={t.rating} />
                <span className="text-text-dim text-[10px]">
                  {t.age} {t.gender}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
