import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';

import Content from './content.mdx';

export default function Articles() {
  return (
    <PageWrap>
      <Prose>
        <Content />
      </Prose>
    </PageWrap>
  );
}
