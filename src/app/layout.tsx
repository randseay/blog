import { Inter, Roboto_Serif, Source_Code_Pro } from 'next/font/google';
import { ServerThemeProvider } from 'next-themes';

import Providers from './providers';

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
        <body className="bg-gray-100 dark:bg-gray-900">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
