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
  max-width: 588px;
  height: 100%;
  min-height: 328px;
  max-height: ${({ height }) => height || '100%'};
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

  /* 현장 목록 - 코드로 입장 */
  .addConstructionSite & {
    max-height: 400px;

    @media (max-width: 620px) {
      max-width: calc(100% - 32px);
    }
  }

  /* 새 현장 추가 - 이미지 편집  */
  .editConstructionImage & {
    max-height: 890px;

    @media (max-width: 620px) {
      max-width: calc(100% - 32px);
    }
  }
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
