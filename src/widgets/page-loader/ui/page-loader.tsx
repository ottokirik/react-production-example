import { FC } from 'react'

import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Loader } from 'shared/ui'

import css from './page-loader.module.sass'

export const PageLoader: FC<ClassName> = ({ className = '' }) => (
  <div className={classNames({ cls: css.pageLoader, adds: [className] })}>
    <Loader />
  </div>
)
