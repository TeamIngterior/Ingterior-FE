import styled, { css } from 'styled-components';
import { theme } from '@/assets/styles/theme';
import { InputCSSProps } from '.';

const handleSizeProps = (props: InputCSSProps) => {
  if (props.size === 'sm') {
    return css`
      height: 32px;
      ${theme.typography.body.b2}
    `;
  }
  return css`
    height: 48px;
    ${theme.typography.label.lb1}
  `;
};

export const commonInputStyle = css`
  width: 100%;
  border: 0;
  font: inherit;
  border-radius: 4px;
  border: 1px solid ${theme.color.gray03};

  &::placeholder {
    color: ${theme.color.gray04};
  }

  &:focus-within {
    border: 1px solid ${theme.color.primary04};
  }

  &.error {
    border: 1px solid ${theme.color.error};
  }

  ::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const InputContainer = styled.div<InputCSSProps>`
  width: 100%;
`;

export const InputContentContainer = styled.div<InputCSSProps>`
  position: relative;
  display: ${(props) => props.$isHorizontal && 'flex'};
  gap: ${(props) => props.$isHorizontal && theme.gap.gap1};
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;

export const Input = styled.input<InputCSSProps>`
  ${commonInputStyle}
  ${handleSizeProps}

  padding: 0 ${theme.gap.gap2};

  ${(props) =>
    props.readOnly &&
    `
        color: ${theme.color.gray06};
        &:focus-within {
            border: 1px solid ${theme.color.gray06};
        }
  `}

  &.disabled {
    color: ${theme.color.gray06};
    background-color: #f8f8f8;
    pointer-events: none;
    cursor: default;
  }
`;

export const Textarea = styled.textarea`
  ${commonInputStyle}
  padding: 16px;
  min-height: 158px;
  resize: none;
  overflow-y: scroll;
  overflow-y: overlay;

  &::placeholder {
    white-space: pre-wrap;
  }
`;

export const InputErrorMessage = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: ${theme.color.error};
`;

export const InputSupportText = styled.p`
  margin-top: 4px;
  font-size: 14px;
  padding: 0 16px;
  ${theme.typography.caption.c2}
`;
