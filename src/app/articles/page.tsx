import Link from 'next/link';

import { posts } from '@articles/(posts)/posts';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import DateTimeStamp from '@components/DateTimeStamp';

export default function Articles() {
  return (
    <PageWrap>
      <Prose>
        <h1>Articles</h1>
        <div className="flex flex-col gap-y-4">
          {posts.map((post, i) =>
            !!post.published ? (
              <span key={`post-${i}`} className="flex items-center gap-x-4">
                <Link href={post.link}>{post.title}</Link>
                <DateTimeStamp date={post.published} />
              </span>
            ) : null
          )}
        </div>
      </Prose>
    </PageWrap>
  );
}
