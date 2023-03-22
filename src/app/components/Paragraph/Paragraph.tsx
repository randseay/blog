import classNames from 'classnames';
import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={classNames('text-2xl font-light', className)}>{children}</p>
  );
}
