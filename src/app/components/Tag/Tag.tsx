'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type TagProps = {
  tag: string;
  variant?: 'large' | 'small';
  selected?: boolean;
};

export default function Tag({ tag, variant = 'small', selected }: TagProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isArticlesPage = pathname === '/articles';

  // Helper to update the URL
  const setTag = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const tagClassNames = classNames(
    'rounded-full px-3 py-1 font-semibold inline-block',
    {
      'text-xl': variant === 'large',
      'text-base': variant === 'small',
      'bg-amber-500 text-white dark:bg-blue-500': selected,
      'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200':
        !selected,
    },
  );

  if (isArticlesPage) {
    return (
      <button
        role="button"
        className={tagClassNames}
        onClick={() => setTag(tag === 'all' ? null : tag)}
      >
        {tag}
      </button>
    );
  }

  return (
    <span className="not-prose">
      <Link href={`/articles?tag=${tag}`} className={tagClassNames}>
        {tag}
      </Link>
    </span>
  );
}
