import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/class-names'
import classes from './button.module.sass'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

type ButtonProps = {
  children?: ReactNode
  theme?: ButtonTheme
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, className = '', theme, size = ButtonSize.MEDIUM, type = 'button', ...rest } = props
  const themeClass = theme !== undefined ? classes[theme] : ''

  return (
    <button
      type={type}
      className={classNames({ cls: classes.button, adds: [className, themeClass, classes[size]] })}
      {...rest}
    >
      {children}
    </button>
  )
}
