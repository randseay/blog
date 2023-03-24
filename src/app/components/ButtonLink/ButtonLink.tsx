import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type ButtonLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      className="rounded-md bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400"
      {...props}
    />
  );
}
