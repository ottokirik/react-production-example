import { HTMLAttributes, memo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrow.svg'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button } from 'shared/ui'
import { LangSwitcher } from 'widgets/lang-switcher'
import { SideBarLinks } from 'widgets/side-bar/config'
import { ThemeSwitcher } from 'widgets/theme-switcher'

import { SideBarLink } from '../side-bar-link/side-bar-link'
import css from './side-bar.module.sass'

type SideBarProps = HTMLAttributes<HTMLDivElement> & ClassName

export const SideBar = memo(({ className, ...rest }: SideBarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

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
          {SideBarLinks.map((item, index) => (
            <SideBarLink key={index} {...item} siSideBarOpen={isOpen} />
          ))}
        </nav>
        <Button
          data-testid="toggle-side-bar"
          className={css.toggleButton}
          type="button"
          title={t('toggle')}
          onClick={handleToggle}
        >
          <ArrowIcon className={classNames({ cls: css.toggleIcon, mods: { [css.closed]: isOpen } })} />
        </Button>
        <div className={css.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={!isOpen} />
        </div>
      </aside>
    </div>
  )
})

SideBar.displayName = 'SideBar'
