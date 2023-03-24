import classNames from 'classnames';

import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type TextLinkProps = {
  variant?: 'primary' | 'secondary';
};

export default function TextLink({
  variant = 'primary',
  ...rest
}: TextLinkProps & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={classNames('font-regular hover:underline', {
        'text-blue-500 dark:text-amber-300': variant === 'primary',
        'text-amber-600 dark:text-blue-300': variant === 'secondary',
      })}
      {...rest}
    />
  );
}
