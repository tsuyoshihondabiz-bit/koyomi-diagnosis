'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DiagnosisForm from '@/components/DiagnosisForm';
import LoadingScreen from '@/components/LoadingScreen';
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
    <section className="relative min-h-[100svh] flex items-center bg-[#050510]">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(107,91,149,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Branding & copy */}
          <div className="order-2 lg:order-1">
            {/* Method label */}
            <p className="text-gold-dim text-[11px] tracking-[0.4em] uppercase mb-4">
              Koyomi Fortune Method
            </p>

            {/* Main title */}
            <h1 className="font-serif text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.3] mb-5">
              <span className="text-gold">暦占術</span>
              <span className="text-text/80 text-[0.6em] font-normal ml-2">で導く</span>
              <br />
              <span className="text-text/90">あなただけの</span>
              <br />
              <span className="text-gold-bright">108</span>
              <span className="text-text/80 text-[0.6em] font-normal">通りの恋愛パターン</span>
            </h1>

            {/* Description */}
            <p className="text-text-dim text-sm leading-[1.9] mb-8 max-w-md">
              西洋占星術の12星座と、古代ギリシャから伝わる数秘術を
              独自に融合。あなたの生年月日から、恋愛における本質・相性・
              運命のパートナー像を108タイプで精密に読み解きます。
            </p>

            {/* Trust line */}
            <div className="flex items-center gap-6 text-[11px] text-text-dim/60 tracking-wider mb-2">
              <span>完全無料</span>
              <span className="w-px h-3 bg-text-dim/20" />
              <span>30秒で診断</span>
              <span className="w-px h-3 bg-text-dim/20" />
              <span>登録不要</span>
            </div>
            <p className="text-text-dim/40 text-[10px] tracking-wider">
              累計診断者数 50,000人突破
            </p>
          </div>

          {/* Right: Diagnosis form */}
          <div className="order-1 lg:order-2" id="diagnosis-form">
            <div className="bg-[#0a0a18]/80 border border-gold/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="font-serif text-gold text-base sm:text-lg font-bold text-center mb-1">
                無料診断
              </p>
              <p className="text-text-dim text-xs text-center mb-6">
                ニックネームと生年月日を入力してください
              </p>

              {isLoading ? (
                <LoadingScreen />
              ) : (
                <DiagnosisForm onSubmit={handleSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
