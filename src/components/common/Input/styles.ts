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

  .addConstructionContainer & {
    margin-bottom: ${theme.gap.gap5};
  }
`;

export const InputContentContainer = styled.div<InputCSSProps>`
  position: relative;
  display: ${(props) => props.$isHorizontal && 'flex'};
  gap: ${(props) => props.$isHorizontal && theme.gap.gap1};
`;

export const InputLabel = styled.label`
  ${theme.typography.title.h5}
  display: block;
  margin-bottom: ${theme.gap.gap2};

  .required {
    color: ${theme.color.secondary05};
  }

  .subLabel {
    ${theme.typography.caption.c2}
    color: ${theme.color.gray04};
  }
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

export const CheckboxContainer = styled.div<InputCSSProps>`
  display: flex;
  width: 100%;
  gap: ${theme.gap.gap1};
`;

export const Checkbox = styled.div<InputCSSProps>`
  width: 100%;
`;

export const InputCheckbox = styled.input<InputCSSProps>`
  display: none;

  & + label {
    ${theme.typography.label.lb1}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background-color: ${theme.color.gray02};
    color: ${theme.color.gray04};
    border-radius: 4px;
    cursor: pointer;

    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.gap.gap1};
    }
  }

  &:checked + label {
    border: 1px solid ${theme.color.primary04};
    background-color: ${theme.color.primary04};
    color: ${theme.color.gray01};
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
