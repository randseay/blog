import classNames from 'classnames';

interface PageWrapProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrap({ children, className }: PageWrapProps) {
  return (
    <div className={classNames('mx-auto my-16 max-w-5xl px-4', className)}>
      {children}
    </div>
  );
}
