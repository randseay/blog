import { CalendarIcon } from '@heroicons/react/24/outline';

export function DateTimeStamp({ date }: { date?: string }) {
  if (!date) {
    return null;
  }
  const [year, month, day] = date.split('-').map(Number);
  const localDate = new Date(year, month - 1, day); // month is 0-based
  const timestamp = localDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-center gap-x-2">
      <CalendarIcon className="h-5 w-5 stroke-2" />
      <span className="font-semibold text-base sm:text-xl">{timestamp}</span>
    </div>
  );
}
