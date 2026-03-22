'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuizProgress from '@/components/QuizProgress';
import QuizQuestion from '@/components/QuizQuestion';
import LoadingScreen from '@/components/LoadingScreen';
import { getQuizQuestions, calculateQuizScores } from '@/lib/quiz-scoring';
import { getZodiac } from '@/lib/zodiac';
import { getNumerologyNumber } from '@/lib/numerology';

export default function QuizPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const questions = getQuizQuestions();

  useEffect(() => {
    // セッションストレージに生年月日が保存されているか確認
    const nickname = sessionStorage.getItem('koyomi_nickname');
    if (!nickname) {
      router.push('/');
      return;
    }
    setIsReady(true);
  }, [router]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (newAnswers.length >= questions.length) {
      // 全問回答完了 → スコア計算 → ローディング → 結果へ
      const year = parseInt(sessionStorage.getItem('koyomi_year') || '2000');
      const month = parseInt(sessionStorage.getItem('koyomi_month') || '1');
      const day = parseInt(sessionStorage.getItem('koyomi_day') || '1');

      const zodiac = getZodiac(month, day);
      const numerology = getNumerologyNumber(year, month, day);
      const scores = calculateQuizScores(newAnswers, zodiac.element, numerology);

      // スコアを保存
      sessionStorage.setItem('koyomi_quiz_scores', JSON.stringify(scores));

      const typeId = `${zodiac.en}-${numerology}`;
      setIsLoading(true);

      setTimeout(() => {
        router.push(`/result/${typeId}`);
      }, 3000);
    } else {
      // 次の質問へ
      setTimeout(() => {
        setCurrentQ(currentQ + 1);
      }, 100);
    }
  };

  if (!isReady) return null;

  if (isLoading) {
    return (
      <main className="relative min-h-screen flex flex-col items-center justify-center px-5 py-16 bg-[#050510]">
        <div className="text-center">
          <p className="text-[#e8cc6a] text-lg font-[family-name:var(--font-shippori)] mb-6 animate-pulse">
            🔮 あなたの星を読み解いています...
          </p>
          <LoadingScreen />
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-5 py-16 bg-[#050510]">
      {/* 背景の星 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-[#e8cc6a] font-[family-name:var(--font-shippori)] mb-2">
            🌙 恋愛タイプ診断
          </h1>
          <p className="text-xs text-[#8888aa] font-[family-name:var(--font-zen)]">
            7つの質問に答えて、隠された恋愛パターンを解き明かしましょう
          </p>
        </div>

        {/* プログレスバー */}
        <QuizProgress current={currentQ} total={questions.length} />

        {/* 質問 */}
        {currentQ < questions.length && (
          <QuizQuestion
            key={currentQ}
            question={questions[currentQ]}
            onAnswer={handleAnswer}
            questionNumber={currentQ + 1}
          />
        )}
      </div>
    </main>
  );
}
