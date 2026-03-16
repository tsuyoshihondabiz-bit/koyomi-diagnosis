interface CompatibilityGridProps {
  bestMatch: string;
  soulmate: string;
  loveLuck: number;
  luckyColor: string;
}

export default function CompatibilityGrid({
  bestMatch,
  soulmate,
  loveLuck,
  luckyColor,
}: CompatibilityGridProps) {
  const stars = '★'.repeat(loveLuck) + '☆'.repeat(5 - loveLuck);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-bg-input rounded-lg p-4 text-center">
        <p className="text-gold-dim text-xs mb-1">恋愛ベストパートナー</p>
        <p className="text-rose font-serif text-base">{bestMatch}</p>
      </div>
      <div className="bg-bg-input rounded-lg p-4 text-center">
        <p className="text-gold-dim text-xs mb-1">ソウルメイト</p>
        <p className="text-mystic font-serif text-base">{soulmate}</p>
      </div>
      <div className="bg-bg-input rounded-lg p-4 text-center">
        <p className="text-gold-dim text-xs mb-1">今月の恋愛運</p>
        <p className="text-gold text-base">{stars}</p>
      </div>
      <div className="bg-bg-input rounded-lg p-4 text-center">
        <p className="text-gold-dim text-xs mb-1">ラッキーカラー</p>
        <p className="text-teal font-serif text-base">{luckyColor}</p>
      </div>
    </div>
  );
}
