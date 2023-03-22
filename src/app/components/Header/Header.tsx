import Link from 'next/link';

import Logo from '@components/Logo';
import ThemeSwitch from '@components/ThemeSwitch';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-2">
        <div className="h-10 w-10 text-blue-400 dark:text-amber-300">
          <Logo />
        </div>

        <h1 className="font-display text-2xl font-light">Rand Seay</h1>
      </div>

      <div className="flex items-center gap-x-4">
        <nav className="flex items-center gap-x-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <ThemeSwitch />
      </div>
    </div>
  );
}
