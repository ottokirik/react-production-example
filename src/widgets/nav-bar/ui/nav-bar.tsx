import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { useToggleFlag } from 'shared/lib/hooks'
import { Button, Modal } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

import classes from './nav-bar.module.sass'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: NavBarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isAuthModalOpen, toggleIsAuthModalOpen] = useToggleFlag()

  return (
    <nav className={classNames({ cls: classes.navBar, adds: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.authButton} onClick={toggleIsAuthModalOpen}>
        {t('sign-in')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModalOpen} onClose={toggleIsAuthModalOpen}>
        Открыто
      </Modal>
    </nav>
  )
}
