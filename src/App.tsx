import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainTemplate from './components/template/MainTemplate';

function App() {
  return (
    <>
      <MainTemplate>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainTemplate>
    </>
  );
}

export default App;
