'use client';

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

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
      theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
    );
  };

  return (
    <div className="flex items-center gap-x-1">
      <p className="text-lg font-light text-gray-500 dark:text-gray-400">
        Theme
      </p>

      <button
        onClick={changeTheme}
        className="rounded-full bg-gray-200 p-2 text-amber-600 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-300"
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
