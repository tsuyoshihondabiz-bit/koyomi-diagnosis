'use client';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('diagnosis-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#050510]">
      <div className="max-w-md mx-auto text-center">
        <p className="font-serif text-text/60 text-sm mb-3">
          まだ診断していませんか？
        </p>
        <p className="font-serif text-gold text-lg sm:text-xl font-bold mb-2">
          あなたの暦占術タイプを知る
        </p>
        <p className="text-text-dim text-xs mb-8">
          108通りの恋愛パターンから、あなただけの結果をお届けします
        </p>
        <button
          onClick={scrollToForm}
          className="btn-gold px-12 py-4 text-base cursor-pointer tracking-wider"
        >
          無料で診断する
        </button>
      </div>
    </section>
  );
}
