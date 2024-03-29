import {
  calendarDateState,
  calendarInfoState,
  calendarScheduleListState,
} from '@/atom/calendarState';
import EventContent from '@/components/common/calendar/EventContent';
import { DatesSetArg, EventContentArg } from '@fullcalendar/core';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface IGetScheduleForm {
  startDate: null | Date;
  endDate: null | Date;
}

export const useCalendar = (scheduleList?: any[]) => {
  const [period, setPeriod] = useState<IGetScheduleForm>({
    startDate: null,
    endDate: null,
  });

  const [selectedDate, setSelectedDate] = useRecoilState<Date | null>(
    calendarDateState
  );

  const [isOpenScheduleDialog, setIsOpenScheduleDialog] =
    useRecoilState(calendarInfoState);

  const [scheduleListState, setScheduleListState] = useRecoilState(
    calendarScheduleListState
  );

  const onDateClick = ({ date }: any) => {
    onOpenScheduleDialog(date);
  };

  const onChangeDate = ({ startStr, endStr }: DatesSetArg) => {
    setPeriod({ startDate: new Date(startStr), endDate: new Date(endStr) });
  };

  const onOpenScheduleDialog = (selected: Date) => {
    setSelectedDate(selected);
    setIsOpenScheduleDialog(true);
  };

  const eventContent = (eventInfo: EventContentArg) => {
    return (
      <EventContent
        colorIndex={(scheduleList ?? []).findIndex(
          (schedule) => schedule.title === eventInfo.event.title
        )}
        eventInfo={eventInfo}
      />
    );
  };

  useEffect(() => {
    setScheduleListState(scheduleList ?? []);
  }, [scheduleList]);

  return {
    onDateClick,
    onChangeDate,
    eventContent,
    period,
    selectedDate,
    isOpenScheduleDialog,
    setIsOpenScheduleDialog,
    scheduleListState,
  };
};
