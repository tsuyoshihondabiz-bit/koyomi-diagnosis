'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StarField from '@/components/StarField';
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

    // Store nickname in sessionStorage for result page
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
      <StarField />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <header className="text-center mb-10">
          <div
            className="text-5xl mb-4 inline-block"
            style={{ animation: 'moonFloat 6s ease-in-out infinite' }}
          >
            ☽
          </div>
          <h1 className="font-serif text-gold-bright text-2xl sm:text-3xl font-bold mb-3">
            こよみ。の星座×数秘タイプ診断
          </h1>
          <p className="font-display italic text-mystic text-sm tracking-wider">
            Zodiac × Numerology — 108 Types
          </p>
          <span className="inline-block mt-4 px-4 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
            ✦ 完全無料 ✦
          </span>
        </header>

        {isLoading ? <LoadingScreen /> : <DiagnosisForm onSubmit={handleSubmit} />}
      </main>
      <Footer />
    </>
  );
}
