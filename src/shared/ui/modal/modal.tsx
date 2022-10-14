import { FC } from 'react'

import { classNames } from 'shared/lib/class-names'
import { stopClickBubbling } from 'shared/lib/eventHelpers'
import { Children, ClassName } from 'shared/types'

import { Overlay } from '../overlay/overlay'
import { Portal } from '../portal/portal'
import css from './modal.module.sass'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
} & ClassName &
  Children

export const Modal: FC<ModalProps> = ({ className = '', children, isOpen, onClose, lazy = true }) => {
  return (
    <Portal>
      <Overlay isVisible={isOpen} onClose={onClose}>
        <div
          onClick={stopClickBubbling<HTMLDivElement, MouseEvent>}
          className={classNames({ cls: css.modalContainer, adds: [className] })}
        >
          <div>{children}</div>
        </div>
      </Overlay>
    </Portal>
  )
}
