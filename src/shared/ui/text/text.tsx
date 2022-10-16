import { FC } from 'react'

import css from './text.module.sass'

interface TextProps {
  title?: string
  text?: string
}

export const Text: FC<TextProps> = ({ title, text }) => {
  return (
    <div className={css.container}>
      {title !== undefined && <h3 className={css.title}>{title}</h3>}
      {text !== undefined && <p className={css.text}>{text}</p>}
    </div>
  )
}
