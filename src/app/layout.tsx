import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { Schema } from '@/components/Schema';
import { ScrollProgress } from '@/components/ScrollProgress';
import { MobileBar } from '@/components/MobileBar';
import { organizationSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: '%s | instateutaustin.com' },
  description: SITE.description,
  verification: {
    google: 'u4HSpLCVqGTqdAuYoBN5D8F6dITeppTEfJ1No5X8JkY',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Austin, Texas',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#BF5700',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <Schema data={organizationSchema()} />
      </head>
      <body className="pt-16 pb-20 md:pb-0">
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
