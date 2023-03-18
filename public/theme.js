(function initTheme() {
  var theme = localStorage.getItem('theme');
  var osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (theme === 'dark') {
    console.log('dark');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (theme === 'light') {
    console.log('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else if (osPrefersDark) {
    console.log('dark os');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'os');
  } else {
    console.log('light os');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'os');
  }
})();
