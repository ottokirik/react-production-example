import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ClassName } from 'shared/types'

const ProfilePage: FC<ClassName> = ({ className }) => {
  const { t } = useTranslation('profile')
  return <div>{t('profile-title')}</div>
}

export default ProfilePage
