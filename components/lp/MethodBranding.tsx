import SectionHeading from './SectionHeading';

export default function MethodBranding() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#060612]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="暦占術（こよみせんじゅつ）とは"
          subtitle="About Koyomi Fortune Method"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
          {/* Decorative vertical text */}
          <div className="hidden lg:block" aria-hidden="true">
            <p
              className="font-serif text-gold/10 text-[4rem] font-bold leading-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              暦占術
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-text text-sm sm:text-base leading-[2]">
              暦占術は、西洋占星術の<span className="text-gold font-bold">12星座</span>と
              古代ギリシャ数秘術の<span className="text-gold font-bold">9つの運命数</span>を
              独自メソッドで融合した占術体系です。
            </p>

            <p className="text-text/80 text-sm leading-[2]">
              星座が示す「外面的な性格と行動パターン」に、数秘術が明かす「内面の本質と魂の目的」を
              重ね合わせることで、従来の星座占いでは見えなかった深層心理まで読み解きます。
              その組み合わせは全108通り——あなただけの恋愛パターンが、ここにあります。
            </p>

            {/* Formula */}
            <div className="flex items-center gap-4 py-6">
              <div className="text-center flex-1">
                <p className="font-serif text-gold text-2xl sm:text-3xl font-bold">12</p>
                <p className="text-text-dim text-[10px] tracking-wider mt-1">星座</p>
              </div>
              <span className="text-gold-dim text-xl">×</span>
              <div className="text-center flex-1">
                <p className="font-serif text-gold text-2xl sm:text-3xl font-bold">9</p>
                <p className="text-text-dim text-[10px] tracking-wider mt-1">運命数</p>
              </div>
              <span className="text-gold-dim text-xl">=</span>
              <div className="text-center flex-1">
                <p className="font-serif text-gold-bright text-3xl sm:text-4xl font-bold">108</p>
                <p className="text-text-dim text-[10px] tracking-wider mt-1">タイプ</p>
              </div>
            </div>

            <p className="text-text-dim text-xs leading-[1.8]">
              古代ギリシャの数学者ピタゴラスが「万物は数なり」と説いた数秘術。
              そして数千年の歴史を持つ西洋占星術。二つの叡智が交わる場所に、暦占術は生まれました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
