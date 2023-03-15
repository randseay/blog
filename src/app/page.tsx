import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Image
        src="/headshot.jpg"
        alt="Headshot of Rand"
        width={1000}
        height={1000}
        priority
      />
    </main>
  );
}
