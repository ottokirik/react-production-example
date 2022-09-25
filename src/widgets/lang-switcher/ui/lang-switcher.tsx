import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { Button } from 'shared/ui'
import { ThemeButton } from 'shared/ui/button/button'

import classes from './lang-switcher.module.sass'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const handleToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(
      () => null,
      () => null
    )
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames({ cls: classes.langSwitcher, adds: [className] })}
      type="button"
      onClick={handleToggleLanguage}
    >
      {t('lang')}
    </Button>
  )
}
