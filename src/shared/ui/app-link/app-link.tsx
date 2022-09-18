import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names';

import classes from './app-link.module.sass';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const { className = '', children, to, theme = AppLinkTheme.PRIMARY, ...rest } = props;
  return (
    <Link to={to} className={classNames({ cls: classes.appLink, adds: [className, classes[theme]] })} {...rest}>
      {children}
    </Link>
  );
};
