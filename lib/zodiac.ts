export interface ZodiacSign {
  name: string;
  symbol: string;
  en: string;
  element: '火' | '地' | '風' | '水';
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
}

const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: '牡羊座', symbol: '♈', en: 'aries', element: '火', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
  { name: '牡牛座', symbol: '♉', en: 'taurus', element: '地', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
  { name: '双子座', symbol: '♊', en: 'gemini', element: '風', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 },
  { name: '蟹座', symbol: '♋', en: 'cancer', element: '水', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22 },
  { name: '獅子座', symbol: '♌', en: 'leo', element: '火', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
  { name: '乙女座', symbol: '♍', en: 'virgo', element: '地', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
  { name: '天秤座', symbol: '♎', en: 'libra', element: '風', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23 },
  { name: '蠍座', symbol: '♏', en: 'scorpio', element: '水', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22 },
  { name: '射手座', symbol: '♐', en: 'sagittarius', element: '火', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21 },
  { name: '山羊座', symbol: '♑', en: 'capricorn', element: '地', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
  { name: '水瓶座', symbol: '♒', en: 'aquarius', element: '風', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
  { name: '魚座', symbol: '♓', en: 'pisces', element: '水', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
];

export function getZodiac(month: number, day: number): ZodiacSign {
  for (const sign of ZODIAC_SIGNS) {
    // Handle Capricorn (year-crossing: 12/22 - 1/19)
    if (sign.startMonth > sign.endMonth) {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        return sign;
      }
    } else {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay) ||
        (month > sign.startMonth && month < sign.endMonth)
      ) {
        return sign;
      }
    }
  }
  // Fallback (should not happen with valid dates)
  return ZODIAC_SIGNS[0];
}

export function getAllZodiacSigns(): ZodiacSign[] {
  return ZODIAC_SIGNS;
}
