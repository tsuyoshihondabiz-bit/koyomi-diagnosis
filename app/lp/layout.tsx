import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://koyomi-uranai.com';

export const metadata: Metadata = {
  title: 'こよみ式 星座×数秘タイプ診断 | 108タイプ無料診断 | 数秘術×星座占い',
  description:
    '星座×数秘術であなたの恋愛パターンを108タイプに分類。古代ギリシャ発祥の数秘術と西洋占星術を組み合わせた独自メソッド。完全無料・30秒で診断完了。',
  openGraph: {
    title: 'こよみ式 星座×数秘タイプ診断 | 108タイプ無料診断 | 数秘術×星座占い',
    description:
      '星座×数秘術であなたの恋愛パターンを108タイプに分類。古代ギリシャ発祥の数秘術と西洋占星術を組み合わせた独自メソッド。完全無料・30秒で診断完了。',
    images: [`${siteUrl}/ogp-default.jpg`],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@koyomi_uranai',
  },
  alternates: {
    canonical: `${siteUrl}/lp`,
  },
};

export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
