import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 400px;
  padding: ${theme.gap.gap7} 0 ${theme.gap.gap4};
`;

export const ModalContent = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalHeader = styled.div`
  ${theme.typography.title.h5}
  text-align: center;
  margin-bottom: ${theme.gap.gap2};
`;

export const ModalButtonContainer = styled.div`
  flex-shrink: 0;
`;
