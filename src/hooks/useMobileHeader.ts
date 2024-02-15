import { mobileHeaderState } from '@/atom/globalState';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useMobileHeader = (prevLink: string, title: string) => {
  const setMobileHeader = useSetRecoilState(mobileHeaderState);

  useEffect(() => {
    setMobileHeader({
      prevLink: prevLink,
      title: title,
    });

    return () => {
      setMobileHeader({
        prevLink: '',
        title: '',
      });
    };
  }, [prevLink, title, setMobileHeader]);
};

export default useMobileHeader;
