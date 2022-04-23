import React, { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import Home from '../pages/home';
const AppDetail = lazy(() => import('../pages/appDetail'));
const AppLayout = lazy(() => import('../pages/appLayout'));
const AppList = lazy(() => import('../pages/appList'));
const About = lazy(() => import('../pages/about'));
const NotFound = lazy(() => import('../pages/notFound'));

export interface RouteConfig {
  path: string;
  element?: any;
  redirect?: string;
  children?: RouteConfig[];
  isDefault?: boolean;
  isNotDefaultLayout?: boolean;
  canDirect?: (...args: any[]) => boolean | undefined;
  showChannelSwitch?: boolean;
}

export const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

export const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/app',
    element: lazyLoad(<AppLayout />),
    children: [
      {
        index: true,
        element: lazyLoad(<AppList />),
      },
      {
        path: '/app/:id',
        element: lazyLoad(<AppDetail />),
      },
    ],
  },
  {
    path: '/about',
    element: lazyLoad(<About />),
  },
  {
    path: '*',
    element: lazyLoad(<NotFound />),
  },
];
