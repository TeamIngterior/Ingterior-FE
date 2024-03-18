import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const DetailConstructionFunctionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${theme.gap.gap3};

  .addDefectButton {
    min-width: 180px;
  }
`;
