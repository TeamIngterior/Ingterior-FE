import { forwardRef, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import * as IS from '@components/common/Input/styles';

interface Option {
  id: number;
  label: string;
}

interface OptionProps {
  name: string;
  options: Option[];
  label?: string;
  defaultValue?: string;
  labelOption?: React.ReactNode;
  control: any;
}

function Radiobox(
  { name, options, label, labelOption, defaultValue, control }: OptionProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || options[0]?.label,
  });

  return (
    <IS.InputContainer>
      {label && (
        <IS.InputLabel htmlFor={name}>
          {label}
          {labelOption}
        </IS.InputLabel>
      )}
      <IS.InputRadioContainer>
        {options.map((option, index) => (
          <IS.InputRadionbox key={index}>
            <input
              type="radio"
              name={name}
              value={option.label}
              checked={field.value === option.label}
              onChange={() => field.onChange(option.label)}
              ref={ref as React.Ref<HTMLInputElement>}
            />
            <span>{option.label}</span>
          </IS.InputRadionbox>
        ))}
      </IS.InputRadioContainer>
    </IS.InputContainer>
  );
}

export default forwardRef(Radiobox);
