import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import ButtonLink from '@components/ButtonLink';
import PageWrap from '@components/PageWrap';
import Paragraph from '@components/Paragraph';
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
          <h1 className="font-display text-8xl">Hello</h1>

          <Paragraph>
            I'm Rand, a Senior Frontend Engineer with{' '}
            <TextLink href="https://dispel.com/">Dispel</TextLink>. I was
            formerly with Google Cloud at both{' '}
            <TextLink href="https://cloud.google.com/bigquery">
              BigQuery
            </TextLink>{' '}
            and <TextLink href="https://kaggle.com">Kaggle</TextLink>.
          </Paragraph>

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
