import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

/**
 * Primary Amharic font (Chiret-style, uploaded as Seat-Regular).
 * Used for all Amharic body + display text.
 */
const amharic = localFont({
  src: [
    {
      path: '../public/fonts/Seat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Seat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-amharic',
  display: 'swap',
});

/**
 * Cormorant Garamond — kept for small Latin accents
 * (the "A · M" monogram, numerals in dates, etc.).
 */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

/**
 * Outfit — tiny Latin meta labels only.
 */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'አሮን እና ምስራቅ — የሰርግ በዓል',
  description:
    'የዲያቆን አሮን እና ምስራቅ የሰርግ ፎቶዎች፣ ታሪኮች እና መልዕክቶች። ለሙሽራዋ ማስታወሻ ይተዉ።',
  openGraph: {
    title: 'አሮን እና ምስራቅ — የሰርግ በዓል',
    description:
      'የዲያቆን አሮን እና ምስራቅ የሰርግ ፎቶዎች እና መልዕክቶች።',
    type: 'website',
    locale: 'am_ET',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="am"
      className={`${amharic.variable} ${cormorant.variable} ${outfit.variable}`}
    >
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
