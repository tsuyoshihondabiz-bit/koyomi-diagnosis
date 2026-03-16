'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DiagnosisForm from '@/components/DiagnosisForm';
import LoadingScreen from '@/components/LoadingScreen';
import Footer from '@/components/Footer';
import { getZodiac } from '@/lib/zodiac';
import { getNumerologyNumber } from '@/lib/numerology';

export default function HomePage() {
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
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center px-5 py-16 bg-[#050510]">
        {/* Subtle ambient light */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.2) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 w-full max-w-sm">
          <header className="text-center mb-10">
            <p className="text-gold-dim text-[10px] tracking-[0.4em] uppercase mb-3">
              Koyomi Fortune Method
            </p>
            <h1 className="font-serif text-gold text-xl sm:text-2xl font-bold mb-2 tracking-wide">
              暦占術
            </h1>
            <p className="text-text-dim text-xs tracking-wider">
              星座×数秘で導く108タイプの恋愛診断
            </p>
            <div className="mt-4 h-px max-w-[40px] mx-auto bg-gold/30" />
          </header>

          <div className="bg-[#0a0a18]/60 border border-white/5 rounded-xl p-6 sm:p-8">
            {isLoading ? <LoadingScreen /> : <DiagnosisForm onSubmit={handleSubmit} />}
          </div>

          <p className="text-text-dim/30 text-[10px] text-center mt-6 tracking-wider">
            完全無料・登録不要
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
