import { ReactNode } from 'react';

interface ILinkItemProps {
  icon: string;
  active?: boolean;
  children: ReactNode;
}

function LinkItem({ icon, active = false, children }: ILinkItemProps) {
  const classes = ['sidebarOption'];

  if (active) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')}>
      <span className="material-icons"> {icon} </span>
      <h2>{children}</h2>
    </div>
  );
}

export default LinkItem;
