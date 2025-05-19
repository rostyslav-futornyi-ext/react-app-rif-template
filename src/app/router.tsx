import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { App } from './app';

// Lazy load routes for code splitting
const Login = lazy(() => import('@/features/auth/components/Login'));
const Dashboard = lazy(() => import('@/features/dashboard/components/Dashboard'));
const Profile = lazy(() => import('@/features/profile/components/Profile'));
const NotFound = lazy(() => import('@/app/routes/NotFound'));

// Define routes configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
];

// Create and export the router
export const router = createBrowserRouter(routes);

// Optional: Export routes for testing purposes
export const routesConfig = routes;
