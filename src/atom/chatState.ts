import { atom } from 'recoil';

export const chatRoomIdState = atom<null | number>({
  key: 'chatRoomIdState',
  default: null,
});
