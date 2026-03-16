import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#040410] border-t border-white/5 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Brand */}
        <div className="text-center mb-6">
          <p className="font-serif text-gold/60 text-sm font-bold tracking-wider">
            暦占術
          </p>
          <p className="text-text-dim/30 text-[10px] tracking-[0.3em] mt-1">
            Koyomi Fortune Method
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-[10px] text-text-dim/40 tracking-wider mb-6">
          <Link href="/lp" className="hover:text-text-dim/60 transition-colors">
            暦占術とは
          </Link>
          <span className="text-text-dim/15">|</span>
          <Link href="/" className="hover:text-text-dim/60 transition-colors">
            診断する
          </Link>
          <span className="text-text-dim/15">|</span>
          <span className="text-text-dim/25 cursor-default">
            プライバシーポリシー
          </span>
          <span className="text-text-dim/15">|</span>
          <span className="text-text-dim/25 cursor-default">
            特定商取引法に基づく表記
          </span>
          <span className="text-text-dim/15">|</span>
          <span className="text-text-dim/25 cursor-default">
            運営方針
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-text-dim/25 text-[10px]">
          &copy; 2026 暦占術 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
