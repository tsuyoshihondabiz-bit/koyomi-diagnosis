'use client';

import { TESTIMONIALS } from '@/data/lp-content';
import SectionHeading from './SectionHeading';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-xs ${i < rating ? 'text-gold' : 'text-text-dim/20'}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-1 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="体験者の声"
          subtitle="Testimonials"
        />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card card-hover ${i === 0 ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className={`text-text/80 leading-[2] mb-4 ${i === 0 ? 'text-base font-serif' : 'text-sm'}`}>
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <StarRating rating={t.rating} />
                    <span className="text-text-dim text-xs tracking-wider">
                      {t.age} {t.gender}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof line */}
        <div className="text-center mt-10">
          <div className="ornament-divider mb-3">
            <span className="text-gold/20 text-[8px]">✧</span>
          </div>
          <p className="text-text-dim/50 text-xs tracking-wider">
            <span className="sparkle-star text-[8px] mr-1">✦</span>
            累計
            <span className="text-gold mx-1 font-bold">50,000</span>
            人以上が暦占術を体験
            <span className="sparkle-star text-[8px] ml-1" style={{ animationDelay: '1s' }}>✦</span>
          </p>
        </div>
      </div>
    </section>
  );
}
