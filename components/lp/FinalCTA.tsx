'use client';

import CelestialBackground from './CelestialBackground';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('diagnosis-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-celestial-1 overflow-hidden">
      <CelestialBackground count={40} />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Decorative moon */}
        <div className="text-4xl text-gold/30 mb-6" style={{ animation: 'moonFloat 6s ease-in-out infinite' }}>
          ☽
        </div>

        {/* Ornamental frame */}
        <div className="frame-card corner-ornament p-8 sm:p-12"
             style={{ boxShadow: '0 0 60px rgba(201,168,76,0.1)' }}>
          <div className="ornament-divider mb-4">
            <span className="text-gold/30 text-[8px]">✧</span>
          </div>

          <p className="font-serif text-text/60 text-sm mb-2 tracking-wider">
            まだ鑑定していませんか？
          </p>
          <p className="font-serif text-gradient-gold text-xl sm:text-2xl font-bold mb-3"
             style={{ textShadow: '0 0 20px rgba(201,168,76,0.2)' }}>
            あなたの暦占術タイプを知る
          </p>
          <p className="text-text-dim text-xs mb-8 tracking-wider">
            108通りの恋愛パターンから、あなただけの結果をお届けします
          </p>

          <button
            onClick={scrollToForm}
            className="btn-gold px-14 py-5 text-lg cursor-pointer"
          >
            無料で鑑定する
          </button>

          <div className="ornament-divider mt-6">
            <span className="text-gold/20 text-[8px]">✧</span>
          </div>
        </div>
      </div>
    </section>
  );
}
