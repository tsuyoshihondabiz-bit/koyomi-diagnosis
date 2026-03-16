import { getZodiac } from './zodiac';
import { getNumerologyNumber, getLoveLuck } from './numerology';
import { DiagnosisType, DiagnosisResult } from './types';
import typesData from '@/data/types-108.json';

const allTypes = typesData as DiagnosisType[];

export function diagnose(
  nickname: string,
  year: number,
  month: number,
  day: number
): DiagnosisResult {
  const zodiac = getZodiac(month, day);
  const numerology = getNumerologyNumber(year, month, day);
  const typeId = `${zodiac.en}-${numerology}`;
  const type = allTypes.find((t) => t.id === typeId) ?? allTypes[0];
  const loveLuck = getLoveLuck(year, month, day);

  return {
    type,
    zodiacSymbol: zodiac.symbol,
    zodiacEn: zodiac.en,
    element: zodiac.element,
    nickname,
    loveLuck,
  };
}

export function getTypeById(typeId: string): DiagnosisType | undefined {
  return allTypes.find((t) => t.id === typeId);
}

export function getAllTypeIds(): string[] {
  return allTypes.map((t) => t.id);
}

export function getAdviceIndex(zodiacName: string, numerology: number): number {
  return (zodiacName.length + numerology) % 3;
}
