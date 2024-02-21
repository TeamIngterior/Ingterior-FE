import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ModalButtonContainer = styled.div`
  flex-shrink: 0;
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
