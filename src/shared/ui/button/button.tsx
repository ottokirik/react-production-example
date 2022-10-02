import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/class-names'
import classes from './button.module.sass'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

type ButtonProps = {
  children?: ReactNode
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, className = '', theme, type = 'button', ...rest } = props
  const themeClass = theme !== undefined ? classes[theme] : ''

  return (
    <button type={type} className={classNames({ cls: classes.button, adds: [className, themeClass] })} {...rest}>
      {children}
    </button>
  )
}
