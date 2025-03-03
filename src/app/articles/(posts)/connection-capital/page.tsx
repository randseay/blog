import DateTimeStamp from '@components/DateTimeStamp';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';

import Content from './content.mdx';

export default function ConnectionCapitalArticle() {
  return (
    <PageWrap>
      <Prose>
        <Content
          components={{
            Published({ date }: { date: string }) {
              return <DateTimeStamp date={date} />;
            },
          }}
        />
      </Prose>
    </PageWrap>
  );
}
