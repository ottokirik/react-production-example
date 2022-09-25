import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import classes from './display-error.module.sass'

export const DisplayError = (): JSX.Element => {
  const { t } = useTranslation()
  const handleReloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={classes.displayError}>
      <p>{t('error-occurred')}</p>
      <Button onClick={handleReloadPage}>{t('refresh-page')}</Button>
    </div>
  )
}
