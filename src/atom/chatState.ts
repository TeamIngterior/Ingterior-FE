import { atom } from 'recoil';

export const chatRoomIdState = atom<null | number>({
  key: 'chatRoomIdState',
  default: null,
});

export const chatSidebarState = atom<boolean>({
  key: 'chatSidebarState',
  default: false,
});

export const chatSidebarInfoState = atom<any>({
  key: 'chatSidebarInfoState',
  default: [],
});
