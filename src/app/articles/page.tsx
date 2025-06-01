'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { published, tags } from '@articles/(posts)/posts';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import DateTimeStamp from '@components/DateTimeStamp';
import Tag from '@components/Tag';
import TaggedWith from '@components/TaggedWith';
import { RssIcon } from '@heroicons/react/24/outline';
import IconButton from '@components/IconButton';

export default function Articles() {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? published.filter((post) => post.tags?.includes(selectedTag))
    : published;

  return (
    <PageWrap>
      <Prose>
        <h1 className="flex items-center gap-x-4">
          Articles{' '}
          <IconButton href="/rss" aria-label="RSS Feed">
            <RssIcon className="h-10 w-10 stroke-2" />
          </IconButton>
        </h1>
        <div className="flex items-center gap-x-2">
          <Tag tag="all" variant="large" selected={!selectedTag} />
          {tags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              variant="large"
              selected={selectedTag === tag}
            />
          ))}
        </div>
        <hr className="my-16 w-full border-b border-gray-300 dark:border-gray-700" />
        <div className="flex flex-col gap-y-10">
          {filteredPosts.map((post, i) =>
            !!post.published ? (
              <span key={`post-${i}`} className="flex flex-col gap-y-2">
                <span>
                  <Link
                    className="text-2xl font-bold sm:text-3xl"
                    href={post.link}
                  >
                    {post.title}
                  </Link>
                </span>
                <span className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:items-center">
                  <DateTimeStamp date={post.published} />
                  <span className="hidden sm:flex">&bull;</span>
                  <TaggedWith tags={post.tags} />
                </span>
              </span>
            ) : null
          )}
        </div>
      </Prose>
    </PageWrap>
  );
}
