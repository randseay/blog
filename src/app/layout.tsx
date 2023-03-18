import { Inter } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Rand Seay | Blog',
  description: 'Husband, father, developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 dark:bg-gray-900">
        <>{children}</>
        <Script src="/theme.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
