import classNames from 'classnames';

interface PageWrapProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrap({ children, className }: PageWrapProps) {
  return (
    <div className={classNames('mx-auto my-8 max-w-3xl', className)}>
      {children}
    </div>
  );
}
