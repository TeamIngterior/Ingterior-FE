import * as S from './styles';

interface MainTemplateProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <S.TemplateContainer>
      <S.TemplateInner>{children}</S.TemplateInner>
    </S.TemplateContainer>
  );
}

export default MainTemplate;
