import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

// 내 메세지
export const MyMessageCardContainer = styled.div`
  margin-left: auto;

  &.last {
    margin-bottom: ${theme.gap.gap4};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${theme.gap.gap1};
`;

export const Message = styled.div`
  ${theme.typography.body.b2}
  width:fit-content;
  max-width: 208px;
  background-color: ${theme.color.gray02};
  padding: 8px 16px;

  .other & {
    border-radius: 0px 16px 16px 16px;
  }
  .my & {
    border-radius: 8px 0px 8px 8px;
  }
`;

export const MessageDate = styled.div`
  ${theme.typography.caption.c2}
  color: ${theme.color.gray04};

  .other & {
    margin-left: 8px;
  }
  .my & {
    margin-right: 8px;
  }
`;

//  다른 유저 메세지
export const OtherMessageCardContainer = styled.div`
  display: flex;

  &.last {
    margin-bottom: ${theme.gap.gap4};
  }
`;

export const UserProfileImg = styled.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: ${theme.gap.gap1};
  overflow: hidden;

  &:not(.show) {
    visibility: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
