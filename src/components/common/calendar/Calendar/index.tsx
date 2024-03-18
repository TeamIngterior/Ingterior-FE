import { useEffect, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import * as S from './styles';
import { useCalendar } from '@/hooks/useCalendar';
import { useRecoilValue } from 'recoil';
import { calendarScheduleListState } from '@/atom/calendarState';

const Calendar = () => {
  const scheduleList = useRecoilValue(calendarScheduleListState);

  const { onDateClick, onChangeDate, eventContent, period } =
    useCalendar(scheduleList);

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
