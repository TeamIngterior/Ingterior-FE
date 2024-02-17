import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/common/Header';
import MainTemplate from './components/template/MainTemplate';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header />
      <MainTemplate>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainTemplate>
      <Footer />
    </>
  );
}

export default App;
