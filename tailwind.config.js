/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'Courier', 'monospace'],
        display: ['var(--font-roboto-serif)', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
  ],
};
