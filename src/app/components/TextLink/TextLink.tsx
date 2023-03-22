import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type TextLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function TextLink(props: TextLinkProps) {
  return (
    <Link
      className="font-normal text-blue-500 hover:underline dark:text-amber-300"
      {...props}
    />
  );
}
