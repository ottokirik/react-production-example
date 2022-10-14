import { FC } from 'react'

import { useTranslation } from 'react-i18next'

const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return <div>{t('not-found')}</div>
}

export default NotFoundPage
