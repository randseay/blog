import useLocalStorage from '@hooks/useLocalStorage';

export default function useTheme() {
  const isDark = (localStorage.theme = 'dark');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeNotFound = !('theme' in localStorage);
  const osPref = isDark || (themeNotFound && prefersDark) ? 'dark' : 'light';
  const [theme, setTheme] = useLocalStorage('theme', osPref);
  console.log({ prefersDark, osPref });

  const updateTheme = (t: 'dark' | 'light') => {
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTheme(t);
  };

  return [theme, updateTheme] as const;
}
