import { FC, HTMLAttributes, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg'
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrow.svg'
import { ReactComponent as MainIcon } from 'shared/assets/icons/main.svg'
import { AppRoutes } from 'shared/config/route-config'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { AppLink, Button } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/app-link/app-link'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from 'widgets/theme-switcher'

import css from './side-bar.module.sass'

type SideBarProps = HTMLAttributes<HTMLDivElement> & ClassName

export const SideBar: FC<SideBarProps> = ({ className = '', ...rest }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

  const toggleArrowClassName = `${css.toggleIcon} ${isOpen ? '' : css.closed}`

  return (
    <div
      {...rest}
      data-testid="side-bar"
      className={classNames({ cls: css.sideBarContainer, mods: { [css.opened]: isOpen } })}
    >
      <aside
        className={classNames({
          cls: css.sideBar,
          mods: { [css.opened]: isOpen },
          adds: [className],
        })}
      >
        <nav className={css.sideBarLinkContainer}>
          <AppLink className={css.sideBarLink} theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN}>
            <MainIcon className={css.sideBarLinkIcon} />
            <span className={css.sideBarLinkText}>{t('main')}</span>
          </AppLink>
          <AppLink className={css.sideBarLink} theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
            <AboutIcon className={css.sideBarLinkIcon} />
            <span className={css.sideBarLinkText}>{t('about-us')}</span>
          </AppLink>
        </nav>
        <Button
          data-testid="toggle-side-bar"
          className={css.toggleButton}
          type="button"
          title={t('toggle')}
          onClick={handleToggle}
        >
          <ArrowIcon className={toggleArrowClassName} />
        </Button>
        <div className={css.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={!isOpen} />
        </div>
      </aside>
    </div>
  )
}
