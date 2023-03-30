import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import ButtonLink from '@components/ButtonLink';
import PageWrap from '@components/PageWrap';
import TextLink from '@components/TextLink';

export default function Home() {
  return (
    <main>
      <PageWrap className="flex items-center gap-x-8">
        <Image
          src="/headshot.jpg"
          alt="Headshot of Rand"
          width={300}
          height={300}
          priority
          className="rounded-full outline outline-offset-8 outline-amber-500 dark:outline-blue-300"
        />

        <div className="flex flex-col gap-y-4">
          <h1 className="font-display text-8xl">Hello!</h1>

          <p className="text-2xl font-light">
            My name is Rand, and I am a husband, father, and frontend engineer.
            I love collaborating with talented people in the space where
            engineering meets design.
          </p>

          <div className="inline-flex">
            <ButtonLink href="/about">
              <span className="flex items-center gap-x-1">
                More <ArrowRightIcon className="h-5 w-5" />
              </span>
            </ButtonLink>
          </div>
        </div>
      </PageWrap>
    </main>
  );
}
