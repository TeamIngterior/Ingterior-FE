import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const DateInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  border: 0;
  font: inherit;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${theme.color.gray03};
  color: ${theme.color.gray04};

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .react-datepicker__month {
    margin: 0;
    padding: 0 13px;
  }

  .react-datepicker__month-container {
    width: 588px;
  }

  .react-datepicker-wrapper {
    position: relative;
    z-index: 2;
    background-color: transparent;
  }

  .dateInput {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    background-color: transparent;
    caret-color: transparent;
    border-radius: 4px;
    cursor: pointer;

    &.error {
      border: 1px solid ${theme.color.red300};
    }
  }

  .react-datepicker {
    border: 0;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__header {
    background-color: #fff;
    border: 0;
  }

  .react-datepicker__week {
    .react-datepicker__day {
      &:first-child {
        color: ${theme.color.error};
      }
    }
  }

  .react-datepicker__day {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #5d5d5d;
    padding: 0;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-top: 8px;
    padding: 0 14px;
    background-color: #fff;
    border-bottom: 1px solid ${theme.color.gray02};
  }

  .react-datepicker__day-name {
    ${theme.typography.caption.c2};
    width: calc(100% / 7);
    margin-bottom: 5px;
    color: ${theme.color.gray05};

    &:first-child {
      color: ${theme.color.error};
    }
  }

  .react-datepicker__day--outside-month {
    cursor: default;
    visibility: hidden;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .calendarIcon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    min-width: 24px;
    height: 24px;
    z-index: 0;
  }

  .react-datepicker__day--in-range {
    background-color: #eaeaf2;
  }

  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end {
    background-color: #464866;
    color: #fff;
  }

  .react-datepicker__day--disabled {
    color: #ccc !important;
  }
`;
