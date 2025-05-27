import DateTimeStamp from '@components/DateTimeStamp';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import TaggedWith from '@components/TaggedWith';

import Content from './content.mdx';

export default function ConnectionCapitalArticle() {
  return (
    <PageWrap>
      <Prose>
        <Content
          components={{
            Meta({ date, tags }: { date: string; tags: string[] }) {
              return (
                <span className="flex items-center gap-x-2">
                  <DateTimeStamp date={date} />
                  &bull; <TaggedWith tags={tags} />
                </span>
              );
            },
          }}
        />
      </Prose>
    </PageWrap>
  );
}
