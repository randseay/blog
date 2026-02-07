'use client';

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    setTheme(
      theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark',
    );
  };

  return (
    <div className="flex items-center gap-x-1">
      <p className="hidden font-light text-gray-500 dark:text-gray-400 sm:block">
        Theme
      </p>

      <button
        onClick={changeTheme}
        className="rounded-full p-2 text-amber-600 hover:bg-gray-200 hover:text-gray-900 dark:text-blue-300 dark:hover:bg-gray-800 dark:hover:text-white"
        title="Switch Theme Button"
      >
        {theme === 'light' ? (
          <SunIcon className="h-6 w-6" />
        ) : theme === 'system' ? (
          <ComputerDesktopIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
