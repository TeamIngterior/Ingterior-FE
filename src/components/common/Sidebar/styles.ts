import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const SideMenu = styled.aside`
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  min-width: 384px;
  height: 100%;
  min-height: ${`calc(100dvh - ${theme.layoutComponent.header_height}px)`};
  padding: ${theme.gap.gap5};
  background-color: ${theme.color.gray01};
  border-left: 1px solid ${theme.color.gray03};
  z-index: 1;

  @media (max-width: 500px) {
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
