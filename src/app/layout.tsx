import { Inter } from 'next/font/google';
import { ServerThemeProvider } from 'next-themes';

import Providers from './providers';

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
    <ServerThemeProvider attribute="class">
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="bg-gray-100 dark:bg-gray-900">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
