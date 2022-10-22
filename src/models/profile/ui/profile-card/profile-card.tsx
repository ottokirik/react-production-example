import { useAppSelector } from 'app/providers/store-provider'
import {
  checkProfileErrorSelector,
  checkProfileLoadingSelector,
  getProfileDataSelector,
} from 'models/profile/model/selectors'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Input, Text } from 'shared/ui'

import css from './profile-card.module.sass'

export const ProfileCard = (props: ClassName): JSX.Element | null => {
  const { className } = props

  const { t } = useTranslation('profile')
  const profileData = useAppSelector(getProfileDataSelector)
  const isProfileError = useAppSelector(checkProfileErrorSelector)
  const isProfileLoading = useAppSelector(checkProfileLoadingSelector)

  if (isProfileError && isProfileLoading) {
    return null
  }

  return (
    <div className={classNames({ adds: [className] })}>
      <Text title={t('profile-title')} />
      <form className={classNames({ cls: css.form })}>
        <Input label={t('name')} defaultValue={profileData.firstName ?? ''} />
        <Input label={t('last-name')} defaultValue={profileData.lastName ?? ''} />
      </form>
    </div>
  )
}
