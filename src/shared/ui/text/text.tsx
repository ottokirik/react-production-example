import { memo } from 'react'

import css from './text.module.sass'

interface TextProps {
  title?: string
  text?: string
}

export const Text = memo((props: TextProps): JSX.Element => {
  const { title, text } = props

  return (
    <div className={css.container}>
      {title !== undefined && <h3 className={css.title}>{title}</h3>}
      {text !== undefined && <p className={css.text}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
