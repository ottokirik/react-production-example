import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouteConfig } from 'shared/config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = (): JSX.Element => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {RouteConfig.map((itemRoute) => (
        <Route key={itemRoute.path} {...itemRoute} />
      ))}
    </Routes>
  </Suspense>
)
