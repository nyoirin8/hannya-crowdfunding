// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '般若心経クラウドファンディング',
  description: '多言語翻訳プロジェクトを支援するクラウドファンディングサイト',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
