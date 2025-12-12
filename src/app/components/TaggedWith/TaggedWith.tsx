import Tag from '@components/Tag';

export default function TaggedWith({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-2">
      <span className="font-semibold text-base sm:text-lg">tagged with</span>
      {tags.map((tag) => (
        <Tag key={`tag-${tag}`} tag={tag} />
      ))}
    </div>
  );
}
