import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const SideMenu = styled.aside`
  position: fixed;
  top: ${theme.layoutComponent.header_height}px;
  right: 0;
  min-width: 384px;
  height: 100%;
  min-height: 100dvh;
  padding: ${theme.gap.gap5};
  background-color: ${theme.color.gray01};
  border-left: 1px solid ${theme.color.gray03};
  z-index: 10;

  @media (max-width: 500px) {
    top: ${theme.layoutComponent.header_mobile_height}px;
    min-width: 100%;
    min-height: ${`calc(100dvh - ${theme.layoutComponent.header_mobile_height}px)`};
    border-left: none;
  }
`;

export const SideMenuList = styled.ul``;

export const SideMenuItem = styled.li`
  ${theme.typography.title.h4}
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${theme.gap.gap4};
  cursor: pointer;
`;
