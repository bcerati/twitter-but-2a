import { ReactNode } from 'react';

interface ITitleProps {
  children: ReactNode;
}

function Title({ children }: ITitleProps) {
  return (
    <div className="feed__header">
      <h2>{children}</h2>
    </div>
  );
}

export default Title;
