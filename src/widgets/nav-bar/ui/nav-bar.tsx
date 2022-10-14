import { FC } from 'react'

import { LoginModal } from 'features/auth-by-username'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { useToggleFlag } from 'shared/lib/hooks'
import { ClassName } from 'shared/types'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

import css from './nav-bar.module.sass'

export const NavBar: FC<ClassName> = ({ className = '' }) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, toggleIsAuthModalOpen] = useToggleFlag()

  return (
    <nav className={classNames({ cls: css.navBar, adds: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={css.authButton} onClick={toggleIsAuthModalOpen}>
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={toggleIsAuthModalOpen} />
    </nav>
  )
}
