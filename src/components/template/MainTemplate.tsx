import Chatting from '../chat';

import * as S from './styles';

interface MainTemplateProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <S.TemplateContainer>
      <S.TemplateInner>{children}</S.TemplateInner>
      {/* 채팅(메세지) */}
      <Chatting />
    </S.TemplateContainer>
  );
}

export default MainTemplate;
