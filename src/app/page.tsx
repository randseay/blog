import Image from 'next/image';

import Header from '@components/Header';

export default function Home() {
  return (
    <main>
      <div className="w-full border-b border-gray-300 dark:border-gray-700">
        <Header />
      </div>

      <div className="mx-auto my-8 flex max-w-3xl items-center gap-x-8">
        <Image
          src="/headshot.jpg"
          alt="Headshot of Rand"
          width={300}
          height={300}
          priority
          className="rounded-full outline outline-offset-8 outline-amber-600 dark:outline-blue-300"
        />

        <h1 className="text-5xl text-gray-800 dark:text-white">Hello There</h1>
      </div>
    </main>
  );
}
