import { Feed } from 'feed';
import { NextResponse } from 'next/server';
import React from 'react';

import { posts } from '@articles/(posts)/posts';
import { EditorForRSS } from './EditorForRss';

const siteUrl = 'https://randseay.com';

export async function GET() {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const feed = new Feed({
    title: "Rand Seay's Blog",
    description: 'A collection of articles and thoughts by Rand Seay',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Rand Seay`,
  });

  posts
    .filter((post) => !!post.published)
    .forEach((post) => {
      feed.addItem({
        title: post.title,
        author: post.author
          ? [{ name: post.author, email: 'randsignsup@gmail.com' }]
          : [],
        id: `${siteUrl}${post.link}`,
        link: `${siteUrl}${post.link}`,
        date: post.published ? new Date(post.published) : new Date(),
        description: post.summary || '',
        category: (post.tags || []).map((tag) => ({ name: tag })),
        content: ReactDOMServer.renderToStaticMarkup(
          React.createElement(post.content, {
            components: {
              Meta: () => null,
              Editor: () => EditorForRSS({ files: post.files }),
            },
          })
        ),
      });
    });

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
