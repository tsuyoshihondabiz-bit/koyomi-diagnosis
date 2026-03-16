'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DiagnosisForm from '@/components/DiagnosisForm';
import LoadingScreen from '@/components/LoadingScreen';
import CelestialBackground from './CelestialBackground';
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
    <section className="relative overflow-hidden min-h-[100svh] flex items-center bg-celestial-1">
      {/* Star field */}
      <CelestialBackground count={80} />

      {/* Decorative zodiac ring - top right */}
      <div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-gold/10 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{ animation: 'gentleRotate 60s linear infinite' }}
      >
        <div className="absolute inset-4 rounded-full border border-dashed border-gold/10" />
        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-gold/20 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-gold/15 -translate-x-1/2" />
      </div>

      {/* Decorative moon - bottom left */}
      <div
        className="absolute bottom-[10%] left-[5%] text-[80px] sm:text-[120px] text-gold/10 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'moonFloat 8s ease-in-out infinite' }}
      >
        ☽
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
          {/* Left: Branding & copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Sparkle badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="sparkle-star text-xs">✦</span>
              <span className="text-gold-dim text-[10px] tracking-[0.4em] uppercase border border-gold/20 rounded-full px-4 py-1.5">
                Koyomi Fortune Method
              </span>
              <span className="sparkle-star text-xs" style={{ animationDelay: '1s' }}>✦</span>
            </div>

            {/* Main title - large ornate */}
            <h1 className="font-serif font-bold leading-[1.2] mb-6">
              <span className="block text-gradient-gold text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem]">
                暦占術
              </span>
              <span className="block text-text/60 text-lg sm:text-xl mt-1 font-normal tracking-wider">
                星座×数秘で導く、あなただけの
              </span>
              <span className="block mt-1">
                <span className="text-gradient-gold text-3xl sm:text-4xl">108</span>
                <span className="text-text/60 text-lg sm:text-xl font-normal">通りの恋愛パターン</span>
              </span>
            </h1>

            {/* Ornamental divider */}
            <div className="ornament-divider max-w-xs mx-auto lg:mx-0 mb-6">
              <span className="text-gold/30 text-[8px]">✧</span>
            </div>

            {/* Description */}
            <p className="text-text/50 text-sm leading-[2] mb-8 max-w-md mx-auto lg:mx-0">
              暦占術師・暦（こよみ）が、西洋占星術の12星座と<br className="hidden sm:inline" />
              古代ギリシャ数秘術を独自に融合。<br className="hidden sm:inline" />
              あなたの恋愛パターン・相性・運命のパートナーを鑑定します。
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              {['完全無料', '30秒で鑑定', '登録不要'].map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-xs text-gold-dim border border-gold/15 rounded-full px-4 py-2 bg-white/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/20" />
              <p className="text-text-dim/60 text-xs tracking-wider">
                累計鑑定者数
                <span className="text-gold mx-1 font-bold text-sm">50,000</span>
                人突破
              </p>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/20" />
            </div>
          </div>

          {/* Right: Diagnosis form */}
          <div className="order-1 lg:order-2" id="diagnosis-form">
            <div className="form-ornate corner-ornament">
              {/* Header with moon decoration */}
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
        </div>
      </div>

      {/* Bottom ornamental border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="h-px mt-1 bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
      </div>
    </section>
  );
}
