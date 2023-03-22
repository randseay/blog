import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import PageWrap from '@components/PageWrap';
import ButtonLink from '@components/ButtonLink';

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
          <h1 className="font-display text-8xl">Hi 👋</h1>

          <p>
            I'm Rand, a Senior Frontend Engineer with{' '}
            <a href="https://dispel.com/">Dispel</a>. I was formerly with Google
            Cloud at both{' '}
            <a href="https://cloud.google.com/bigquery">BigQuery</a> and{' '}
            <a href="https://kaggle.com">Kaggle</a>.
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
