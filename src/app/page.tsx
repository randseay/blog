import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '@components/ButtonLink';
import IconButton from '@components/IconButton';
import { GitHub, LinkedIn } from '@components/Icons';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';

export default function Home() {
  return (
    <main>
      <PageWrap>
        <div className="flex items-center gap-x-16">
          <Prose>
            <h1>Hello!</h1>

            <p>
              My name is Rand, and I am a husband, father, and frontend
              engineer. I love collaborating in the space where engineering
              meets design.
            </p>

            <div className="not-prose flex gap-x-6">
              <IconButton href="https://github.com/randseay">
                <GitHub className="h-12 w-12" />
              </IconButton>

              <IconButton href="https://www.linkedin.com/in/randseay">
                <LinkedIn className="h-12 w-12" />
              </IconButton>
            </div>
          </Prose>

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

        <Prose>
          <h2>A Little About Me</h2>

          <p>
            I&apos;m the Lead Frontend Engineer at{' '}
            <Link href="https://dispel.com/">Dispel</Link>. I was formerly with{' '}
            <Link href="https://cloud.google.com/">Google Cloud</Link> at both{' '}
            <Link href="https://cloud.google.com/bigquery">BigQuery</Link> and{' '}
            <Link href="https://kaggle.com">Kaggle</Link>.
          </p>

          <p>
            My wife and I and our three kids are in the greater Portland area,
            and love the Pacific Northwest. I enjoy woodworking, cooking, and
            playing basketball.
          </p>

          <div className="not-prose inline-flex">
            <ButtonLink href="/about">
              <span className="flex items-center gap-x-1">
                More about me <ArrowRightIcon className="h-5 w-5 stroke-2" />
              </span>
            </ButtonLink>
          </div>
        </Prose>
      </PageWrap>
    </main>
  );
}
