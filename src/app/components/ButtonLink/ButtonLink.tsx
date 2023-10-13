import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type ButtonLinkProps = {
  variant?: 'primary' | 'secondary';
};

export default function ButtonLink({
  variant = 'primary',
  ...rest
}: ButtonLinkProps & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={classNames(
        'rounded-md p-2 text-base font-semibold sm:text-lg',
        {
          'bg-amber-500 px-4 text-white hover:bg-amber-400 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-400':
            variant === 'primary',
          'text-gray-800 hover:bg-gray-200 hover:text-amber-600 dark:text-white dark:hover:bg-gray-800  dark:hover:text-blue-300':
            variant === 'secondary',
        }
      )}
      {...rest}
    />
  );
}
