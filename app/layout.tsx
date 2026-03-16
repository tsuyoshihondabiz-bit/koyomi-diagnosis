import type { Metadata } from 'next';
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const shippori = Shippori_Mincho({
  variable: '--font-shippori',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

const zen = Zen_Kaku_Gothic_New({
  variable: '--font-zen',
  subsets: ['latin'],
  weight: ['300', '500'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://koyomi-uranai.com';

export const metadata: Metadata = {
  title: '暦占術 | 星座×数秘で導く108タイプの恋愛診断',
  description:
    '暦占術師・暦（こよみ）が西洋占星術×数秘術で導く108タイプの恋愛診断。あなたの恋愛パターン・相性・運命のパートナーを無料で鑑定。',
  openGraph: {
    title: '暦占術 | 星座×数秘で導く108タイプの恋愛診断',
    description:
      '暦占術師・暦（こよみ）が西洋占星術×数秘術で導く108タイプの恋愛診断。無料で鑑定。',
    images: [`${siteUrl}/ogp-default.jpg`],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@koyomi_uranai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${shippori.variable} ${zen.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
