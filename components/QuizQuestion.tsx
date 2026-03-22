'use client';

import { useState } from 'react';

import type { QuizQuestion as QuizQuestionType } from '@/lib/quiz-scoring';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (optionIndex: number) => void;
  questionNumber: number;
}

export default function QuizQuestion({ question, onAnswer, questionNumber }: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [exiting, setExiting] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        onAnswer(index);
        setSelected(null);
        setExiting(false);
      }, 300);
    }, 400);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        exiting ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'
      }`}
      style={{ animation: 'fadeInUp 0.4s ease-out' }}
    >
      {/* Question */}
      <div className="text-center mb-8">
        <span className="text-4xl mb-3 block">{question.emoji}</span>
        <p className="text-xs text-[#8888aa] mb-2 font-[family-name:var(--font-zen)]">
          Q{questionNumber}
        </p>
        <h2 className="text-lg md:text-xl text-[#e8e4f0] font-[family-name:var(--font-shippori)] leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 max-w-md mx-auto">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={selected !== null}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 font-[family-name:var(--font-zen)] text-sm md:text-base ${
              selected === index
                ? 'border-[#e8cc6a] bg-[#c9a84c]/15 text-[#e8cc6a] shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                : 'border-[#c9a84c]/20 bg-[#0d1230]/60 text-[#e8e4f0] hover:border-[#c9a84c]/50 hover:bg-[#0d1230]/80'
            } ${selected !== null && selected !== index ? 'opacity-40' : ''}`}
          >
            <span className="text-[#8888aa] mr-2 text-xs">
              {['A', 'B', 'C', 'D'][index]}.
            </span>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
