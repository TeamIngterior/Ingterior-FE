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
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalButtonContainer = styled.div`
  flex-shrink: 0;
`;

export const ModalHeader = styled.div`
  ${theme.typography.title.h5}
  text-align: center;
  margin-bottom: ${theme.gap.gap2};
`;

export const ListCardModalContainer = styled.div`
  margin-top: ${theme.gap.gap3};
`;

export const ListCardModalTitle = styled.h3`
  ${theme.typography.title.h5};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: ${theme.gap.gap1};
`;

export const ValidateError = styled.p`
  ${theme.typography.body.b2};
  color: ${theme.color.error};
  margin-top: ${theme.gap.gap2};
  line-height: 1.5;
`;
