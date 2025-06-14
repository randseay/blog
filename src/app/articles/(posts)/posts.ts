import * as HowIBuiltMyBlogContent from '@articles/(posts)/how-i-built-my-blog/content.mdx';
import HowIBuiltMyBlogPost from '@articles/(posts)/how-i-built-my-blog/content.mdx';
import * as ConnectionCapitalContent from '@articles/(posts)/connection-capital/content.mdx';
import ConnectionCapitalPost from '@articles/(posts)/connection-capital/content.mdx';
import * as InfiniteScrollContent from '@articles/(posts)/react-infinite-scroll/content.mdx';
import InfiniteScrollPost from '@articles/(posts)/react-infinite-scroll/content.mdx';
import { infiniteScrollFiles } from '@articles/(posts)/react-infinite-scroll/files';

export const posts = [
  {
    title: HowIBuiltMyBlogContent?.title,
    published: HowIBuiltMyBlogContent?.published,
    author: HowIBuiltMyBlogContent?.author,
    link: `/articles/${HowIBuiltMyBlogContent?.slug}`,
    tags: HowIBuiltMyBlogContent?.tags.sort((a, b) => a.localeCompare(b)),
    summary: HowIBuiltMyBlogContent?.summary,
    content: HowIBuiltMyBlogPost,
  },
  {
    title: ConnectionCapitalContent?.title,
    published: ConnectionCapitalContent?.published,
    author: ConnectionCapitalContent?.author,
    link: `/articles/${ConnectionCapitalContent?.slug}`,
    tags: ConnectionCapitalContent?.tags.sort((a, b) => a.localeCompare(b)),
    summary: ConnectionCapitalContent?.summary,
    content: ConnectionCapitalPost,
  },
  {
    title: InfiniteScrollContent?.title,
    published: InfiniteScrollContent?.published,
    author: InfiniteScrollContent?.author,
    link: `/articles/${InfiniteScrollContent?.slug}`,
    tags: InfiniteScrollContent?.tags.sort((a, b) => a.localeCompare(b)),
    summary: InfiniteScrollContent?.summary,
    content: InfiniteScrollPost,
    files: infiniteScrollFiles,
  },
];

export const published = posts
  .filter((post) => !!post.published)
  .sort((a, b) => {
    const aDate =
      a.published && !isNaN(new Date(a.published).getTime())
        ? new Date(a.published).getTime()
        : 0;
    const bDate =
      b.published && !isNaN(new Date(b.published).getTime())
        ? new Date(b.published).getTime()
        : 0;
    return bDate - aDate;
  });

// Collect all unique tags
export const tags = Array.from(
  new Set(published.flatMap((post) => post.tags || []))
).sort((a, b) => a.localeCompare(b));
