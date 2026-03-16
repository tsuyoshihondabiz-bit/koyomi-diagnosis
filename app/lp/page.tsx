'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DiagnosisForm from '@/components/DiagnosisForm';
import LoadingScreen from '@/components/LoadingScreen';
import LineCTA from '@/components/LineCTA';
import Footer from '@/components/Footer';
import { getZodiac } from '@/lib/zodiac';
import { getNumerologyNumber } from '@/lib/numerology';
import typesData from '@/data/types-108.json';

/* ─── Zodiac order for 108 types grid ─── */
const ZODIAC_ORDER = [
  '牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座',
  '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座',
];

const ZODIAC_SYMBOLS: Record<string, string> = {
  '牡羊座': '♈', '牡牛座': '♉', '双子座': '♊', '蟹座': '♋',
  '獅子座': '♌', '乙女座': '♍', '天秤座': '♎', '蠍座': '♏',
  '射手座': '♐', '山羊座': '♑', '水瓶座': '♒', '魚座': '♓',
};

/* ─── Numerology number data ─── */
const NUMEROLOGY_NUMBERS = [
  { num: 1, title: '開拓者', desc: 'リーダーシップと独立心に満ちた先駆者。自ら道を切り開く強い意志を持ちます。' },
  { num: 2, title: '協調者', desc: '調和と共感の才能に恵まれた仲裁者。人と人を結ぶ架け橋となります。' },
  { num: 3, title: '表現者', desc: '創造性と表現力に溢れるアーティスト。喜びと楽しさを周囲に届けます。' },
  { num: 4, title: '建設者', desc: '堅実で忍耐力に優れた実務家。確かな基盤を築く力を持ちます。' },
  { num: 5, title: '冒険者', desc: '自由と変化を愛する探検家。多彩な経験が人生を豊かにします。' },
  { num: 6, title: '奉仕者', desc: '愛と責任感に溢れる守護者。深い慈愛で人々を包み込みます。' },
  { num: 7, title: '探究者', desc: '知性と直感力を兼ね備えた賢者。真理を求め深く思索します。' },
  { num: 8, title: '達成者', desc: '強い意志と実行力を持つ成功者。目標を現実に変える力があります。' },
  { num: 9, title: '完成者', desc: '深い叡智と包容力を持つ導き手。全てを受け入れ昇華させます。' },
];

/* ─── FAQ data ─── */
const FAQ_ITEMS = [
  {
    q: '数秘術の運命数はどうやって計算するの？',
    a: '生年月日の数字をすべて足し合わせ、1桁になるまで繰り返し足し算します。例えば1990年5月15日なら、1+9+9+0+5+1+5=30→3+0=3で、運命数は3となります。',
  },
  {
    q: '星座と数秘術を組み合わせるメリットは？',
    a: '星座だけでは12パターン、数秘術だけでは9パターンですが、両方を掛け合わせることで108パターンの精密な診断が可能になります。あなたの性格や恋愛傾向をより細かく分析できます。',
  },
  {
    q: '診断結果は正確ですか？',
    a: '古代ギリシャ発祥の数秘術と西洋占星術に基づいた分析を行っています。あくまで占いの一つとしてお楽しみください。自己理解のきっかけとして活用していただければ幸いです。',
  },
  {
    q: '個人情報は安全ですか？',
    a: 'ご入力いただいたニックネームと生年月日は、お使いのブラウザ内（sessionStorage）にのみ保存されます。サーバーへの送信や第三者への提供は一切行いません。',
  },
  {
    q: '有料ですか？',
    a: 'いいえ、完全無料です。会員登録も不要で、何度でも診断いただけます。',
  },
];

/* ─── Key points for educational section ─── */
const KEY_POINTS = [
  { icon: '🏛️', title: '歴史ある学問', desc: '古代ギリシャの数学者ピタゴラスが体系化した、2500年以上の歴史を持つ占術体系です。' },
  { icon: '🔢', title: 'シンプルな計算', desc: '生年月日の全数字を1桁になるまで足すだけ。誰でもすぐに自分の運命数を算出できます。' },
  { icon: '✨', title: '9つの運命数', desc: '1〜9の運命数それぞれが固有の性格・才能・人生テーマを表し、あなたの本質を映し出します。' },
];

/* ─── Feature cards ─── */
const FEATURES = [
  {
    icon: '🌙',
    title: '星座×数秘の掛け合わせ',
    desc: '12星座 × 9つの運命数で108タイプの精密診断。他にはない独自メソッドであなただけのタイプを導き出します。',
    accent: 'mystic',
    highlight: '108タイプ',
    highlightClass: 'text-gold-bright font-bold',
  },
  {
    icon: '💕',
    title: '恋愛特化の診断',
    desc: '恋愛パターン・相性・ベストパートナーまでわかる。あなたの恋愛傾向を徹底分析します。',
    accent: 'rose',
    highlight: '恋愛傾向',
    highlightClass: 'text-rose font-bold',
  },
  {
    icon: '✨',
    title: '完全無料・登録不要',
    desc: '30秒で診断完了。会員登録もメールアドレスも不要。今すぐ気軽にお試しいただけます。',
    accent: 'gold',
    highlight: '30秒',
    highlightClass: 'text-teal font-bold',
  },
];

const ACCENT_BORDERS: Record<string, string> = {
  mystic: 'border-t-2 border-t-mystic/60',
  rose: 'border-t-2 border-t-rose/60',
  gold: 'border-t-2 border-t-gold/60',
};

export default function LpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showAllZodiac, setShowAllZodiac] = useState(false);
  const [stars, setStars] = useState<Array<{ w: number; t: string; l: string; o: number; dur: string; del: string }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 80 }, (_, i) => {
        const seed = (i * 137 + 7) % 100;
        return {
          w: seed % 3 + 1,
          t: `${(seed * 37) % 100}%`,
          l: `${(seed * 61 + i * 13) % 100}%`,
          o: seed % 50 / 100 + 0.3,
          dur: `${seed % 4 + 2}s`,
          del: `${(seed % 5) * 0.5}s`,
        };
      })
    );
  }, []);

  /* ─── Group types by zodiac ─── */
  const typesByZodiac = useMemo(() => {
    const grouped: Record<string, typeof typesData> = {};
    for (const z of ZODIAC_ORDER) {
      grouped[z] = typesData.filter((t) => t.zodiac === z);
    }
    return grouped;
  }, []);

  const visibleZodiacs = showAllZodiac ? ZODIAC_ORDER : ZODIAC_ORDER.slice(0, 3);

  /* ─── Diagnosis submit ─── */
  const handleSubmit = (nickname: string, year: number, month: number, day: number) => {
    setIsLoading(true);
    const zodiac = getZodiac(month, day);
    const numerology = getNumerologyNumber(year, month, day);
    const typeId = `${zodiac.en}-${numerology}`;

    sessionStorage.setItem('koyomi_nickname', nickname);
    sessionStorage.setItem('koyomi_year', String(year));
    sessionStorage.setItem('koyomi_month', String(month));
    sessionStorage.setItem('koyomi_day', String(day));

    setTimeout(() => {
      router.push(`/result/${typeId}`);
    }, 2500);
  };

  /* ─── Scroll to diagnosis form ─── */
  const scrollToForm = () => {
    document.getElementById('diagnosis-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ─── FAQ JSON-LD ─── */
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'こよみ式 星座×数秘タイプ診断',
    description: '星座×数秘術であなたの恋愛パターンを108タイプに分類。完全無料・30秒で診断完了。',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
  };

  /* ─── Banner star dots (deterministic) ─── */
  const bannerDots = Array.from({ length: 30 }, (_, i) => {
    const s = (i * 47 + 13) % 100;
    return {
      w: s % 2 + 1,
      top: `${(s * 37 + i * 7) % 100}%`,
      left: `${(s * 61 + i * 11) % 100}%`,
      opacity: (s % 40 + 20) / 100,
    };
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
          ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#040412] via-[#0a0a2e] to-[#080818] min-h-[92vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* Floating orbs */}
        <div className="orb w-[300px] h-[300px] bg-mystic/20 top-[10%] left-[-5%]" aria-hidden="true" />
        <div className="orb w-[250px] h-[250px] bg-rose/15 bottom-[10%] right-[-5%]" aria-hidden="true" style={{ animationDelay: '4s' }} />
        <div className="orb w-[200px] h-[200px] bg-gold/10 top-[50%] left-[60%]" aria-hidden="true" style={{ animationDelay: '8s' }} />

        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${s.w}px`,
                height: `${s.w}px`,
                top: s.t,
                left: s.l,
                opacity: s.o,
                animation: `twinkle ${s.dur} ease-in-out infinite`,
                animationDelay: s.del,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Moon */}
          <div
            className="text-7xl sm:text-8xl mb-6 inline-block"
            style={{
              animation: 'moonFloat 6s ease-in-out infinite',
              textShadow: '0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.2)',
            }}
          >
            ☽
          </div>

          {/* Sparkle decorations */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="sparkle text-gold-dim text-sm">✦</span>
            <span className="sparkle text-gold text-xs" style={{ animationDelay: '0.3s' }}>✦</span>
            <span className="sparkle text-gold-dim text-lg" style={{ animationDelay: '0.6s' }}>✧</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-gradient-gold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-3 leading-tight tracking-wide"
              style={{ textShadow: '0 0 30px rgba(201,168,76,0.15)' }}>
            こよみ式 星座×数秘タイプ診断
          </h1>

          {/* Subtitle */}
          <p className="font-display italic text-mystic/80 text-sm sm:text-base tracking-[0.2em] mb-5">
            — Zodiac × Numerology Diagnosis —
          </p>

          <p className="font-serif text-text text-base sm:text-lg mb-8 leading-relaxed">
            星座×数秘術であなたの恋愛パターンを<br className="sm:hidden" />
            <span className="text-gradient-gold font-bold">108タイプ</span>に分類
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="frame-card corner-ornament px-5 py-2 text-xs text-gold flex items-center gap-1.5">
              <span className="sparkle text-gold-bright text-[10px]">✦</span> 完全無料 <span className="sparkle text-gold-bright text-[10px]" style={{ animationDelay: '1s' }}>✦</span>
            </span>
            <span className="frame-card px-5 py-2 text-xs text-mystic flex items-center gap-1.5">
              <span className="text-mystic/60">◆</span> 30秒で診断 <span className="text-mystic/60">◆</span>
            </span>
            <span className="frame-card px-5 py-2 text-xs text-teal flex items-center gap-1.5">
              <span className="text-teal/60">◇</span> 108タイプ <span className="text-teal/60">◇</span>
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="btn-gold px-12 py-5 text-lg sm:text-xl cursor-pointer mb-10 tracking-wider"
            style={{ boxShadow: '0 4px 30px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)' }}
          >
            無料で診断する
          </button>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-gold-dim text-sm tracking-wider">
              <span className="sparkle text-gold text-xs">✧</span>
              {' '}診断者数{' '}
              <span className="text-gradient-gold font-bold text-base">50,000</span>
              人突破{' '}
              <span className="sparkle text-gold text-xs" style={{ animationDelay: '1s' }}>✧</span>
            </p>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </div>

        {/* Bottom ornamental divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════
          2. BANNER SECTION
          ══════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ height: '220px' }}>
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060620] via-[#0e1045] to-[#060620]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        {/* Top & bottom gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Star dots (deterministic) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {bannerDots.map((d, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${d.w}px`,
                height: `${d.w}px`,
                top: d.top,
                left: d.left,
                opacity: d.opacity,
              }}
            />
          ))}
          {/* Constellation lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
            <line x1="5%" y1="30%" x2="20%" y2="50%" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="20%" y1="50%" x2="35%" y2="25%" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="35%" y1="25%" x2="50%" y2="55%" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="50%" y1="55%" x2="65%" y2="35%" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="65%" y1="35%" x2="80%" y2="60%" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="80%" y1="60%" x2="95%" y2="40%" stroke="#c9a84c" strokeWidth="0.5" />
            {/* Star nodes */}
            <circle cx="20%" cy="50%" r="2" fill="#c9a84c" opacity="0.3" />
            <circle cx="50%" cy="55%" r="2" fill="#c9a84c" opacity="0.3" />
            <circle cx="80%" cy="60%" r="2" fill="#c9a84c" opacity="0.3" />
          </svg>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }} />

        <div className="relative z-10 h-full max-w-5xl mx-auto flex items-center justify-between px-6">
          {/* Left side */}
          <div className="flex flex-col gap-1.5">
            <p className="text-gold-dim text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              星の導き / 徹底＆緻密な分析力
            </p>
            <p className="text-gold-bright text-sm sm:text-base font-serif font-bold">
              108タイプから解る性格分析
            </p>
            <div className="mt-2 inline-block border-2 border-gold/40 px-5 py-2 rounded"
                 style={{ boxShadow: 'inset 0 0 20px rgba(201,168,76,0.08), 0 0 20px rgba(201,168,76,0.1)' }}>
              <span className="font-serif text-gradient-gold text-xl sm:text-2xl font-bold tracking-wider">
                こよみ
              </span>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right">
            <p className="font-serif text-gradient-gold text-5xl sm:text-7xl md:text-8xl font-bold leading-none"
               style={{ textShadow: '0 0 40px rgba(201,168,76,0.15)' }}>
              数秘術
            </p>
            <p className="font-display italic text-mystic/70 text-xs sm:text-sm mt-1.5 tracking-[0.3em]">
              Numerology
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. EDUCATIONAL SECTION 「数秘術とは？」
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-purple section-textured relative py-20 sm:py-24 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-6">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              数秘術（ヌメロロジー）とは？
            </h2>
          </div>

          <p className="font-display italic text-mystic/60 text-xs sm:text-sm text-center tracking-[0.2em] mb-12">
            What is Numerology?
          </p>

          {/* Body text in ornamental frame */}
          <div className="frame-card corner-ornament p-6 sm:p-8 mb-12">
            <div className="space-y-4 text-text text-sm sm:text-base leading-[1.9]">
              <p>
                数秘術（ヌメロロジー）は、古代ギリシャの数学者ピタゴラスが体系化したとされる、数字に宿る神秘的な意味を読み解く占術です。
                「万物は数なり」という思想のもと、生年月日から導かれる数字があなたの本質や運命を表すと考えられています。
              </p>
              <p>
                計算方法はシンプルです。生年月日のすべての数字を1桁になるまで足し合わせ、最終的に得られる1〜9の数字が「運命数（ライフパスナンバー）」となります。
                この運命数が、あなたの持って生まれた性格・才能・人生のテーマを示します。
              </p>
              <p>
                現代では心理学やカウンセリングの分野でも活用され、自己理解や人間関係の改善に役立てられています。
                ハリウッドセレブや経営者にも愛好家が多く、世界中で親しまれている占術の一つです。
              </p>
            </div>
          </div>

          {/* Key points cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {KEY_POINTS.map((point, i) => (
              <div key={i} className="frame-card corner-ornament p-6 text-center card-hover">
                <div className="text-4xl mb-4">{point.icon}</div>
                <p className="font-serif text-gradient-gold text-sm font-bold mb-2">{point.title}</p>
                <p className="text-text-dim text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Sparkle decorations between area */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <span className="sparkle text-gold-dim text-xs">✦</span>
            <span className="sparkle text-gold/60 text-sm" style={{ animationDelay: '0.5s' }}>✦</span>
            <span className="sparkle text-gold-dim text-xs" style={{ animationDelay: '1s' }}>✦</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. FEATURES SECTION
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-warm section-textured relative py-20 sm:py-24 px-4">
        {/* Scattered sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="sparkle absolute text-gold-dim/40 text-sm top-[15%] left-[8%]">✦</span>
          <span className="sparkle absolute text-gold-dim/30 text-xs top-[40%] right-[12%]" style={{ animationDelay: '1s' }}>✧</span>
          <span className="sparkle absolute text-gold-dim/40 text-sm bottom-[20%] left-[15%]" style={{ animationDelay: '1.5s' }}>✦</span>
          <span className="sparkle absolute text-mystic/30 text-xs top-[60%] right-[5%]" style={{ animationDelay: '0.5s' }}>✦</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-6">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              こよみ式診断の3つの特徴
            </h2>
          </div>

          <p className="font-display italic text-mystic/60 text-xs sm:text-sm text-center tracking-[0.2em] mb-12">
            Three Features
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className={`frame-card corner-ornament p-7 text-center card-hover ${ACCENT_BORDERS[feature.accent]}`}>
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="font-serif text-gradient-gold text-base font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {feature.desc.split(feature.highlight).map((part, j, arr) =>
                    j < arr.length - 1 ? (
                      <span key={j}>
                        {part}
                        <span className={feature.highlightClass}>{feature.highlight}</span>
                      </span>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. DIAGNOSIS FORM SECTION
          ══════════════════════════════════════════════ */}
      <section id="diagnosis-form" className="lp-bg-deep relative py-20 sm:py-24 px-4">
        {/* Subtle orb */}
        <div className="orb w-[200px] h-[200px] bg-mystic/10 top-[20%] right-[10%]" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-4">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              あなたのタイプを診断する
            </h2>
          </div>
          <p className="text-text-dim text-sm text-center mb-10 tracking-wide">
            ニックネームと生年月日を入力するだけ。30秒で完了します。
          </p>

          {/* Form in ornamental frame */}
          <div className="frame-card corner-ornament p-6 sm:p-10"
               style={{ boxShadow: '0 0 50px rgba(107,91,149,0.1), 0 0 100px rgba(201,168,76,0.05)' }}>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <DiagnosisForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. 108 TYPES GRID SECTION
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-ocean section-textured relative py-20 sm:py-24 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-6">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              全108タイプ一覧
            </h2>
          </div>

          <p className="font-display italic text-mystic/60 text-xs sm:text-sm text-center tracking-[0.2em] mb-12">
            108 Zodiac × Numerology Types
          </p>

          <div className="space-y-10">
            {visibleZodiacs.map((zodiac) => (
              <div key={zodiac}>
                <h3 className="font-serif text-gold text-lg font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl text-gold-dim">{ZODIAC_SYMBOLS[zodiac]}</span>
                  <span className="text-gradient-gold">{zodiac}</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
                  {typesByZodiac[zodiac]?.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => router.push(`/result/${type.id}`)}
                      className="frame-card px-2 py-3 text-center hover:border-gold/40 transition-all cursor-pointer group"
                    >
                      <p className="text-gold-bright text-[10px] sm:text-xs font-bold truncate group-hover:text-gradient-gold transition-colors">
                        {type.typeName}
                      </p>
                      <p className="text-text-dim text-[9px] mt-1">数秘{type.numerology}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {!showAllZodiac && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllZodiac(true)}
                className="frame-card px-10 py-4 text-gold text-sm hover:border-gold/40 transition-all cursor-pointer tracking-wider"
                style={{ boxShadow: '0 0 20px rgba(201,168,76,0.08)' }}
              >
                <span className="sparkle text-gold-dim text-xs mr-2">✦</span>
                もっと見る（残り9星座）
                <span className="sparkle text-gold-dim text-xs ml-2" style={{ animationDelay: '1s' }}>✦</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. NUMEROLOGY NUMBERS SECTION
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-purple section-textured relative py-20 sm:py-24 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-6">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              運命数1〜9の意味
            </h2>
          </div>

          <p className="font-display italic text-mystic/60 text-xs sm:text-sm text-center tracking-[0.2em] mb-12">
            The Nine Life Path Numbers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {NUMEROLOGY_NUMBERS.map((item) => (
              <div key={item.num} className="frame-card corner-ornament p-6 card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <span className="num-badge font-serif">{item.num}</span>
                  <h3 className="font-serif text-gradient-gold text-base font-bold">{item.title}</h3>
                </div>
                <p className="text-text-dim text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. FAQ SECTION
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-warm relative py-20 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="ornament-divider mb-6">
            <h2 className="heading-glow font-serif text-gradient-gold text-2xl sm:text-3xl font-bold text-center pb-2">
              よくある質問
            </h2>
          </div>

          <p className="font-display italic text-mystic/60 text-xs sm:text-sm text-center tracking-[0.2em] mb-12">
            Frequently Asked Questions
          </p>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="frame-card overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-text text-sm sm:text-base font-serif pr-4 leading-relaxed">
                    <span className="text-gradient-gold font-bold mr-3 text-base">Q.</span>
                    {item.q}
                  </span>
                  <span
                    className="text-gold-dim text-sm flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: expandedFaq === i ? '300px' : '0px',
                    opacity: expandedFaq === i ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 mb-4" />
                    <p className="text-text-dim text-sm leading-[1.8]">
                      <span className="text-gradient-mystic font-bold mr-3 text-base">A.</span>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. LINE CTA SECTION
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-deep py-16 sm:py-20 px-4">
        <div className="max-w-md mx-auto">
          <LineCTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. SECOND CTA + FOOTER
          ══════════════════════════════════════════════ */}
      <section className="lp-bg-deep relative py-16 sm:py-20 px-4 text-center">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="max-w-lg mx-auto frame-card corner-ornament p-8 sm:p-10"
             style={{ boxShadow: '0 0 40px rgba(201,168,76,0.08)' }}>
          <p className="sparkle text-gold text-2xl mb-3">✦</p>
          <p className="font-serif text-gradient-gold text-lg sm:text-xl font-bold mb-3">
            まだ診断していませんか？
          </p>
          <p className="text-text-dim text-sm mb-6">
            あなたの星座と数秘が導く、108タイプの恋愛パターンを今すぐ確認
          </p>
          <button
            onClick={scrollToForm}
            className="btn-gold px-12 py-5 text-lg cursor-pointer tracking-wider"
            style={{ boxShadow: '0 4px 30px rgba(201,168,76,0.3)' }}
          >
            無料で診断する
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
