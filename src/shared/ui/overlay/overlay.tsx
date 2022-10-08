import { ReactNode, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/class-names'
import classes from './overlay.module.sass'

interface OverlayProps {
  className?: string
  children: ReactNode
  isVisible: boolean
  onClose: () => void
}

export const Overlay = ({ className = '', children, isVisible, onClose }: OverlayProps): JSX.Element => {
  const mods: Record<string, boolean> = {
    [classes.visible]: isVisible,
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
    <div onClick={handleClose} className={classNames({ cls: classes.overlay, mods, adds: [className] })}>
      {children}
    </div>
  )
}
