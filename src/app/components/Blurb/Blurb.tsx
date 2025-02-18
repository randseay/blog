import Image from 'next/image';
import Link from 'next/link';

import Prose from '@components/Prose';

export default function Blurb() {
  return (
    <div className="flex gap-10 border-t-2 border-gray-200/80 pt-10 dark:border-gray-800">
      <Image
        src="/headshot.jpg"
        alt="Headshot of Rand"
        width={150}
        height={150}
        priority
        className="rounded-full outline outline-offset-8 outline-amber-500 dark:outline-blue-300 sm:mr-3"
      />
      <Prose>
        <h3>Written by Rand Seay</h3>
        <p>
          👋 Hi! I'm a husband, father, and frontend engineer. I love
          collaborating in the space where engineering meets design. Learn more{' '}
          <Link href="/about">about me</Link>.
        </p>
      </Prose>
    </div>
  );
}
