import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ChatRoomCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
`;

// 프로필 이미지
export const ChatRoomProfileImg = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: ${theme.gap.gap1};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 채팅방 정보
export const ChatRoomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 채팅방 이름, 마지막 메세지
export const ChatRoomName = styled.p`
  ${theme.typography.title.h5}
  width:100%;
  max-width: 198px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatRoomLastMessage = styled.div`
  ${theme.typography.body.b2}
  color: ${theme.color.gray04};
  /* 최대 2줄 맒줄임 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//  채팅방 구성 인원
export const ChatRoomMemberCount = styled.span`
  ${theme.typography.caption.c2}
  color: ${theme.color.gray04};
  margin-left: ${theme.gap.gap1};
`;

// 날짜, 읽지 않은 메세지
export const ChatRoomStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: calc(49px + 16px);
  margin-left: auto;
`;

export const ChatRoomDate = styled.p`
  ${theme.typography.caption.c2}
  color: ${theme.color.gray04};
  white-space: nowrap;
`;

export const NewMessage = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  min-width: 29px;
  height: 29px;
  margin-top: ${theme.gap.gap2};
  border-radius: 50%;
  background-color: ${theme.color.secondary02};
`;
