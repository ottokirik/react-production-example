import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

import css from './display-error.module.sass'

export const DisplayError: FC = () => {
  const { t } = useTranslation()
  const handleReloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={css.displayError}>
      <p>{t('error-occurred')}</p>
      <Button onClick={handleReloadPage}>{t('refresh-page')}</Button>
    </div>
  )
}
