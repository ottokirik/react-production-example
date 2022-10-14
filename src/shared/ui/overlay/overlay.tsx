import { FC, useCallback, useEffect } from 'react'

import { classNames } from 'shared/lib/class-names'
import { Children, ClassName } from 'shared/types'

import css from './overlay.module.sass'

type OverlayProps = {
  isVisible: boolean
  onClose: () => void
} & ClassName &
  Children

export const Overlay: FC<OverlayProps> = ({ className = '', children, isVisible, onClose }) => {
  const mods: Record<string, boolean> = {
    [css.visible]: isVisible,
  }

  const handleClose = (): void => onClose()
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isVisible) {
        onClose()
      }
    },
    [onClose, isVisible]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div onClick={handleClose} className={classNames({ cls: css.overlay, mods, adds: [className] })}>
      {children}
    </div>
  )
}
