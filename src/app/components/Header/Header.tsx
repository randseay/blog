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

      <ThemeSwitch />
    </div>
  );
}
