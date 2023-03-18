'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import useTheme from '@hooks/useTheme';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const { theme, toggle } = useTheme();
  // console.log({ theme });

  return (
    <main>
      <h1 className="dark:text-white text-gray-800 text-5xl">Hello There</h1>

      {/* <button className="text-blue-600" onClick={() => toggle()}>
        Toggle
      </button> */}

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
