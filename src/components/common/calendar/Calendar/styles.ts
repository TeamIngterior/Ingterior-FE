import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const CalendarContainer = styled.div`
  margin-top: 52px;

  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none !important;
    border-bottom: 1px solid ${theme.color.gray02} !important;
  }

  .fc-h-event {
    background-color: transparent;
    border: none;
  }

  .fc {
    height: 672px;

    th[role='columnheader'] {
      height: 34px;
      line-height: 34px;
      font-weight: 500;
      border: none;
      border-bottom: 1px solid ${theme.color.gray02};
    }

    .fc-daygrid-day-frame {
      height: 84px;
    }

    .fc-scrollgrid {
      border-collapse: collapse;
      border: none !important;
    }
    .fc-daygrid-day-top {
      justify-content: center;
    }
    .fc-theme-standard th {
      border: none !important;
    }

    .fc-daygrid-event-harness {
      pointer-events: none;
    }

    .fc-button-primary {
      &:not(:disabled) {
        &.fc-button-active,
        &:active {
          background-color: transparent !important;
          border: none !important;
          color: #000 !important;
        }

        &:focus {
          box-shadow: none !important;
        }
      }
    }
  }

  /* 캘린더 헤더 스타일 */
  .fc-toolbar-chunk {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    h2 {
      display: inline-flex;
      justify-content: center;
      ${theme.typography.body.b2}
    }

    .fc-button-primary {
      &:focus,
      &.fc-button-active,
      &:active {
        box-shadow: none !important;
        background-color: transparent !important;
        border: none !important;
        color: #000 !important;
      }
    }

    .fc-prev-button,
    .fc-next-button,
    .fc-today-button {
      background-color: transparent;
      border: none;
      color: #000;
      padding: 0;

      &.fc-prev-button,
      &.fc-next-button {
        width: 24px;
        height: 24px;
        .fc-icon {
          vertical-align: initial;
        }
      }

      .fc-today-button {
        margin-left: 24px;
        font-size: 18px;

        &:disabled {
          color: ${theme.color.gray400} !important;
        }
      }
    }
  }

  /* 캘린더 날짜 스타일 */
  .fc-daygrid-day-frame {
    ${theme.typography.caption.c2}
    border: 1px solid transparent;
    cursor: pointer;
  }

  /* 해당일 스타일 */
  .fc-day-today {
    background: #fff !important;
    border: none !important;
  }

  /* dayMaxEvnet 커스텀 팝오버 금지 */
  .fc-daygrid-more-link {
    pointer-events: none;
  }

  .fc-daygrid-dot-event {
    &:hover {
      background: none !important;
    }
  }

  /* 일요일 색상  */
  .fc-day-sun a {
    color: ${theme.color.error};
  }

  .fc-popover-body {
    .fc-daygrid-event-harness {
      pointer-events: none;
      .fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),
      .fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {
        border-radius: 4px;
      }
    }
  }
`;
