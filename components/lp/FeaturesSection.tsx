import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    num: '01',
    title: '108タイプの精密診断',
    desc: '12星座と9つの運命数の掛け合わせにより、あなたの恋愛傾向を108パターンで精密に分析。星座だけでは見えない深層心理まで読み解きます。',
  },
  {
    num: '02',
    title: '恋愛に特化した鑑定',
    desc: '恋愛パターン・相性・ベストパートナー・ソウルメイトまで、恋愛に関するあらゆる側面を鑑定。あなたらしい愛し方のヒントをお伝えします。',
  },
  {
    num: '03',
    title: '完全無料・30秒で完了',
    desc: '会員登録もメールアドレスも不要。ニックネームと生年月日を入力するだけで、すぐに鑑定結果をお届けします。',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#07071a]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="暦占術の3つの特徴"
          subtitle="Features"
        />

        <div className="space-y-0">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8 py-8 border-b border-white/5 last:border-b-0"
            >
              {/* Number */}
              <div className="pt-1">
                <span className="font-display italic text-gold/30 text-3xl sm:text-4xl">
                  {feature.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-text text-base sm:text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-dim text-sm leading-[1.9]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
