import SectionHeading from './SectionHeading';

export default function MethodBranding() {
  return (
    <section id="method" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-2 overflow-hidden">
      {/* Decorative large kanji watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <span className="font-serif text-[15rem] sm:text-[20rem] text-gold/[0.03] font-bold leading-none">
          暦
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* METHOD label */}
        <div className="text-center mb-3">
          <span className="text-gold-dim/60 text-[10px] tracking-[0.5em] uppercase">Method</span>
        </div>
        <SectionHeading
          title="的中率の秘密"
          subtitle="About Koyomi Fortune Method"
        />

        {/* Formula section - Stitch style horizontal cards */}
        <div className="flex items-stretch justify-center gap-3 sm:gap-4 py-4 mb-8">
          {/* 12星座 card */}
          <div className="flex-1 max-w-[220px] p-5 sm:p-7 text-center rounded-2xl" style={{ background: 'rgba(10,14,42,0.8)', border: '2px solid rgba(201,168,76,0.3)' }}>
            <div className="text-gold text-3xl sm:text-4xl mb-3">♈</div>
            <p className="font-serif text-text text-lg sm:text-xl font-bold mb-2">12星座</p>
            <p className="text-text-dim text-xs leading-relaxed">
              生まれ持った<br />宿命と気質
            </p>
          </div>

          <span className="text-gold/30 text-xl sm:text-2xl self-center">&times;</span>

          {/* 9数秘 card */}
          <div className="flex-1 max-w-[220px] p-5 sm:p-7 text-center rounded-2xl" style={{ background: 'rgba(10,14,42,0.8)', border: '2px solid rgba(201,168,76,0.3)' }}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-3">
              <span className="font-serif text-gold font-bold text-lg sm:text-xl">9</span>
            </div>
            <p className="font-serif text-text text-lg sm:text-xl font-bold mb-2">9数秘</p>
            <p className="text-text-dim text-xs leading-relaxed">
              魂が刻む<br />運命のサイクル
            </p>
          </div>

          <span className="text-gold/30 text-xl sm:text-2xl self-center">=</span>

          {/* 108タイプ card */}
          <div className="flex-1 max-w-[220px] p-5 sm:p-7 text-center rounded-2xl" style={{ background: 'rgba(10,14,42,0.8)', border: '2px solid rgba(201,168,76,0.3)' }}>
            <div className="text-gold text-3xl sm:text-4xl mb-3">✧</div>
            <p className="font-serif text-text text-lg sm:text-xl font-bold mb-2">108タイプ</p>
            <p className="text-gold-dim text-xs leading-relaxed">
              あなただけの<br />解。恋愛成就の鍵
            </p>
          </div>
        </div>

        {/* Bottom explanation text */}
        <div className="text-center">
          <p className="text-text-dim/50 text-xs sm:text-sm leading-[1.8] max-w-xl mx-auto">
            単なる12通りの運勢ではありません。あなたの「誕生」に刻まれた天体の位置と、魂の数字を掛け合わせることで、煩悩の数と同じ108の細分化された運命タイプを導き出します。
          </p>
        </div>
      </div>
    </section>
  );
}
