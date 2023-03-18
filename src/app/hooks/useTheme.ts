import useLocalStorage from '@hooks/useLocalStorage';
import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(null);
  // const [theme, setTheme] = useLocalStorage(
  //   'theme',
  //   localStorage.getItem('theme') || 'os'
  // );

  useEffect(() => {
    if (window !== undefined) {
      const osPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (osPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggle = () =>
    setTheme(theme === 'os' ? 'dark' : theme === 'dark' ? 'light' : 'os');

  return { theme, setTheme, toggle } as const;
}
