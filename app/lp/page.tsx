import { Metadata } from 'next';
import LpNavigation from '@/components/lp/LpNavigation';
import HeroSection from '@/components/lp/HeroSection';
import MethodBranding from '@/components/lp/MethodBranding';
import FeaturesSection from '@/components/lp/FeaturesSection';
import TestimonialsSection from '@/components/lp/TestimonialsSection';
import FaqSection from '@/components/lp/FaqSection';
import FinalCTA from '@/components/lp/FinalCTA';
import LineCTA from '@/components/LineCTA';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/lp/GrainOverlay';
import { FAQ_ITEMS } from '@/data/lp-content';

export const metadata: Metadata = {
  title: '暦占術 | 星座×数秘で導く108タイプの恋愛診断',
  description:
    '暦占術師・暦（こよみ）が星座×数秘術で導く108タイプの恋愛診断。あなたの恋愛パターン・相性・運命のパートナーを無料で鑑定。',
};

export default function LpPage() {
  /* ─── Structured Data (JSON-LD) ─── */
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
    name: '暦占術 星座×数秘タイプ診断',
    description: '星座×数秘術であなたの恋愛パターンを108タイプに分類。完全無料・30秒で診断完了。',
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
  };

  return (
    <>
      <LpNavigation />
      <GrainOverlay />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* Page Sections — Stitch デザイン準拠 */}
      <HeroSection />
      <MethodBranding />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />

      {/* LINE CTA */}
      <section className="py-16 sm:py-20 px-5 bg-celestial-2">
        <div className="max-w-md mx-auto">
          <LineCTA />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
}
