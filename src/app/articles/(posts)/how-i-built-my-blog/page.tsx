import { Suspense } from 'react';

import Meta, { MetaProps } from '@components/Meta';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';

import Content from './content.mdx';

export default function HowIBuiltMyBlogArticle() {
  return (
    <Suspense>
      <PageWrap>
        <Prose>
          <Content
            components={{
              Meta(props: MetaProps) {
                return <Meta {...props} />;
              },
            }}
          />
        </Prose>
      </PageWrap>
    </Suspense>
  );
}
