import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './button.module.sass';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { children, className = '', theme, ...rest } = props;
  const themeClass = theme ? classes[theme] : '';

  return (
    <button className={classNames({ cls: classes.button, adds: [className, themeClass] })} {...rest}>
      {children}
    </button>
  );
};
