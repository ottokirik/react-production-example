import { FC, Suspense } from 'react'

import { classNames } from 'shared/lib/class-names'
import { NavBar } from 'widgets/nav-bar'
import { PageLoader } from 'widgets/page-loader'
import { SideBar } from 'widgets/side-bar'

import { AppRouter } from './providers/router'

export const App: FC = () => {
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
