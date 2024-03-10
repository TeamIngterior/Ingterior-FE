import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ChattingSidebarDimmed = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
`;

export const ChattingSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 257px;
  height: 100%;
  background-color: #fff;
  margin-left: auto;
`;

export const ChattingSidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.gray02};
  height: 212px;
  padding: 16px 16px 24px 16px;
`;

export const CahttingSidebarHeading = styled.h2`
  ${theme.typography.title.h5}
  margin-bottom: 8px;
  color: #000;

  &.contentTitle {
    padding: 0 16px;
  }
`;

export const ChattingCloseButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-bottom: 8px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ChattingSidebarAddress = styled.p`
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const ChattingSidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 212px - 156px);
  padding: 24px 0 0;
`;

export const ChattingInfoContainer = styled.div`
  display: flex;
`;

export const ChattingInfoImage = styled.div`
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

export const ChattingInfoContent = styled.div`
  ${theme.typography.body.b2}
  display: flex;
  flex-direction: column;
  height: 100%;

  line-height: 1.5;
  color: ${theme.color.gray05};
`;

export const ChattingInfoName = styled.p`
  margin-bottom: 5px;
`;

// 참여자
export const ChattingParticipantsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-y: auto;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChattingParticipants = styled.li`
  ${theme.typography.body.b2}
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  cursor: default;

  img {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 4px;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${theme.color.primary01};
  }
`;

// 현장 상세 바로가기, 현장 메세지 기록 다운받기, 현장 나가기
export const ChattingSidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 156px;
  margin-top: auto;
`;

export const ChattingSidebarFooterButton = styled.button`
  ${theme.typography.body.b2}
  width: 100%;
  height: 52px;
  border-top: 1px solid ${theme.color.gray03};
  padding: 16px;
  text-align: left;
  cursor: pointer;

  &:first-of-type {
    border-top: none;
  }
`;
