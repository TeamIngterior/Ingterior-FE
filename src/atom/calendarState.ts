import { atom } from 'recoil';

export const calendarInfoState = atom({
  key: 'calendarInfoState',
  default: false,
});

export const calendarDateState = atom<Date | null>({
  key: 'calendarDateState',
  default: null,
});

export const calendarScheduleListState = atom<any[]>({
  key: 'calendarScheduleListState',
  default: [],
});
