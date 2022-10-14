import { FC } from 'react'

import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/class-names'
import { Children, ClassName } from 'shared/types'

import css from './app-link.module.sass'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  theme?: AppLinkTheme
} & LinkProps &
  ClassName &
  Children

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const { className = '', children, to, theme = AppLinkTheme.PRIMARY, ...rest } = props
  return (
    <Link to={to} className={classNames({ cls: css.appLink, adds: [className, css[theme]] })} {...rest}>
      {children}
    </Link>
  )
}
