import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const RooomMessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RoomMessageListContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-y: overlay;

  &::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 4px;
  }
`;

export const RoomMessageSendForm = styled.form`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 8px;
  background-color: ${theme.color.gray02};

  input {
    ${theme.typography.body.b2}
    width: 100%;
    height: 100%;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${theme.color.gray03};
    padding: 0 14px;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    min-width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`;
