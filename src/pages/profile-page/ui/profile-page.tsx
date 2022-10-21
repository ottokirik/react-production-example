import { profileReducer } from 'models/profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useReducerLoader } from 'shared/lib/hooks'
import { ClassName } from 'shared/types'

const ProfilePage: FC<ClassName> = ({ className }) => {
  const { t } = useTranslation('profile')
  useReducerLoader('profile', profileReducer, true)

  return <div>{t('profile-title')}</div>
}

export default ProfilePage
