import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    num: '01',
    icon: '☽',
    title: '108タイプの精密鑑定',
    desc: '12星座と9つの運命数の掛け合わせにより、あなたの恋愛傾向を108パターンで精密に分析。星座だけでは見えない深層心理まで読み解きます。',
    accent: 'gold',
  },
  {
    num: '02',
    icon: '♡',
    title: '恋愛に特化した鑑定',
    desc: '恋愛パターン・相性・ベストパートナー・ソウルメイトまで、恋愛に関するあらゆる側面を鑑定。あなたらしい愛し方のヒントをお伝えします。',
    accent: 'rose',
  },
  {
    num: '03',
    icon: '✧',
    title: '完全無料・30秒で完了',
    desc: '会員登録もメールアドレスも不要。ニックネームと生年月日を入力するだけで、すぐに鑑定結果をお届けします。',
    accent: 'mystic',
  },
];

const ACCENT_COLORS: Record<string, { border: string; glow: string; text: string }> = {
  gold: { border: 'border-gold/30', glow: 'rgba(201,168,76,0.15)', text: 'text-gold' },
  rose: { border: 'border-rose/30', glow: 'rgba(192,108,132,0.15)', text: 'text-rose-pale' },
  mystic: { border: 'border-mystic/30', glow: 'rgba(123,107,175,0.15)', text: 'text-mystic' },
};

export default function FeaturesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-3 overflow-hidden">
      {/* Scattered sparkles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="sparkle-star absolute text-gold/20 text-sm top-[15%] left-[8%]">✦</span>
        <span className="sparkle-star absolute text-mystic/20 text-xs top-[40%] right-[12%]" style={{ animationDelay: '1s' }}>✧</span>
        <span className="sparkle-star absolute text-gold/15 text-sm bottom-[20%] left-[15%]" style={{ animationDelay: '1.5s' }}>✦</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="暦占術の3つの特徴"
          subtitle="Features"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const colors = ACCENT_COLORS[feature.accent];
            return (
              <div
                key={i}
                className={`frame-card corner-ornament p-7 text-center card-hover border-t-2 ${colors.border}`}
                style={{ boxShadow: `0 4px 30px ${colors.glow}` }}
              >
                {/* Number */}
                <div className="font-display italic text-gold/20 text-4xl mb-2">
                  {feature.num}
                </div>

                {/* Icon */}
                <div className={`text-3xl mb-4 ${colors.text}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-gold-bright text-base font-bold mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-dim text-sm leading-[1.9]">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
