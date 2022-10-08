import { ReactNode } from 'react'
import { classNames } from 'shared/lib/class-names'
import { stopClickBubbling } from 'shared/lib/eventHelpers'
import { Overlay } from '../overlay/overlay'
import { Portal } from '../portal/portal'
import classes from './modal.module.sass'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ className = '', children, isOpen, onClose }: ModalProps): JSX.Element | null => {
  const rootElement = document.getElementById('modal-container')

  return rootElement !== null ? (
    <Portal rootElement={rootElement}>
      <Overlay isVisible={isOpen} onClose={onClose}>
        <div
          onClick={stopClickBubbling<HTMLDivElement, MouseEvent>}
          className={classNames({ cls: classes.modalContainer, adds: [className] })}
        >
          <div>{children}</div>
        </div>
      </Overlay>
    </Portal>
  ) : null
}
