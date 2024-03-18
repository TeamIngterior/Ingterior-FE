import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const DetailManageContainer = styled.div`
  padding: ${theme.gap.gap3} 0;
  background-color: ${theme.color.gray02};
  margin-top: ${theme.gap.gap3};
`;

export const DetailManageContent = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(588px + 16px * 2);
  padding: 0 16px;
  margin: 0 auto;
`;
