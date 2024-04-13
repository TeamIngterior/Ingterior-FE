import { atom } from 'recoil';

export const estimateState = atom({
  key: 'estimateState',
  default: {
    area: '',
    sash: '',
    balcony: '',
    bathroom: '',
  },
});
