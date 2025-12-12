import ButtonLink from '@components/ButtonLink';
import Link from 'next/link';

import Logo from '@components/Logo';
import ThemeSwitch from '@components/ThemeSwitch';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <div className="h-10 w-10 text-blue-400 dark:text-amber-300">
            <Logo />
          </div>

          <h1 className="font-display font-light text-l sm:text-2xl">
            Rand Seay
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-x-3 sm:gap-x-6">
        <nav className="flex items-center gap-x-2">
          <ButtonLink variant="secondary" href="/about">
            About
          </ButtonLink>
          <ButtonLink variant="secondary" href="/articles">
            Articles
          </ButtonLink>
        </nav>

        <ThemeSwitch />
      </div>
    </div>
  );
}
