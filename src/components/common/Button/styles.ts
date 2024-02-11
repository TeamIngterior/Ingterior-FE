import styled, { css } from 'styled-components';
import { theme } from '@/assets/styles/theme';
import { ButtonCSSProps } from '.';

const handleButtonSize = (props: ButtonCSSProps) => {
  switch (props.size) {
    case 'sm':
      return css`
        min-width: 106px;
        height: 40px;
      `;
    case 'md':
      return css`
        min-width: 328px;
        height: 48px;
      `;
    default:
      return '';
  }
};

const handleBgColor = (props: ButtonCSSProps) => {
  switch (props.$bgType) {
    case 'default':
      return css`
        ${({ theme }) => theme.typography.label.lb1};
        background-color: ${theme.color.primary};
        color: ${theme.color.gray01};
      `;
    case 'revert':
      return css`
        ${({ theme }) => theme.typography.label.lb1};
        background-color: ${theme.color.gray01};
        border: 1px solid ${theme.color.gray03};
      `;
  }
};

const handleButtonType = (props: ButtonCSSProps) => {
  switch (props.$styleType) {
    case 'solid':
      return css`
        background-color: ${theme.color.primary};
        color: ${theme.color.gray01};
        border: 1px solid ${theme.color.primary};
      `;
    case 'outline':
      return css`
        background-color: ${theme.color.gray01};
        color: ${theme.color.primary};
        border: 1px solid ${theme.color.primary};
      `;
    case 'disabled':
      return css`
        background-color: ${theme.color.gray100};
        color: ${theme.color.gray500};
        pointer-events: none;
        cursor: default;
      `;
    case 'warning':
      return css``;
    case 'text':
      return css`
        height: auto;
        padding: 0;
        color: ${theme.color.primary};
      `;
    default:
      return css`
        background-color: ${theme.color.primary};
        color: ${theme.color.gray01};
        border: 1px solid ${theme.color.primary};
      `;
  }
};

export const Button = styled.button<ButtonCSSProps>`
  ${(props) => handleButtonSize(props)}
  ${(props) => handleButtonType(props)}
  ${(props) => handleBgColor(props)}
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};

  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  white-space: nowrap;
  appearance: none;

  svg {
    margin-right: ${theme.gap.gap1};
  }
`;
