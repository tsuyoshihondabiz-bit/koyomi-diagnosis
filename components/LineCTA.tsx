'use client';

export default function LineCTA() {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL;

  if (!lineUrl) return null;

  return (
    <section className="rounded-xl p-6 bg-gradient-to-br from-[#06c755]/10 to-[#06c755]/5 border border-[#06c755]/20">
      <p className="text-center text-text text-sm mb-4">
        もっと詳しい鑑定結果をLINEで受け取る
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-4 rounded-lg bg-line-green text-white font-bold text-base hover:brightness-110 transition-all"
      >
        LINE で受け取る
      </a>
    </section>
  );
}
