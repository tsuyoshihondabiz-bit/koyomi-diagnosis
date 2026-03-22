'use client';

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            i < current
              ? 'bg-[#c9a84c] scale-100'
              : i === current
                ? 'bg-[#e8cc6a] scale-125 shadow-[0_0_10px_rgba(201,168,76,0.6)]'
                : 'bg-[#2a2a4a] scale-100'
          }`}
        />
      ))}
      <span className="ml-3 text-sm text-[#8888aa] font-[family-name:var(--font-zen)]">
        {current + 1}/{total}
      </span>
    </div>
  );
}
