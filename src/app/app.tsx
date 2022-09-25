import { useTheme } from 'app/providers/theme/'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/class-names'
import { NavBar } from 'widgets/nav-bar'
import { SideBar } from 'widgets/side-bar'

import { AppRouter } from './providers/router'

export const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={classNames({ cls: 'app', adds: [theme as string] })}>
      <Suspense fallback="">
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
