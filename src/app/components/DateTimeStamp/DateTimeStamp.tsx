import { CalendarIcon } from '@heroicons/react/24/outline';

export function DateTimeStamp({ date }: { date: string }) {
  const timestamp = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="flex items-center gap-x-2">
      <CalendarIcon className="h-5 w-5 stroke-2" />
      <span className="text-base font-semibold sm:text-xl">{timestamp}</span>
    </div>
  );
}
