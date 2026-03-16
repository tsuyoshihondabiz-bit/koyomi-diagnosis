import SectionHeading from './SectionHeading';

export default function MethodBranding() {
  return (
    <section id="method" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-2 overflow-hidden">
      {/* Decorative large kanji watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <span className="font-serif text-[15rem] sm:text-[20rem] text-gold/[0.02] font-bold leading-none">
          暦
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="暦占術とは"
          subtitle="About Koyomi Fortune Method"
        />

        {/* Main explanation card */}
        <div className="frame-card corner-ornament p-8 sm:p-10 mb-12">
          <div className="space-y-5 text-sm sm:text-base leading-[2]">
            <p className="text-text">
              暦占術は、西洋占星術の<span className="text-gold-bright font-bold">12星座</span>と
              古代ギリシャ数秘術の<span className="text-gold-bright font-bold">9つの運命数</span>を
              独自メソッドで融合した占術体系です。
            </p>
            <p className="text-text/70">
              星座が示す「外面的な性格と行動パターン」に、数秘術が明かす「内面の本質と魂の目的」を
              重ね合わせることで、従来の星座占いでは見えなかった深層心理まで読み解きます。
            </p>
          </div>
        </div>

        {/* Formula section - ornate display */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-8">
          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-3"
                 style={{ background: 'rgba(10,14,42,0.8)', boxShadow: '0 0 30px rgba(201,168,76,0.1), inset 0 0 20px rgba(201,168,76,0.05)' }}>
              <span className="font-serif text-gradient-gold text-2xl sm:text-3xl font-bold">12</span>
            </div>
            <p className="text-gold-dim text-xs tracking-wider">星座</p>
            <p className="font-display italic text-text-dim/30 text-[10px] mt-0.5">Zodiac</p>
          </div>

          <span className="text-gold/40 text-2xl sm:text-3xl mt-[-20px]">×</span>

          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-mystic/30 flex items-center justify-center mx-auto mb-3"
                 style={{ background: 'rgba(10,14,42,0.8)', boxShadow: '0 0 30px rgba(123,107,175,0.1), inset 0 0 20px rgba(123,107,175,0.05)' }}>
              <span className="font-serif text-gradient-mystic text-2xl sm:text-3xl font-bold">9</span>
            </div>
            <p className="text-mystic/60 text-xs tracking-wider">運命数</p>
            <p className="font-display italic text-text-dim/30 text-[10px] mt-0.5">Numerology</p>
          </div>

          <span className="text-gold/40 text-2xl sm:text-3xl mt-[-20px]">=</span>

          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold/50 flex items-center justify-center mx-auto mb-3"
                 style={{
                   background: 'rgba(10,14,42,0.8)',
                   boxShadow: '0 0 40px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.08)',
                   animation: 'glowPulse 3s ease-in-out infinite',
                 }}>
              <span className="font-serif text-gradient-gold text-3xl sm:text-4xl font-bold">108</span>
            </div>
            <p className="text-gold text-xs tracking-wider font-bold">タイプ</p>
            <p className="font-display italic text-text-dim/30 text-[10px] mt-0.5">Types</p>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-8">
          <div className="ornament-divider mb-4">
            <span className="text-gold/20 text-[8px]">✧</span>
          </div>
          <p className="text-text-dim/50 text-xs leading-[1.8] max-w-md mx-auto">
            古代ギリシャの数学者ピタゴラスが「万物は数なり」と説いた数秘術。
            そして数千年の歴史を持つ西洋占星術。二つの叡智が交わる場所に、暦占術は生まれました。
          </p>
        </div>
      </div>
    </section>
  );
}
