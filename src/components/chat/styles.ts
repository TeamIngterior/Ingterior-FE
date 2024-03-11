import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ChattingContainer = styled.section`
  position: fixed;
  top: 75vh;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: calc(1200px + 16px * 2);
  padding: 0 ${theme.gap.gap2};
`;

export const ChattingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  min-width: 56px;
  height: 56px;
  border-radius: 4px;
  background-color: ${theme.color.primary};
  box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.4);

  &.opened {
    background-color: #fff;
  }

  .closeIcon {
    width: 36px;
    height: 36px;
  }
`;

export const ChatRoomHeader = styled.div`
  width: 100%;
  padding: 16px 16px 0 16px;
`;

export const ChatRoomHeaderInner = styled.div`
  ${theme.typography.label.lb1}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
`;
