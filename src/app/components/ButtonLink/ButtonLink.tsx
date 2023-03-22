import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type ButtonLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      className="rounded-md bg-amber-500 py-1 px-2 text-white dark:bg-blue-500 dark:text-white"
      {...props}
    />
  );
}
