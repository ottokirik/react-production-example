import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'app/providers/store-provider'
import { getUserAuthData, userActions } from 'models/user'
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

  const authUser = useAppSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const handleLogout = (): void => {
    dispatch(userActions.logout())
  }

  if (authUser !== undefined) {
    return (
      <nav className={classNames({ cls: css.navBar, adds: [className] })}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={css.authButton} onClick={handleLogout}>
          {t('sign-out')}
        </Button>
        <LoginModal isOpen={isAuthModalOpen} onClose={toggleIsAuthModalOpen} />
      </nav>
    )
  }

  return (
    <nav className={classNames({ cls: css.navBar, adds: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={css.authButton} onClick={toggleIsAuthModalOpen}>
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={toggleIsAuthModalOpen} />
    </nav>
  )
}
