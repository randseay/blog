import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import ButtonLink from '@components/ButtonLink';
import IconButton from '@components/IconButton';
import { GitHub, LinkedIn } from '@components/Icons';
import PageWrap from '@components/PageWrap';
import TextLink from '@components/TextLink';

export default function Home() {
  return (
    <main>
      <PageWrap>
        <div className="flex items-center gap-x-16">
          <div className="flex flex-col gap-y-6">
            <h1 className="font-display text-8xl">Hello!</h1>

            <p className="text-3xl">
              My name is Rand, and I am a husband, father, and frontend
              engineer. I love collaborating in the space where engineering
              meets design.
            </p>

            <div className="flex gap-x-6">
              <IconButton href="https://github.com/randseay">
                <GitHub className="h-12 w-12" />
              </IconButton>

              <IconButton href="https://www.linkedin.com/in/randseay">
                <LinkedIn className="h-12 w-12" />
              </IconButton>
            </div>
          </div>

          <Image
            src="/headshot.jpg"
            alt="Headshot of Rand"
            width={275}
            height={275}
            priority
            className="rounded-full outline outline-offset-8 outline-amber-500 dark:outline-blue-300"
          />
        </div>

        <hr className="my-16 w-full border-b border-gray-300 dark:border-gray-700" />

        <h1 className="mb-6 font-display text-5xl font-medium">
          A Little About Me
        </h1>

        <p className="mb-6 text-2xl">
          I'm a Senior Frontend Engineer with{' '}
          <TextLink href="https://dispel.com/">Dispel</TextLink>. I was formerly
          with Google Cloud at both{' '}
          <TextLink href="https://cloud.google.com/bigquery">BigQuery</TextLink>{' '}
          and <TextLink href="https://kaggle.com">Kaggle</TextLink>.
        </p>

        <p className="mb-8 text-2xl">
          My wife and I and our three kids are in the greater Portland area, and
          love the Pacific Northwest. I enjoy woodworking, cooking, and playing
          basketball.
        </p>

        <div className="inline-flex">
          <ButtonLink href="/about">
            <span className="flex items-center gap-x-1">
              More about me <ArrowRightIcon className="h-5 w-5 stroke-2" />
            </span>
          </ButtonLink>
        </div>
      </PageWrap>
    </main>
  );
}
