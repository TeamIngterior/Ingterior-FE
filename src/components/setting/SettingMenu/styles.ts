import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const SettingMenuContainer = styled.div`
  ${theme.typography.label.lb1}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 57px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;

  .arrowIcon {
    width: 24px;
    min-width: 24px;
    height: 24px;
  }
`;
