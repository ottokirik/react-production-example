import { HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from 'widgets/theme-switcher'
import classes from './side-bar.module.sass'

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const SideBar = ({ className = '', ...rest }: SideBarProps): JSX.Element => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

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
        <button data-testid="toggle-side-bar" className={classes.button} type="button" onClick={handleToggle}>
          {t('toggle')}
        </button>
        <div className={classes.switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </aside>
    </div>
  )
}
