import { FC } from 'react'

import { Theme, useTheme } from 'app/providers/theme'
import { useTranslation } from 'react-i18next'
import { ReactComponent as ThemeIcon } from 'shared/assets/icons/theme-switcher.svg'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

import css from './theme-switcher.module.sass'

export const ThemeSwitcher: FC<ClassName> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const iconClassName = theme === Theme.DARK ? css.light : css.dark

  return (
    <Button theme={ButtonTheme.CLEAR} className={className} onClick={toggleTheme} type="button" title={t('toggle')}>
      <ThemeIcon className={classNames({ cls: css.icon, adds: [iconClassName] })} />
    </Button>
  )
}
