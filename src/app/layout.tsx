import { Inter, Roboto_Serif, Source_Code_Pro } from 'next/font/google';
import { ServerThemeProvider } from 'next-themes';

import Providers from './providers';

import Header from '@components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
});

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
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.variable} ${sourceCodePro.variable} ${robotoSerif.variable}`}
      >
        <body className="bg-gray-100 text-gray-800 transition duration-300 dark:bg-gray-900 dark:text-white">
          <Providers>
            <div className="w-full border-b border-gray-300 dark:border-gray-700">
              <Header />
            </div>
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
