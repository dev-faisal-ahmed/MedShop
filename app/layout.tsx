import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'MedShop',
  description: 'An Online Platform for Medicine',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} flex min-h-screen flex-col bg-emerald-50`}
      >
        {children}
      </body>
    </html>
  );
}
