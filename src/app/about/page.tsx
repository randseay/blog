import ButtonLink from '@components/ButtonLink';
import PageWrap from '@components/PageWrap';
import Prose from '@components/Prose';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import Content from './content.mdx';

export default function About() {
  return (
    <PageWrap>
      <div className="flex mb-16">
        <ButtonLink href="/" variant="secondary" className="gap-2">
          <ArrowLeftIcon className="h-5 w-5 stroke-2" />
          Back Home
        </ButtonLink>
      </div>
      <Prose className="px-4">
        <Content />
      </Prose>
    </PageWrap>
  );
}
