'use client';

export default function LpNavigation() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-gradient-gold text-lg font-bold tracking-wider cursor-pointer"
        >
          暦占術
        </button>

        {/* Nav links - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-6 text-xs text-text-dim tracking-wider">
          <button onClick={() => scrollTo('fortune-teller')} className="hover:text-gold transition-colors cursor-pointer">
            鑑定士
          </button>
          <button onClick={() => scrollTo('method')} className="hover:text-gold transition-colors cursor-pointer">
            鑑定手法
          </button>
          <button onClick={() => scrollTo('features')} className="hover:text-gold transition-colors cursor-pointer">
            特徴
          </button>
          <button onClick={() => scrollTo('faq')} className="hover:text-gold transition-colors cursor-pointer">
            よくある質問
          </button>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('diagnosis-form')}
          className="text-xs font-serif font-bold bg-gradient-to-r from-gold to-gold-bright text-white px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_15px_rgba(184,150,62,0.3)] transition-all"
        >
          無料で占う
        </button>
      </div>
    </nav>
  );
}
