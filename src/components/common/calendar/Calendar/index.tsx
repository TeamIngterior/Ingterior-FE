import { useEffect, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import * as S from './styles';
import { useCalendar } from '@/hooks/useCalendar';

const scheduleList = [
  {
    title: '공사',
    openDate: 'Mar 14 2024 04:01:56 GMT+0900',
    endDate: 'Mar 15 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사1',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사2',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사3',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사4',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 15 2024 06:01:56 GMT+0900',
  },
];

const Calendar = () => {
  const {
    onDateClick,
    onChangeDate,
    eventContent,
    period,
    selectedDate,
    isOpenScheduleDialog,
    setIsOpenScheduleDialog,
  } = useCalendar(scheduleList);

  const events = scheduleList?.map((schedule) => {
    const openDate = new Date(schedule.openDate);
    const endDate = new Date(schedule.endDate || schedule.openDate);

    return {
      title: schedule.title,
      start: openDate,
      end: endDate,
      eventColor: '',
    };
  });

  return (
    <>
      <S.CalendarContainer>
        <FullCalendar
          locale="ko"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
          dayMaxEvents={2}
          datesSet={onChangeDate}
          dateClick={onDateClick}
          eventContent={eventContent}
          headerToolbar={{
            start: 'title',
            center: 'today',
            end: 'prev next',
          }}
        />
      </S.CalendarContainer>
    </>
  );
};

export default Calendar;
