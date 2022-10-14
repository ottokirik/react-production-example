import './loader.sass'

import { FC } from 'react'

import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'

export const Loader: FC<ClassName> = ({ className = '' }) => (
  <div className={classNames({ cls: 'lds-ellipsis', adds: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
