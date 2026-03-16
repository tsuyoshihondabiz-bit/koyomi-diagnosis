export function getNumerologyNumber(year: number, month: number, day: number): number {
  const digits = `${year}${month}${day}`;
  let sum = digits.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);

  while (sum >= 10) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, d) => acc + parseInt(d, 10), 0);
  }

  // Fallback: if somehow 0, return 9
  return sum === 0 ? 9 : sum;
}

export function getLoveLuck(year: number, month: number, day: number): number {
  return ((year * 31 + month * 17 + day * 13) % 5) + 1;
}
