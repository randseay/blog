import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

import Blurb from '@components/Blurb';
import ButtonLink from '@components/ButtonLink';
import PageWrap from '@components/PageWrap';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageWrap>
      <div className="flex">
        <ButtonLink href="/articles" variant="secondary" className="gap-2">
          <ArrowLeftIcon className="h-5 w-5 stroke-2" />
          Back to Articles
        </ButtonLink>
      </div>
      {children}
      <Blurb />
    </PageWrap>
  );
}
