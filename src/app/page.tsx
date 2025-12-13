import { ArrowRightIcon, RssIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { published } from '@articles/(posts)/posts';
import ButtonLink from '@components/ButtonLink';
import DateTimeStamp from '@components/DateTimeStamp';
import IconButton from '@components/IconButton';
import { GitHub, LinkedIn } from '@components/Icons';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import TaggedWith from '@components/TaggedWith';

function Home() {
  const lastPost = published[0];

  return (
    <main>
      <PageWrap>
        <div className="flex flex-col items-center gap-16 sm:flex-row">
          <Prose>
            <h1>👋 Hello!</h1>

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
            src="/2024-04-headshot.jpg"
            alt="Headshot of Rand"
            width={275}
            height={275}
            priority
            className="rounded-full outline outline-amber-500 outline-offset-8 sm:mr-3 dark:outline-blue-300"
          />
        </div>

        <hr className="my-16 w-full border-gray-300 border-b dark:border-gray-700" />

        <Prose>
          <h2>A Little About Me</h2>
          <p>
            I am a Staff Front-End Engineer with 13 years of frontend and
            full-stack experience building scalable web applications with React
            and TypeScript, complemented by 3 years of engineering leadership.
            At <Link href="https://ngrok.com/">ngrok</Link>, I am driving
            architecture and implementation on the front-end platform team, and
            evolving <Link href="https://mantle.ngrok.com/">Mantle</Link>, our
            open-source component library. My background includes roles at{' '}
            <Link href="https://dispel.com/">Dispel</Link>, and{' '}
            <Link href="https://cloud.google.com/">Google Cloud</Link> with{' '}
            <Link href="https://cloud.google.com/bigquery">
              Google BigQuery
            </Link>{' '}
            and <Link href="https://kaggle.com">Kaggle</Link>, underscoring my
            ability to lead impactful projects in complex environments.
          </p>

          <p>
            My wife and I and our three kids are in the greater Portland area,
            and love the Pacific Northwest. I enjoy woodworking, cooking,
            reading, and playing basketball and ultimate frisbee.
          </p>
          <div className="not-prose inline-flex">
            <ButtonLink href="/about">
              <span className="flex items-center gap-x-1">
                More about me <ArrowRightIcon className="h-5 w-5 stroke-2" />
              </span>
            </ButtonLink>
          </div>
        </Prose>

        <hr className="my-16 w-full border-gray-300 border-b dark:border-gray-700" />

        <Prose>
          <h2 className="flex items-center gap-x-4">
            Latest Article{' '}
            <IconButton href="/rss" aria-label="RSS Feed">
              <RssIcon className="h-10 w-10 stroke-2" />
            </IconButton>
          </h2>

          <div className="flex flex-col gap-y-10">
            {lastPost && !!lastPost.published ? (
              <span className="flex flex-col gap-y-2">
                <span>
                  <Link
                    className="font-bold text-2xl sm:text-3xl"
                    href={lastPost.link}
                  >
                    {lastPost.title}
                  </Link>
                </span>
                <span className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:items-center">
                  <DateTimeStamp date={lastPost.published} />
                  <span className="hidden sm:flex">&bull;</span>
                  <TaggedWith tags={lastPost.tags} />
                </span>
              </span>
            ) : null}
          </div>

          <div className="not-prose mt-8 inline-flex">
            <ButtonLink href="/articles">
              <span className="flex items-center gap-x-1">
                More articles <ArrowRightIcon className="h-5 w-5 stroke-2" />
              </span>
            </ButtonLink>
          </div>
        </Prose>
      </PageWrap>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
