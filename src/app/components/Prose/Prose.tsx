import classNames from 'classnames';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export default function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={classNames(
        'prose-l prose max-w-none dark:prose-invert sm:prose-2xl prose-headings:font-display prose-headings:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-a:dark:text-amber-300',
        className
      )}
    >
      {children}
    </div>
  );
}
