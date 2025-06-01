import { Suspense } from 'react';

import { infiniteScrollFiles } from '@articles/(posts)/react-infinite-scroll/files';
import Editor from '@components/Editor';
import Meta, { MetaProps } from '@components/Meta';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';

import Content from './content.mdx';

export default function InfiniteScrollArticle() {
  return (
    <Suspense>
      <PageWrap>
        <Prose>
          <Content
            components={{
              Meta(props: MetaProps) {
                return <Meta {...props} />;
              },
              Editor() {
                return <Editor files={infiniteScrollFiles} />;
              },
            }}
          />
        </Prose>
      </PageWrap>
    </Suspense>
  );
}
