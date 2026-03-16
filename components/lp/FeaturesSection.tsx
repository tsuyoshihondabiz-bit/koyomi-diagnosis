import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    num: '01',
    icon: '☽',
    title: '圧倒的な具体性',
    desc: '12星座と9つの運命数の掛け合わせにより、108パターンの精密鑑定を実現。「いつ」「どこで」「誰と」という具体的な転機を明確にお伝えします。',
    accent: 'gold',
  },
  {
    num: '02',
    icon: '♡',
    title: '秘匿された伝統',
    desc: '歴史と理論に裏打ちされた西洋占星術と、古代ギリシャ発祥の数秘術を融合。暦占術師・暦が20年の研究で到達した独自メソッドです。',
    accent: 'rose',
  },
  {
    num: '03',
    icon: '✧',
    title: '個別最適化',
    desc: 'AIでは導き出せない、人の心の機微を含み取った究極のパーソナライズ診断。あなただけの恋愛傾向と運命を導き出します。',
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
    <section id="features" className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-3 overflow-hidden">
      {/* Scattered sparkles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="sparkle-star absolute text-gold/20 text-sm top-[15%] left-[8%]">✦</span>
        <span className="sparkle-star absolute text-mystic/20 text-xs top-[40%] right-[12%]" style={{ animationDelay: '1s' }}>✧</span>
        <span className="sparkle-star absolute text-gold/15 text-sm bottom-[20%] left-[15%]" style={{ animationDelay: '1.5s' }}>✦</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="選ばれる3つの理由"
          subtitle="Why Choose Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const colors = ACCENT_COLORS[feature.accent];
            return (
              <div
                key={i}
                className={`frame-card p-7 text-center card-hover border-t-2 ${colors.border}`}
                style={{ boxShadow: `0 4px 30px ${colors.glow}` }}
              >
                {/* Diamond number badge */}
                <div className="diamond-badge mx-auto mb-5">
                  <span className={`font-serif font-bold text-lg ${colors.text}`}>
                    {feature.num}
                  </span>
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
