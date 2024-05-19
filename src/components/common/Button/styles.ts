import styled, { css } from 'styled-components';
import { theme } from '@/assets/styles/theme';
import { ButtonCSSProps } from '.';

const handleButtonSize = (props: ButtonCSSProps) => {
  switch (props.size) {
    case 'sm':
      return css`
        min-width: 62px;
        height: 32px;
        ${({ theme }) => theme.typography.caption.c2};
      `;
    case 'md':
      return css`
        min-width: 106px;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
      `;
    case 'lg':
      return css`
        min-width: 328px;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
      `;
    case 'initial':
      return css``;
    default:
      return '';
  }
};

const handleButtonType = (props: ButtonCSSProps) => {
  switch (props.$styleType) {
    case 'solid':
      return css`
        background-color: ${theme.color.primary};
        color: ${theme.color.gray01};
        border: 1px solid transparent;
        border: 1px solid ${theme.color.primary};
        padding: 0 16px;

        &:active {
          background-color: ${theme.color.primary06};
          border: 1px solid ${theme.color.primary06};
        }
        &:hover {
          background-color: ${theme.color.primary04};
          border: 1px solid ${theme.color.primary04};
        }
      `;
    case 'outline':
      return css`
        background-color: ${theme.color.gray01};
        color: ${theme.color.primary};
        border: 1px solid ${theme.color.primary};
        padding: 0 16px;
      `;
    case 'revert':
      return css`
        background-color: ${theme.color.gray01};
        border: 1px solid ${theme.color.gray03};
        color: ${theme.color.gray06};

        &:active {
          background-color: ${theme.color.gray02};
          border: 1px solid ${theme.color.gray03};
        }
        &:hover {
          border: 1px solid ${theme.color.gray05};
          background-color: ${theme.color.gray01};
        }
      `;
    case 'disabled':
      return css`
        background-color: ${theme.color.gray03};
        border: 1px solid transparent;
        color: ${theme.color.gray01};
        pointer-events: none;
        cursor: default;
        padding: 0 16px;
      `;
    case 'warning':
      return css``;
    case 'text':
      return css`
        height: auto;
        padding: 0;
        color: ${theme.color.primary};
        padding: 0 16px;
      `;
    case 'initial':
      return css``;
    default:
      return css``;
  }
};

export const Button = styled.button<ButtonCSSProps>`
  ${(props) => handleButtonType(props)}
  ${(props) => handleButtonSize(props)}
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
  min-width: ${(props) => props.$fullWidth && '100%'};
  border-radius: 4px;
  letter-spacing: 0em;
  white-space: nowrap;
  appearance: none;

  svg {
    margin-right: ${theme.gap.gap1};
  }

  /* 새 현장 추가, 코드로 현장 추가 버튼 */
  &.addConstructionButton {
    width: 100%;
    max-width: 180px;
  }

  /* 메인 랜딩 페이지 버튼 */
  &.mainLandingButton {
    ${theme.typography.label.lb1}
    min-width:fit-content;
    color: #fff;
    padding: 8px 24px;
  }
`;
