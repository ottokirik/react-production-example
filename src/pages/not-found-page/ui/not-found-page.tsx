import { useTranslation } from 'react-i18next'

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation()

  return <div>{t('not-found')}</div>
}

export default NotFoundPage
