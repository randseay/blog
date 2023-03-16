'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import useTheme from '@hooks/useTheme';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [theme, updateTheme] = useTheme();

  return (
    <main>
      <h1 className="dark:text-white text-gray-800 text-5xl">Hello There</h1>

      <button onClick={() => updateTheme('light')}>Light</button>
      <button onClick={() => updateTheme('dark')}>Dark</button>

      <Image
        src="/headshot.jpg"
        alt="Headshot of Rand"
        width={500}
        height={500}
        priority
      />
    </main>
  );
}
