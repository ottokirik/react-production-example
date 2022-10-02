import { HTMLAttributes, useState } from 'react'
import { classNames } from 'shared/lib/class-names'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from 'widgets/theme-switcher'
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrow.svg'
import { ReactComponent as MainIcon } from 'shared/assets/icons/main.svg'
import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg'

import classes from './side-bar.module.sass'
import { AppLink, Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/route-config'
import { AppLinkTheme } from 'shared/ui/app-link/app-link'

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const SideBar = ({ className = '', ...rest }: SideBarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

  const toggleArrowClassName = `${classes.toggleIcon} ${isOpen ? '' : classes.closed}`

  return (
    <div
      {...rest}
      data-testid="side-bar"
      className={classNames({ cls: classes.sideBarContainer, mods: { [classes.opened]: isOpen } })}
    >
      <aside
        className={classNames({
          cls: classes.sideBar,
          mods: { [classes.opened]: isOpen },
          adds: [className],
        })}
      >
        <nav className={classes.sideBarLinkContainer}>
          <AppLink className={classes.sideBarLink} theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN}>
            <MainIcon className={classes.sideBarLinkIcon} />
            <span className={classes.sideBarLinkText}>{t('main')}</span>
          </AppLink>
          <AppLink className={classes.sideBarLink} theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
            <AboutIcon className={classes.sideBarLinkIcon} />
            <span className={classes.sideBarLinkText}>{t('about-us')}</span>
          </AppLink>
        </nav>
        <Button
          data-testid="toggle-side-bar"
          className={classes.toggleButton}
          type="button"
          title={t('toggle')}
          onClick={handleToggle}
        >
          <ArrowIcon className={toggleArrowClassName} />
        </Button>
        <div className={classes.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={!isOpen} />
        </div>
      </aside>
    </div>
  )
}
