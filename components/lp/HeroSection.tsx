'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DiagnosisForm from '@/components/DiagnosisForm';
import LoadingScreen from '@/components/LoadingScreen';
import CelestialBackground from './CelestialBackground';
import { FORTUNE_TELLER } from '@/data/lp-content';
import { getZodiac } from '@/lib/zodiac';
import { getNumerologyNumber } from '@/lib/numerology';

export default function HeroSection() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (nickname: string, year: number, month: number, day: number) => {
    setIsLoading(true);
    const zodiac = getZodiac(month, day);
    const numerology = getNumerologyNumber(year, month, day);
    const typeId = `${zodiac.en}-${numerology}`;

    sessionStorage.setItem('koyomi_nickname', nickname);
    sessionStorage.setItem('koyomi_year', String(year));
    sessionStorage.setItem('koyomi_month', String(month));
    sessionStorage.setItem('koyomi_day', String(day));

    setTimeout(() => {
      router.push(`/result/${typeId}`);
    }, 2500);
  };

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Star field */}
      <CelestialBackground count={60} />

      {/* Decorative moon - top right */}
      <div
        className="absolute top-[8%] right-[8%] text-[60px] sm:text-[80px] text-gold/15 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'moonFloat 8s ease-in-out infinite' }}
      >
        ☽
      </div>

      {/* Decorative zodiac ring */}
      <div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-gold/8 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{ animation: 'gentleRotate 60s linear infinite' }}
      >
        <div className="absolute inset-4 rounded-full border border-dashed border-gold/8" />
      </div>

      {/* ═══ TOP: Centered Branding ═══ */}
      <div className="relative z-10 pt-20 sm:pt-24 pb-6 text-center">
        {/* Subtitle with ornamental dashes */}
        <p className="text-gold-dim/70 text-xs sm:text-sm tracking-[0.3em] mb-4">
          ── 運命を紐解く、古の知恵 ──
        </p>

        {/* Main title */}
        <h1 className="font-serif text-gradient-gold text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-bold leading-none mb-4">
          暦占術
        </h1>

        {/* Tagline */}
        <p className="text-text/50 text-sm sm:text-base tracking-wider mb-8">
          星座 × 数秘で導く <span className="text-gold font-bold">108</span>タイプの恋愛診断
        </p>

        {/* CTA button */}
        <button
          onClick={() => document.getElementById('diagnosis-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-gold px-12 py-4 text-base sm:text-lg cursor-pointer mb-3"
        >
          無料で占う ✨
        </button>

        {/* Limited time notice */}
        <p className="text-gold-dim/50 text-xs mb-4">※期間限定・お一人様1回限り</p>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {['完全無料', '30秒で鑑定', '登録不要'].map((badge, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-[10px] text-gold-dim/60 tracking-wider border border-gold/15 rounded-full px-3 py-1"
            >
              <span className="w-1 h-1 rounded-full bg-gold/30" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ BOTTOM: 2-column Form + Profile ═══ */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Diagnosis Form */}
          <div id="diagnosis-form">
            <div className="form-ornate corner-ornament">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-8 h-px bg-gradient-to-r from-transparent to-gold/30" />
                  <span className="text-gold/40 text-sm" style={{ animation: 'moonFloat 6s ease-in-out infinite' }}>☽</span>
                  <span className="w-8 h-px bg-gradient-to-l from-transparent to-gold/30" />
                </div>
                <p className="font-serif text-gradient-gold text-xl font-bold">
                  無料鑑定
                </p>
                <p className="text-text-dim text-xs mt-1 tracking-wider">
                  あなたのことを教えてください
                </p>
              </div>

              {isLoading ? (
                <LoadingScreen />
              ) : (
                <DiagnosisForm onSubmit={handleSubmit} />
              )}
            </div>
          </div>

          {/* Right: Fortune Teller Profile */}
          <div id="fortune-teller">
            <div className="frame-card p-6 sm:p-8">
              {/* Profile header with photo */}
              <div className="flex items-start gap-5 mb-5">
                {/* Photo - circular crop (removes corner artifacts, shows gold ring from image) */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden"
                       style={{
                         boxShadow: '0 0 30px rgba(201,168,76,0.2), 0 0 60px rgba(201,168,76,0.1)',
                       }}>
                    <Image
                      src="/images/profile.png"
                      alt={`${FORTUNE_TELLER.title} ${FORTUNE_TELLER.name}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover scale-110"
                      priority
                    />
                  </div>
                </div>

                {/* Name + title */}
                <div className="pt-2">
                  <p className="text-gold-dim text-[10px] tracking-[0.3em] uppercase mb-1">Fortune Teller</p>
                  <h2 className="font-serif text-gradient-gold text-xl sm:text-2xl font-bold mb-1">
                    天命の伝道師
                  </h2>
                  <p className="font-serif text-text/80 text-sm font-bold">
                    {FORTUNE_TELLER.title}　{FORTUNE_TELLER.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {FORTUNE_TELLER.specialties.slice(0, 3).map((s, i) => (
                      <span
                        key={i}
                        className="text-[9px] text-gold tracking-wider border border-gold/15 rounded-full px-2 py-0.5"
                        style={{ background: 'rgba(184,150,62,0.04)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio text */}
              <div className="mb-5">
                <p className="text-text/60 text-xs sm:text-sm leading-[2]">
                  代々続く占師一家に生まれ、幼少期より占の動きと数字の持つ波動を感に感じ、西洋占星術の護符です。新時代から伝わる秘法と鑑定を合わせ、何代人の伝人に寄り添う「暦占術」を示し、これまで1万人以上の運命を鑑定させてきました。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="frame-card p-3 text-center">
                  <p className="text-gold-dim text-[9px] tracking-wider mb-0.5">鑑定実績</p>
                  <p className="font-serif text-gradient-gold text-xl sm:text-2xl font-bold">30,000<span className="text-[10px]">件+</span></p>
                </div>
                <div className="frame-card p-3 text-center">
                  <p className="text-gold-dim text-[9px] tracking-wider mb-0.5">的中率満足度</p>
                  <p className="font-serif text-gradient-gold text-xl sm:text-2xl font-bold">98.2<span className="text-[10px]">%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ornamental border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </section>
  );
}
