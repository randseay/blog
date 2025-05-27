'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { published, tags } from '@articles/(posts)/posts';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import DateTimeStamp from '@components/DateTimeStamp';
import Tag from '@components/Tag';
import TaggedWith from '@components/TaggedWith';

export default function Articles() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? published.filter((post) => post.tags?.includes(selectedTag))
    : published;

  // Helper to update the URL
  const setTag = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <PageWrap>
      <Prose>
        <h1>Articles</h1>
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
        <hr />
        <div className="flex flex-col gap-y-10">
          {filteredPosts.map((post, i) =>
            !!post.published ? (
              <span key={`post-${i}`} className="flex flex-col gap-y-1">
                <span className="flex items-center gap-x-4">
                  <DateTimeStamp date={post.published} />
                  &bull;
                  <TaggedWith tags={post.tags} />
                </span>
                <Link className="text-3xl font-bold" href={post.link}>
                  {post.title}
                </Link>
              </span>
            ) : null
          )}
        </div>
      </Prose>
    </PageWrap>
  );
}
