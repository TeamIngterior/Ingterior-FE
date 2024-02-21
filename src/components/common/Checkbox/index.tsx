import React, { useState, forwardRef, useEffect } from 'react';

import * as S from '../Input/styles';

interface OptionProps {
  id: string;
  icon?: React.ReactNode;
  text: string;
}

interface CheckboxProps {
  name: string;
  label?: string;
  labelOption?: React.ReactNode;
  supportText?: string;
  options: OptionProps[];
  onSelectedOption: any;
  errors: any;
}

function Checkbox(
  {
    name,
    label,
    labelOption,
    supportText,
    options,
    errors,
    onSelectedOption,
    ...rest
  }: CheckboxProps,
  ref: React.Ref<HTMLInputElement>
) {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const errorKEY = errors?.[name as string]?.message as string;

  const handleOptionClick = (index: number) => () => {
    setSelectedOptions((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  useEffect(() => {
    const selectedOptionsText = selectedOptions.map(
      (index) => options[index].text
    );
    onSelectedOption(selectedOptionsText);
  }, [selectedOptions]);

  return (
    <S.InputContainer>
      {label && (
        <S.InputLabel htmlFor={name}>
          {label}
          {labelOption}
        </S.InputLabel>
      )}

      <S.InputContentContainer>
        <S.CheckboxContainer>
          {options.map(({ text, icon }, index) => (
            <S.Checkbox key={text}>
              <S.InputCheckbox
                type="checkbox"
                id={`${name}-${index}`}
                name={name}
                value={text}
                ref={ref}
                onClick={handleOptionClick(index)}
                {...rest}
              ></S.InputCheckbox>
              <label htmlFor={`${name}-${index}`}>
                <span className="icon">{icon && icon}</span>
                {text}
              </label>
            </S.Checkbox>
          ))}
        </S.CheckboxContainer>
      </S.InputContentContainer>

      {errorKEY && <S.InputErrorMessage>{errorKEY}</S.InputErrorMessage>}
      {supportText && <S.InputSupportText>{supportText}</S.InputSupportText>}
    </S.InputContainer>
  );
}

export default forwardRef(Checkbox);
