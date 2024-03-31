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
const DetailConstruction = lazy(
  () => import('./pages/construction/DetailConstruction')
);
const AddDefect = lazy(() => import('./pages/construction/AddDefect'));
const AddWork = lazy(() => import('./pages/construction/AddWork'));
const MyPage = lazy(() => import('./pages/mypage/MyPage'));

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
            // 현장 목록 페이지
            path: 'list',
            element: <ConstructionList />,
          },
          {
            // 현장 상세 페이지
            path: ':id',
            element: <DetailConstruction />,
          },
          {
            // 새 현장 추가
            path: 'addition',
            element: <AddConstruction />,
          },
          {
            // 새 하자 추가
            path: 'defect/addition/:id',
            element: <AddDefect />,
          },
          {
            // 새 공사 추가
            path: 'work/addition/:id',
            element: <AddWork />,
          },
        ],
      },
      {
        path: 'mypage',
        children: [
          {
            index: true,
            element: <MyPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
