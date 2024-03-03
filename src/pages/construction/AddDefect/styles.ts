import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const AddDefectContainer = styled.div``;

export const AddDefectForm = styled.form`
  margin-top: ${theme.gap.gap7};
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 588px;
  background-color: #f4f4f4;
  margin-bottom: ${theme.gap.gap3};
`;

export const AddDefectContent = styled.div`
  margin-bottom: ${theme.gap.gap5};
`;

export const AddDefectInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.gap.gap5} 0;
`;
