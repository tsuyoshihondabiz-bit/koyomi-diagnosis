'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import StarField from '@/components/StarField';
import ResultCard from '@/components/ResultCard';
import CompatibilityGrid from '@/components/CompatibilityGrid';
import ShareButton from '@/components/ShareButton';
import LineCTA from '@/components/LineCTA';
import Footer from '@/components/Footer';
import { getTypeById, getAdviceIndex } from '@/lib/diagnosis';
import { getLoveLuck } from '@/lib/numerology';

export default function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type: typeId } = use(params);
  const [nickname, setNickname] = useState('あなた');
  const [loveLuck, setLoveLuck] = useState(3);

  useEffect(() => {
    const storedNickname = sessionStorage.getItem('koyomi_nickname');
    if (storedNickname) setNickname(storedNickname);

    const year = Number(sessionStorage.getItem('koyomi_year') || '2001');
    const month = Number(sessionStorage.getItem('koyomi_month') || '3');
    const day = Number(sessionStorage.getItem('koyomi_day') || '14');
    setLoveLuck(getLoveLuck(year, month, day));
  }, []);

  const diagnosisType = getTypeById(typeId);

  if (!diagnosisType) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gold-dim mb-4">タイプが見つかりませんでした</p>
          <Link href="/" className="text-teal underline">
            トップに戻る
          </Link>
        </div>
      </main>
    );
  }

  const adviceIndex = getAdviceIndex(diagnosisType.zodiac, diagnosisType.numerology);
  const advice = diagnosisType.advice[adviceIndex] ?? diagnosisType.advice[0];

  return (
    <>
      <StarField />
      <main className="relative z-10 max-w-[640px] mx-auto px-4 py-12">
        {/* Result header */}
        <header className="text-center mb-8">
          <p className="text-gold-dim text-xs tracking-[0.3em] uppercase mb-2">Your Type</p>
          <h1 className="font-serif text-gold-bright text-[1.8rem] sm:text-4xl font-bold mb-3">
            {diagnosisType.typeName}
          </h1>
          <p className="font-display italic text-mystic text-sm">
            {getZodiacSymbol(diagnosisType.zodiac)} {diagnosisType.zodiac} × 数秘{diagnosisType.numerology}
          </p>
        </header>

        {/* Cards */}
        <div className="space-y-4">
          <ResultCard icon="🌙" title="あなたの本質">
            <p>
              {nickname}さん、あなたは{diagnosisType.zodiac}×数秘{diagnosisType.numerology}の
              【{diagnosisType.typeName}】タイプです。
            </p>
            <p>{diagnosisType.essence}</p>
          </ResultCard>

          <ResultCard icon="💕" title="恋愛パターン">
            <p>{diagnosisType.lovePattern}</p>
          </ResultCard>

          <ResultCard icon="🔮" title="今月のアドバイス">
            <p>{advice}</p>
          </ResultCard>

          <ResultCard icon="✨" title="相性">
            <CompatibilityGrid
              bestMatch={diagnosisType.bestMatch[0]}
              soulmate={diagnosisType.soulmate}
              loveLuck={loveLuck}
              luckyColor={diagnosisType.luckyColor}
            />
          </ResultCard>
        </div>

        {/* LINE CTA */}
        <div className="mt-6">
          <LineCTA />
        </div>

        {/* Share */}
        <div className="mt-4">
          <ShareButton
            zodiacName={diagnosisType.zodiac}
            numerology={diagnosisType.numerology}
            typeName={diagnosisType.typeName}
            typeId={diagnosisType.id}
          />
        </div>

        {/* Re-diagnose */}
        <div className="mt-4">
          <Link
            href="/"
            className="block w-full text-center py-4 rounded-lg border border-gold/20 text-gold text-base hover:bg-gold/5 transition-colors"
          >
            もう一度診断する
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function getZodiacSymbol(zodiacName: string): string {
  const map: Record<string, string> = {
    '牡羊座': '♈',
    '牡牛座': '♉',
    '双子座': '♊',
    '蟹座': '♋',
    '獅子座': '♌',
    '乙女座': '♍',
    '天秤座': '♎',
    '蠍座': '♏',
    '射手座': '♐',
    '山羊座': '♑',
    '水瓶座': '♒',
    '魚座': '♓',
  };
  return map[zodiacName] || '☆';
}
