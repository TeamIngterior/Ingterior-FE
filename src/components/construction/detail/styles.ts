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

export const DetailContent = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(588px + 16px * 2);
  padding: 0 16px;
  margin: 0 auto;
`;
