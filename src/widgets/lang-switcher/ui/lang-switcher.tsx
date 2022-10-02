import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className = '', short = false }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const handleToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(
      () => null,
      () => null
    )
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames({ adds: [className] })}
      type="button"
      onClick={handleToggleLanguage}
    >
      {t(short ? 'lang-short' : 'lang')}
    </Button>
  )
}
