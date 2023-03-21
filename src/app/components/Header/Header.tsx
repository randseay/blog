import ThemeSwitch from '@components/ThemeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between p-2">
      <h1 className="text-2xl font-light">Rand Seay</h1>

      <ThemeSwitch />
    </div>
  );
}
