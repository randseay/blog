import Image from 'next/image';
import { Inter } from 'next/font/google';

import ThemeSwitch from '@components/ThemeSwitch';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <ThemeSwitch />

      <h1 className="dark:text-white text-gray-800 text-5xl">Hello There</h1>

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
