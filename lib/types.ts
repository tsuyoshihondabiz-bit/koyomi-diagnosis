export interface DiagnosisType {
  id: string;
  zodiac: string;
  numerology: number;
  typeName: string;
  keyword: string;
  essence: string;
  lovePattern: string;
  advice: string[];
  bestMatch: string[];
  soulmate: string;
  luckyColor: string;
}

export interface DiagnosisResult {
  type: DiagnosisType;
  zodiacSymbol: string;
  zodiacEn: string;
  element: string;
  nickname: string;
  loveLuck: number;
}
