import * as ConnectionCapitalPost from '@articles/(posts)/connection-capital/content.mdx';
import * as InfiniteScrollPost from '@articles/(posts)/react-infinite-scroll/content.mdx';

export const posts = [
  {
    title: ConnectionCapitalPost?.title,
    published: ConnectionCapitalPost?.published,
    link: `/articles/${ConnectionCapitalPost?.slug}`,
  },
  {
    title: InfiniteScrollPost?.title,
    published: InfiniteScrollPost?.published,
    link: `/articles/${InfiniteScrollPost?.slug}`,
  },
];
