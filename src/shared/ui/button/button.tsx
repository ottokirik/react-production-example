import type { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Children } from 'shared/types'

import css from './button.module.sass'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

type ButtonProps = {
  theme?: ButtonTheme
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Children

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { children, className, theme, size = ButtonSize.MEDIUM, type = 'button', ...rest } = props
  const themeClass = theme !== undefined ? css[theme] : ''

  return (
    <button type={type} className={classNames({ cls: css.button, adds: [className, themeClass, css[size]] })} {...rest}>
      {children}
    </button>
  )
}
