import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const DetailManageContainer = styled.div`
  padding: ${theme.gap.gap3} 0;
  background-color: ${theme.color.gray02};
  margin-top: ${theme.gap.gap3};
`;

export const NoContent = styled.div`
  ${theme.typography.body.b1};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border: 1px dashed ${theme.color.gray03};
  border-radius: 4px;
  cursor: pointer;
`;
