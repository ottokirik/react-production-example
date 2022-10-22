import { FC, InputHTMLAttributes } from 'react'

import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'

import css from './input.module.sass'

type InputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement> &
  ClassName

export const Input: FC<InputProps> = ({ className, type = 'text', label = '', ...inputProps }) => {
  return (
    <label className={css.inputContainer}>
      {label}
      <input className={classNames({ cls: css.input, adds: [className] })} type={type} {...inputProps} />
    </label>
  )
}
