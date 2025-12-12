import classNames from 'classnames';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export default function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={classNames(
        'prose-l prose dark:prose-invert sm:prose-2xl max-w-none prose-code:rounded-sm prose-inline-code:bg-gray-200/80 prose-code:px-2 prose-code:py-1 prose-headings:font-display prose-headings:font-medium prose-a:text-blue-500 prose-a:no-underline prose-code:before:content-none prose-code:after:content-none hover:prose-a:underline prose-inline-code:dark:bg-black/50 prose-a:dark:text-amber-300',
        className,
      )}
    >
      {children}
    </div>
  );
}
