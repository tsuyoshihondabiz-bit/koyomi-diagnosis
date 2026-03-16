import SectionHeading from './SectionHeading';
import { NUMEROLOGY_NUMBERS } from '@/data/lp-content';

export default function EducationalSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-celestial-2 overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute top-[20%] right-[-5%] pointer-events-none select-none opacity-[0.03]" aria-hidden="true">
        <span className="font-serif text-[12rem] text-gold font-bold">数</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="数秘術と9つの運命数"
          subtitle="Numerology"
        />

        {/* Intro text in frame */}
        <div className="frame-card p-6 sm:p-8 mb-12 max-w-2xl mx-auto">
          <p className="text-text/70 text-sm leading-[2] mb-4">
            数秘術（ヌメロロジー）は、古代ギリシャの数学者ピタゴラスが体系化した占術です。
            「万物は数なり」という思想のもと、生年月日から導かれる1〜9の運命数があなたの本質を表します。
          </p>
          <p className="text-text-dim text-sm leading-[2]">
            計算方法はシンプル——生年月日のすべての数字を1桁になるまで足し合わせるだけ。
            例えば1990年5月15日なら、1+9+9+0+5+1+5=30、3+0=<strong className="text-gold font-bold">3</strong>。
            この数字が、あなたの運命数です。
          </p>
        </div>

        {/* Pythagoras quote */}
        <div className="text-center mb-12">
          <p className="font-display italic text-gold/40 text-base sm:text-lg tracking-wider">
            &ldquo;All is Number&rdquo;
          </p>
          <p className="text-text-dim/40 text-[10px] tracking-[0.3em] mt-1">&mdash; PYTHAGORAS</p>
        </div>

        {/* Numbers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {NUMEROLOGY_NUMBERS.map((item) => (
            <div
              key={item.num}
              className="frame-card corner-ornament p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="num-badge">{item.num}</span>
                <h3 className="font-serif text-gold-bright text-base font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-dim text-sm leading-[1.8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
