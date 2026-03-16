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
  title: 'こよみ式 星座×数秘タイプ診断 | 108タイプ無料診断',
  description:
    '星座×数秘術であなたの恋愛パターンを108タイプに分類。30秒で無料診断。',
  openGraph: {
    title: 'こよみ式 星座×数秘タイプ診断 | 108タイプ無料診断',
    description:
      '星座×数秘術であなたの恋愛パターンを108タイプに分類。30秒で無料診断。',
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
