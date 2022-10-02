import { Theme, useTheme } from 'app/providers/theme'
import { useTranslation } from 'react-i18next'
import { ReactComponent as ThemeIcon } from 'shared/assets/icons/theme-switcher.svg'
import { classNames } from 'shared/lib/class-names'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

import classes from './theme-switcher.module.sass'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const iconClassName = theme === Theme.DARK ? classes.light : classes.dark

  return (
    <Button theme={ButtonTheme.CLEAR} className={className} onClick={toggleTheme} type="button" title={t('toggle')}>
      <ThemeIcon className={classNames({ cls: classes.icon, adds: [iconClassName] })} />
    </Button>
  )
}
