import React from 'react';

// dom
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router.tsx';

// recoil, react-query
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// mocking
import { worker } from './mocks/browser.ts';

// style
import ThemeProvider from '@/assets/styles/ThemeProvider.tsx';

if (import.meta.env.MODE === 'development') {
  worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
  // </React.StrictMode>
);
