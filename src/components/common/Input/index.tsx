import { forwardRef } from 'react';
import * as S from './Input.styles';

export interface InputCSSProps {
  size?: 'sm' | 'md' | 'lg'; // 버튼 사이즈, default: md
  isHorizontal?: boolean; // 버튼이 가로로 배치되어야 하는 경우 전달
  readOnly?: boolean;
}

interface InputProps extends InputCSSProps {
  name: string;
  inputType: 'textarea' | 'input';
  type?: string; // text:default, password - input 타입에서 필수로 받아야 하는 값
  value?: string; // input에 value 표시해야 하는 경우 전달
  label?: string; // input에 라벨 표시해야 하는 경우 전달
  placeholder?: string; // input에 placeholder 표시해야 하는 경우 전달
  className?: string;
  supportText?: string; // input 하단에 보조 텍스트가 필요한 경우 전달
  style?: React.CSSProperties;
  children?: React.ReactNode;
  oninput?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  defaultValue?: '' | string;
  errors?: any; // errors,onChange는 useForm 에서 관리,  직접 Props로 넘겨주지 않음
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

function Input(
  {
    type = 'text',
    size = 'md',
    value,
    isHorizontal,
    inputType,
    name,
    label,
    placeholder,
    defaultValue,
    readOnly,
    className,
    children,
    supportText,
    oninput,
    onKeyDown,
    onChange,
    style,
    errors,
  }: InputProps,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
) {
  // 에러 메시지가 있는 경우 해당 에러 메시지를 errorKEY에 할당
  const errorKEY = errors?.[name as string]?.message as string;

  const inputCommonProps = {
    id: name,
    name: name,
    onChange: onChange,
    placeholder: placeholder,
    defaultValue: defaultValue,
    autoComplete: 'off',
  };

  return (
    <S.InputContainer>
      {label && <S.InputLabel htmlFor={name}>{label}</S.InputLabel>}

      <S.InputContentContainer className="relative" isHorizontal={isHorizontal}>
        {inputType === 'textarea' ? (
          <S.Textarea
            className={errorKEY && 'error'}
            spellCheck="false"
            style={style}
            readOnly={readOnly}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...inputCommonProps}
          />
        ) : (
          <S.Input
            type={type}
            size={size}
            value={value}
            className={errorKEY ? `error ${className}` : className}
            style={style}
            spellCheck="false"
            readOnly={readOnly}
            onKeyDown={onKeyDown}
            onInput={oninput ? () => oninput : undefined}
            ref={ref as React.Ref<HTMLInputElement>}
            {...inputCommonProps}
          />
        )}
        {children}
      </S.InputContentContainer>

      {errorKEY && <S.InputErrorMessage>{errorKEY}</S.InputErrorMessage>}
      {supportText && <S.InputSupportText>{supportText}</S.InputSupportText>}
    </S.InputContainer>
  );
}

export default forwardRef(Input);
