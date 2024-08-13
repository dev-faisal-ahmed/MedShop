import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';
import { Toaster } from 'sonner';
import { ReduxProvider } from './_redux/provider';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'MedShop',
  description: 'An Online Platform for Medicine',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} flex min-h-screen flex-col bg-primary-50`}
      >
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster richColors duration={1500} />
      </body>
    </html>
  );
}
