import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { mobileHeaderState } from './atom/globalState';

import MobileHeader from '@components/common/MobileHeader';
import MainTemplate from './components/template/MainTemplate';

function App() {
  const { prevLink, title } = useRecoilValue(mobileHeaderState);

  return (
    <>
      {prevLink && title && <MobileHeader prevLink={prevLink} title={title} />}
      <MainTemplate>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainTemplate>
    </>
  );
}

export default App;
