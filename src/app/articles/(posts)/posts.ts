import * as InfiniteScrollPost from '@articles/(posts)/react-infinite-scroll/content.mdx';

export const posts = [
  {
    title: InfiniteScrollPost?.title,
    published: InfiniteScrollPost?.published,
    link: `/articles/${InfiniteScrollPost?.slug}`,
  },
];
