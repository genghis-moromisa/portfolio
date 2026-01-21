import './globals.css';

import type { Metadata } from 'next';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeScript } from '@/components/theme-script';

const siteUrl = 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kaito Mori — Portfolio',
    template: '%s — Kaito Mori'
  },
  description: 'Minimal, luxury-minded digital design and engineering for modern brands.',
  openGraph: {
    title: 'Kaito Mori — Portfolio',
    description: 'Minimal, luxury-minded digital design and engineering for modern brands.',
    url: siteUrl,
    siteName: 'Kaito Mori',
    images: ['/og.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaito Mori — Portfolio',
    description: 'Minimal, luxury-minded digital design and engineering for modern brands.',
    images: ['/og.svg']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeScript />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
