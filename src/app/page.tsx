import Image from 'next/image';

import Header from '@components/Header';

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-3xl">
        <Header />
      </div>

      <h1 className="text-5xl text-gray-800 dark:text-white">Hello There</h1>

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
