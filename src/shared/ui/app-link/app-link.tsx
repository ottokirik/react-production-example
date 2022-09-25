import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/class-names'

import classes from './app-link.module.sass'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
} & LinkProps

export const AppLink = (props: AppLinkProps): JSX.Element => {
  const { className = '', children, to, theme = AppLinkTheme.PRIMARY, ...rest } = props
  return (
    <Link to={to} className={classNames({ cls: classes.appLink, adds: [className, classes[theme]] })} {...rest}>
      {children}
    </Link>
  )
}
