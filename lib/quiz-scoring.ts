import quizQuestions from '@/data/quiz-questions.json';

export interface QuizScores {
  passion: number;
  intuition: number;
  embrace: number;
  independence: number;
  empathy: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  emoji: string;
  options: {
    text: string;
    scores: QuizScores;
  }[];
}

const AXIS_META: Record<keyof QuizScores, { name: string; emoji: string; color: string }> = {
  passion:      { name: '情熱力',  emoji: '🔥', color: '#FF6B6B' },
  intuition:    { name: '直感力',  emoji: '🌙', color: '#A78BFA' },
  embrace:      { name: '包容力',  emoji: '💎', color: '#4ECDC4' },
  independence: { name: '独立心',  emoji: '⭐', color: '#FFD93D' },
  empathy:      { name: '共感力',  emoji: '🌊', color: '#6BCB77' },
};

/** 星座の元素によるボーナス */
const ELEMENT_BONUS: Record<string, Partial<QuizScores>> = {
  '火': { passion: 15 },
  '水': { empathy: 15 },
  '風': { independence: 15 },
  '地': { embrace: 15 },
};

/** 数秘によるボーナス */
const NUMEROLOGY_BONUS: Record<number, Partial<QuizScores>> = {
  1: { passion: 10 },
  2: { embrace: 10 },
  3: { empathy: 10 },
  4: { independence: 10 },
  5: { empathy: 10 },
  6: { embrace: 10 },
  7: { intuition: 10 },
  8: { passion: 10 },
  9: { intuition: 10 },
};

/**
 * クイズ回答 + 星座/数秘情報から5軸スコアを計算
 */
export function calculateQuizScores(
  answers: number[],
  zodiacElement: string,
  numerology: number
): QuizScores {
  const questions = quizQuestions as QuizQuestion[];

  // Step 1: 回答からベーススコアを合算
  const raw: QuizScores = { passion: 0, intuition: 0, embrace: 0, independence: 0, empathy: 0 };

  answers.forEach((optionIndex, questionIndex) => {
    if (questionIndex < questions.length && optionIndex >= 0 && optionIndex < 4) {
      const scores = questions[questionIndex].options[optionIndex].scores;
      raw.passion += scores.passion;
      raw.intuition += scores.intuition;
      raw.embrace += scores.embrace;
      raw.independence += scores.independence;
      raw.empathy += scores.empathy;
    }
  });

  // Step 2: 星座元素ボーナスを加算
  const elemBonus = ELEMENT_BONUS[zodiacElement] || {};
  for (const [key, val] of Object.entries(elemBonus)) {
    raw[key as keyof QuizScores] += val as number;
  }

  // Step 3: 数秘ボーナスを加算
  const numBonus = NUMEROLOGY_BONUS[numerology] || {};
  for (const [key, val] of Object.entries(numBonus)) {
    raw[key as keyof QuizScores] += val as number;
  }

  // Step 4: 0-100に正規化（最大値を100にスケーリング）
  const maxRaw = Math.max(raw.passion, raw.intuition, raw.embrace, raw.independence, raw.empathy, 1);
  const scale = 100 / maxRaw;

  return {
    passion: Math.round(Math.min(raw.passion * scale, 100)),
    intuition: Math.round(Math.min(raw.intuition * scale, 100)),
    embrace: Math.round(Math.min(raw.embrace * scale, 100)),
    independence: Math.round(Math.min(raw.independence * scale, 100)),
    empathy: Math.round(Math.min(raw.empathy * scale, 100)),
  };
}

/**
 * 最も高い軸を返す
 */
export function getDominantTrait(scores: QuizScores): { name: string; emoji: string; color: string } {
  const entries = Object.entries(scores) as [keyof QuizScores, number][];
  const [topKey] = entries.reduce((a, b) => (b[1] > a[1] ? b : a));
  return AXIS_META[topKey];
}

/**
 * 全軸のメタ情報を取得
 */
export function getAxisMeta() {
  return AXIS_META;
}

/**
 * クイズの設問データを取得
 */
export function getQuizQuestions(): QuizQuestion[] {
  return quizQuestions as QuizQuestion[];
}
