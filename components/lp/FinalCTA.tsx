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
        <div className="text-4xl text-gold/25 mb-6" style={{ animation: 'moonFloat 6s ease-in-out infinite' }}>
          ☽
        </div>

        {/* Ornamental frame */}
        <div className="frame-card corner-ornament p-8 sm:p-12"
             style={{ boxShadow: '0 0 60px rgba(184,150,62,0.08)' }}>
          <div className="ornament-divider mb-4">
            <span className="text-gold/25 text-[8px]">✧</span>
          </div>

          <p className="font-serif text-gradient-gold text-2xl sm:text-3xl font-bold mb-2 leading-[1.6]">
            あなたの運命の扉を、<br />今ここで開く。
          </p>
          <p className="text-text-dim text-xs mb-8 tracking-wider leading-relaxed">
            星座と数字が導き出す、究極の答えをその手に。
          </p>

          <button
            onClick={scrollToForm}
            className="btn-gold px-14 py-5 text-lg cursor-pointer"
          >
            無料で鑑定を開始する
          </button>

          <div className="ornament-divider mt-6">
            <span className="text-gold/15 text-[8px]">✧</span>
          </div>
        </div>
      </div>
    </section>
  );
}
