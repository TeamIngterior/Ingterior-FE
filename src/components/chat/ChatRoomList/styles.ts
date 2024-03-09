import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ChatRoomListContainer = styled.div`
  position: absolute;
  bottom: ${theme.gap.gap8};
  width: 360px;
  height: 640px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

export const ChatRoomListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.gap.gap4} 0;
  width: 100%;
  height: calc(100% - 48px - 16px);
  padding: 16px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoChatRoom = styled.p`
  ${theme.typography.body.b1}
  margin: auto;
  text-align: center;
  line-height: 1.5;
  color: ${theme.color.gray05};
`;
