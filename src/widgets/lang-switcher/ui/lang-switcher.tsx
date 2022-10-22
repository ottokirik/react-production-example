import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/button/button'

type LangSwitcherProps = {
  short?: boolean
} & ClassName

export const LangSwitcher = memo(({ className, short = false }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const handleToggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
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
})

LangSwitcher.displayName = 'LangSwitcher'
