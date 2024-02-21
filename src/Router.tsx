/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/user/SignIn'));
const ConstructionList = lazy(
  () => import('./pages/construction/ConstructionList')
);
const AddConstruction = lazy(
  () => import('./pages/construction/AddConstruction')
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
        path: 'construction',
        children: [
          {
            path: 'list',
            element: <ConstructionList />,
          },
          {
            path: 'detail/:id',
            element: <div>Construction Detail</div>,
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
