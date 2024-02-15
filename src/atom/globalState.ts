import { atom } from 'recoil';

// 모바일 헤더 이전 링크 및 현재 화면 타이틀
export const mobileHeaderState = atom({
  key: 'mobileHeaderState',
  default: {
    prevLink: '',
    title: '',
  },
});
