import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ImageEditorContext = styled.p`
  ${theme.typography.caption.c2};
  color: ${theme.color.gray04};
  margin-bottom: ${theme.gap.gap2};

  &.detail {
    line-height: 1.5;
  }
`;

export const ImageEditorDropzone = styled.div`
  ${theme.typography.label.lb1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-bottom: ${theme.gap.gap2};
  border: 1px solid ${theme.color.gray03};
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: ${theme.gap.gap1};
  }
`;
