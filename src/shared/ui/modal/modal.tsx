import { FC, useEffect, useState } from 'react'

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

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = (): void => {
    setIsVisible(false)
    const timerId = setTimeout(() => {
      onClose()
      clearTimeout(timerId)
    }, 250)
  }

  useEffect(() => {
    if (isOpen) {
      const timerId = setTimeout(() => {
        setIsVisible(true)
        clearTimeout(timerId)
      }, 0)
    }
  }, [isOpen])

  if (!isOpen && !isVisible) return null

  return (
    <Portal>
      <Overlay isVisible={isVisible} onClose={handleClose}>
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
