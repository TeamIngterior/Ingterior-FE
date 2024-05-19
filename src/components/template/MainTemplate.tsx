import { useLocation } from 'react-router-dom';
import Chatting from '../chat';

import * as S from './styles';
import { useEffect, useState } from 'react';

interface MainTemplateProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {
  const { pathname } = useLocation();
  const [isChatting, setIsChatting] = useState<boolean>(true);
  const [isContainer, setIsContainer] = useState<boolean>(false);

  useEffect(() => {
    const regex = /\/construction\/\d+$/;

    if (pathname === '/') {
      setIsContainer(false);
    } else if (regex.test(pathname)) {
      setIsContainer(false);
    } else {
      setIsContainer(true);
    }

    // 채팅은 현장추가, 하자추가, 공사추가 화면에서는 보이지 않게 처리
    if (pathname.includes('addition') || pathname.includes('defect/addition')) {
      setIsChatting(false);
    } else {
      setIsChatting(true);
    }
  }, [pathname]);

  return (
    <S.TemplateContainer className={pathname === '/' ? 'home' : ''}>
      {isContainer ? <S.TemplateInner>{children}</S.TemplateInner> : children}

      {/** 채팅(메세지) */}
      {isChatting && <Chatting />}
    </S.TemplateContainer>
  );
}

export default MainTemplate;
