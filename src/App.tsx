import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/common/Header';
import MainTemplate from './components/template/MainTemplate';

function App() {
  return (
    <>
      <Header />
      <MainTemplate>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainTemplate>
    </>
  );
}

export default App;
