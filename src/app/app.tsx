import { FC, Suspense, useEffect } from 'react'

import { userActions } from 'models/user'
import { classNames } from 'shared/lib/class-names'
import { NavBar } from 'widgets/nav-bar'
import { PageLoader } from 'widgets/page-loader'
import { SideBar } from 'widgets/side-bar'

import { AppRouter } from './providers/router'
import { useAppDispatch } from './providers/store-provider'

export const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initUser())
  }, [dispatch])

  return (
    <div className={classNames({ cls: 'app' })}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <div className="content">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
