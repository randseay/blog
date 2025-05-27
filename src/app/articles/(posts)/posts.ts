import * as ConnectionCapitalPost from '@articles/(posts)/connection-capital/content.mdx';
import * as InfiniteScrollPost from '@articles/(posts)/react-infinite-scroll/content.mdx';

export const posts = [
  {
    title: ConnectionCapitalPost?.title,
    published: ConnectionCapitalPost?.published,
    link: `/articles/${ConnectionCapitalPost?.slug}`,
    tags: ConnectionCapitalPost?.tags,
  },
  {
    title: InfiniteScrollPost?.title,
    published: InfiniteScrollPost?.published,
    link: `/articles/${InfiniteScrollPost?.slug}`,
    tags: InfiniteScrollPost?.tags,
  },
];

export const published = posts.filter((post) => !!post.published);

// Collect all unique tags
export const tags = Array.from(
  new Set(published.flatMap((post) => post.tags || []))
);
