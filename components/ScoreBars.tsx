'use client';

import { useEffect, useState } from 'react';
import type { QuizScores } from '@/lib/quiz-scoring';

interface ScoreBarsProps {
  scores: QuizScores;
}

const AXES: { key: keyof QuizScores; label: string; emoji: string; color: string }[] = [
  { key: 'passion',      label: '情熱力', emoji: '🔥', color: '#FF6B6B' },
  { key: 'intuition',    label: '直感力', emoji: '🌙', color: '#A78BFA' },
  { key: 'embrace',      label: '包容力', emoji: '💎', color: '#4ECDC4' },
  { key: 'independence', label: '独立心', emoji: '⭐', color: '#FFD93D' },
  { key: 'empathy',      label: '共感力', emoji: '🌊', color: '#6BCB77' },
];

export default function ScoreBars({ scores }: ScoreBarsProps) {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1500;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setAnimProgress(p);
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="space-y-4">
      {AXES.map((axis, i) => {
        const val = scores[axis.key];
        const delay = i * 0.1;
        const progress = Math.max(0, Math.min(1, (animProgress - delay) / 0.7));
        const width = val * progress;

        return (
          <div key={axis.key} className="flex items-center gap-3">
            <span className="w-20 text-xs text-[#e8e4f0] font-[family-name:var(--font-zen)] whitespace-nowrap">
              {axis.emoji} {axis.label}
            </span>
            <div className="flex-1 h-5 bg-[#1a1a3e] rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full transition-none"
                style={{
                  width: `${width}%`,
                  backgroundColor: axis.color,
                  boxShadow: `0 0 8px ${axis.color}40`,
                }}
              />
            </div>
            <span className="w-12 text-right text-xs text-[#8888aa] font-[family-name:var(--font-zen)]">
              {Math.round(width)}/100
            </span>
          </div>
        );
      })}
    </div>
  );
}
