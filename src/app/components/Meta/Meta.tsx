import DateTimeStamp from '@components/DateTimeStamp';
import TaggedWith from '@components/TaggedWith';

export interface MetaProps {
  date: string;
  tags: string[];
}

export default function Meta({ date, tags }: MetaProps) {
  return (
    <span className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:items-center">
      <DateTimeStamp date={date} />
      <span className="hidden sm:flex">&bull;</span>
      <TaggedWith tags={tags} />
    </span>
  );
}
