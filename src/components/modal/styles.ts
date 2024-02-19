import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';
import { DefaultModalCSSProps } from './DefaultModal';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div<DefaultModalCSSProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  max-width: 328px;
  height: 100%;
  max-height: ${({ height }) => height || '100%'};
  min-height: 328px;
  background-color: white;
  border-radius: 4px;
  padding: 0 ${theme.gap.gap2};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .closeButton {
    position: absolute;
    z-index: 1;
    top: ${theme.gap.gap1};
    right: ${theme.gap.gap1};
    width: 40px;
    min-width: 40px;
    height: 40px;
    cursor: pointer;

    svg {
      margin: 0;
    }
  }
`;
