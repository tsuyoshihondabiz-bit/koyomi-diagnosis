'use client';

interface ShareButtonProps {
  zodiacName: string;
  numerology: number;
  typeName: string;
  typeId: string;
}

export default function ShareButton({ zodiacName, numerology, typeName, typeId }: ShareButtonProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://koyomi-uranai.com';
  const text = `🌙 私は${zodiacName}×数秘${numerology}の【${typeName}】タイプでした！✨\n\nあなたも108タイプの中から自分のタイプを診断してみて🔮\n`;
  const url = `${siteUrl}/result/${typeId}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center py-4 rounded-lg bg-[#1da1f2] text-white font-bold text-base hover:bg-[#1a91da] transition-colors"
    >
      𝕏 でシェアする
    </a>
  );
}
