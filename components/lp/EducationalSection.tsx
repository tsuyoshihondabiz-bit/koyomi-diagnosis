import SectionHeading from './SectionHeading';
import { NUMEROLOGY_NUMBERS } from '@/data/lp-content';

export default function EducationalSection() {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 bg-[#060612]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="数秘術と9つの運命数"
          subtitle="Numerology"
        />

        {/* Intro text */}
        <div className="max-w-2xl mx-auto mb-14">
          <p className="text-text/80 text-sm leading-[2] mb-4">
            数秘術（ヌメロロジー）は、古代ギリシャの数学者ピタゴラスが体系化した占術です。
            「万物は数なり」という思想のもと、生年月日から導かれる1〜9の運命数があなたの本質を表します。
          </p>
          <p className="text-text-dim text-sm leading-[2]">
            計算方法はシンプル——生年月日のすべての数字を1桁になるまで足し合わせるだけ。
            例えば1990年5月15日なら、1+9+9+0+5+1+5=30、3+0=<strong className="text-gold">3</strong>。
            この数字が、あなたの運命数です。
          </p>
        </div>

        {/* Pull quote */}
        <div className="text-center mb-14">
          <p className="font-display italic text-text-dim/40 text-sm sm:text-base tracking-wider">
            "All is Number" — Pythagoras
          </p>
        </div>

        {/* Numbers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden">
          {NUMEROLOGY_NUMBERS.map((item) => (
            <div
              key={item.num}
              className="bg-[#060612] p-6"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display italic text-gold/40 text-3xl">
                  {item.num}
                </span>
                <h3 className="font-serif text-text text-sm font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-dim text-xs leading-[1.8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
