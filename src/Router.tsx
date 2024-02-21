/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/user/SignIn'));
const RemodelingList = lazy(() => import('./pages/remodeling/RemodelingList'));
const AddConstruction = lazy(
  () => import('./pages/remodeling/AddConstruction')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: 'signin',
        children: [{ index: true, element: <SignIn /> }],
      },
      {
        path: 'remodeling',
        children: [
          {
            path: 'list',
            element: <RemodelingList />,
          },
          {
            path: 'detail/:id',
            element: <div>Remodeling Detail</div>,
          },
          {
            path: 'addition',
            element: <AddConstruction />,
          },
        ],
      },
    ],
  },
]);

export default router;
