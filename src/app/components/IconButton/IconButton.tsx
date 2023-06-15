import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type IconButtonProps = {
  variant?: 'primary' | 'secondary';
};

export default function IconButton({
  variant = 'primary',
  ...rest
}: IconButtonProps & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={classNames({
        'text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300':
          variant === 'primary',
        'text-gray-800 hover:bg-gray-200 hover:text-amber-600 dark:hover:bg-gray-800 dark:hover:text-blue-300':
          variant === 'secondary',
      })}
      {...rest}
    />
  );
}
