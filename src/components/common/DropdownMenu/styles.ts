import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const DropdownMenuContainer = styled.div`
  position: relative;

  .dropdown-menu__header {
    cursor: pointer;
  }
`;

export const Dimmed = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: default;
  z-index: 1;
`;

export const DropdownMenuList = styled.ul`
  position: absolute;
  top: 100%;
  right: -8px;
  z-index: 10;
  min-width: 100px;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 156px;
  height: 40px;
  padding: 0 16px;
  color: ${theme.color.gray04};
  cursor: pointer;

  &:first-of-type {
    border-bottom: 1px solid ${theme.color.gray03};
  }

  &:hover {
    background-color: ${theme.color.gray000};
  }
`;
