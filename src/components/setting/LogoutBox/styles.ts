import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const LogoutBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${theme.color.gray02};
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 11px;
`;

export const UserProfile = styled.span`
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  ${theme.typography.title.h5};
`;

export const UserMail = styled.span`
  ${theme.typography.caption.c2};
  color: ${theme.color.gray04};
`;
