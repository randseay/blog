import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type Props = {
  variant?: 'primary' | 'secondary';
};

export default function ButtonLink({
  variant = 'primary',
  ...rest
}: Props & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={classNames('rounded-md p-2 dark:text-white', {
        'bg-amber-500 px-4 text-white hover:bg-amber-400 dark:bg-blue-500 dark:hover:bg-blue-400':
          variant === 'primary',
        'text-gray-800 hover:bg-gray-200 hover:text-amber-600 dark:hover:bg-gray-800 dark:hover:text-blue-300':
          variant === 'secondary',
      })}
      {...rest}
    />
  );
}
