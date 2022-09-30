import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/app-link/app-link'

import classes from './nav-bar.module.sass'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: NavBarProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <nav className={classNames({ cls: classes.navBar, adds: [className] })}>
      <div className={classes.linksContainer}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN}>
          {t('main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
          {t('about-us')}
        </AppLink>
      </div>
    </nav>
  )
}
