import DateTimeStamp from '@components/DateTimeStamp';
import Editor from '@components/Editor';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import TaggedWith from '@components/TaggedWith';

import Content from './content.mdx';

const files = {
  '/App.tsx': `import { InfiniteScroll } from './InfiniteScroll';

export default function App() {
  const fetchMore = () => console.log('fetching more');

  return (
    <div>
      <h1>Scroll to fetch more</h1>

      <InfiniteScroll fetchMore={fetchMore} hasMore>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
}`,
  '/InfiniteScroll.tsx': `import { useCallback, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  fetchMore: () => void;
  hasMore: boolean;
}

export function InfiniteScroll({
  children,
  fetchMore,
  hasMore,
}: Props) {
  const observer = useRef<IntersectionObserver | null>(null);

  const end = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      if (!node || !hasMore) return;

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchMore();
          }
        },
        { threshold: 1 }
      );

      observer.current.observe(node);
    },
    [fetchMore, hasMore]
  );

  return (
    <div>
      {children}
      {hasMore && <div ref={end} />}
    </div>
  );
}

`,
};

export default function InfiniteScrollArticle() {
  return (
    <PageWrap>
      <Prose>
        <Content
          components={{
            Meta({ date, tags }: { date: string; tags: string[] }) {
              return (
                <span className="flex items-center gap-x-2">
                  <DateTimeStamp date={date} />
                  &bull; <TaggedWith tags={tags} />
                </span>
              );
            },
            Editor() {
              return <Editor files={files} />;
            },
          }}
        />
      </Prose>
    </PageWrap>
  );
}
