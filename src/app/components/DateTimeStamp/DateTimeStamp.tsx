import { CalendarIcon } from '@heroicons/react/24/outline';

export function DateTimeStamp({ date }: { date: string }) {
  const timestamp = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="flex items-center gap-2">
      <CalendarIcon className="h-5 w-5 stroke-2" />
      <time className="text-xl font-semibold">{timestamp}</time>
    </div>
  );
}
