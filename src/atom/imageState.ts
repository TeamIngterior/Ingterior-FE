import { atom } from 'recoil';

export const uploadImageState = atom({
  key: 'uploadImageState',
  default: '',
});

export const editImageState = atom<null | string>({
  key: 'editImageState',
  default: null,
});
