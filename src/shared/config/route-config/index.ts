import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { NotFoundPage } from 'pages/not-found-page'
import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*',
}

export const RouteConfig: RouteObject[] = [
  { path: AppRoutes.MAIN, element: createElement(MainPage) },
  { path: AppRoutes.ABOUT, element: createElement(AboutPage) },
  { path: AppRoutes.NOT_FOUND, element: createElement(NotFoundPage) },
]
