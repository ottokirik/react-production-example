import { useAppDispatch } from 'app/providers/store-provider'
import { fetchProfileData, ProfileCard, profileReducer } from 'models/profile'
import { FC, useEffect } from 'react'
import { classNames } from 'shared/lib/class-names'
import { useReducerLoader } from 'shared/lib/hooks'
import { ClassName } from 'shared/types'

const ProfilePage: FC<ClassName> = ({ className }) => {
  useReducerLoader('profile', profileReducer, true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div className={classNames({ adds: [className] })}>
      <ProfileCard />
    </div>
  )
}

export default ProfilePage
