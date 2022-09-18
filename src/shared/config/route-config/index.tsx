import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const RouteConfig: RouteProps[] = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> },
];
