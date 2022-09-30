import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = (): JSX.Element => {
  const appRoutes = useRoutes(RouteConfig)
  return <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
}
