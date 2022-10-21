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
  const { flag: isAuthModalOpen, setFlagToFalse: closeAuthModal, setFlagToTrue: openAuthModal } = useToggleFlag()

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
      </nav>
    )
  }

  return (
    <nav className={classNames({ cls: css.navBar, adds: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={css.authButton} onClick={openAuthModal}>
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </nav>
  )
}
