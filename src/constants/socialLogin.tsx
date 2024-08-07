import { theme } from '@/assets/styles/theme';
import { googleLoginRequest, kakaoLoginRequest } from '@/apis/login';

import KakaoLogo from '@assets/socialLogin/logo_kakao.svg?react';
import NaverLogo from '@assets/socialLogin/logo_naver.svg?react';
import GoogleLogo from '@assets/socialLogin/logo_google.svg?react';
import InstagramLogo from '@assets/socialLogin/logo_instagram.svg?react';

export const SOCIAL_LOGIN = [
  {
    title: '구글로 이용하기',
    $fullWidth: true,
    icon: <GoogleLogo />,
    style: {
      backgroundColor: `${theme.color.gray01}`,
      color: `${theme.color.gray06}`,
      border: `1px solid ${theme.color.gray03}`,
    },
    onClickHandler: googleLoginRequest,
  },
];

const SOCIAL_LOGIN2 = [
  {
    title: '카카오톡으로 이용하기',
    $fullWidth: true,
    icon: <KakaoLogo />,
    style: {
      backgroundColor: '#FFEB00',
      color: `${theme.color.gray06}`,
      border: '1px solid #FEE500',
    },
    onClickHandler: kakaoLoginRequest,
  },
  {
    title: '네이버로 이용하기',
    $fullWidth: true,
    icon: <NaverLogo />,
    style: {
      backgroundColor: '#03C75A',
      color: `${theme.color.gray01}`,
      border: '1px solid #03C75A',
    },
    onClickHandler: () => {
      console.log('클릭');
    },
  },
  {
    title: '구글로 이용하기',
    $fullWidth: true,
    icon: <GoogleLogo />,
    style: {
      backgroundColor: `${theme.color.gray01}`,
      color: `${theme.color.gray06}`,
      border: `1px solid ${theme.color.gray03}`,
    },
    onClickHandler: googleLoginRequest,
  },
  {
    title: '인스타그램으로 이용하기',
    $fullWidth: true,
    icon: <InstagramLogo />,
    style: {
      backgroundColor: `${theme.color.gray01}`,
      color: `${theme.color.gray06}`,
      border: `1px solid ${theme.color.gray03}`,
    },
    onClickHandler: () => {
      console.log('클릭');
    },
  },
];
