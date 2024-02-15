import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import SignIn from './pages/user/SignIn';

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
    ],
  },
]);

export default router;
