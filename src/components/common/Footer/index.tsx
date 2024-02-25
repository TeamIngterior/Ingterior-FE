import { useNavigate } from 'react-router-dom';

import LogoHorizontal from '@assets/ingteriorLogo_horizon.svg?react';

import * as S from './styles';

const INGTERIOR_INFO = ['상호명: 저메이킷(Jum8kit)', '대표: 김영진'];
const BUSINESS_INFO = [
  '개인정보 보호 책임자: 김영진',
  '사업자등록번호: 123-45-67890',
  'Email: Jum8kit@Gmail.Com',
];

function Footer() {
  const navigate = useNavigate();

  return (
    <S.FooterContainer>
      <S.FooterInner>
        <LogoHorizontal
          className="logo"
          onClick={() => {
            navigate('/');
          }}
        />

        <S.FooterContent>
          <S.FooterContentList>
            {INGTERIOR_INFO.map((info, index) => (
              <S.FooterContentListItem key={index}>
                {info}
              </S.FooterContentListItem>
            ))}
          </S.FooterContentList>
          <S.FooterContentList className="business">
            {BUSINESS_INFO.map((info, index) => (
              <S.FooterContentListItem key={index}>
                {info}
              </S.FooterContentListItem>
            ))}
          </S.FooterContentList>
        </S.FooterContent>

        <S.FooterLinkContainer>
          <S.FooterLink>이용약관</S.FooterLink>
        </S.FooterLinkContainer>
      </S.FooterInner>
    </S.FooterContainer>
  );
}

export default Footer;
