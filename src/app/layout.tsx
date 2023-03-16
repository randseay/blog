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
      <body>
        <>
          {children}
          <Script strategy="beforeInteractive">
            {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }`}
          </Script>
        </>
      </body>
    </html>
  );
}
