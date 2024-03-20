import { useId } from 'react';
import * as S from './styles';

function ColorRadio({
  value,
  onChange,
  checked,
}: {
  value: string;
  onChange: () => void;
  checked: boolean;
}) {
  const id = useId();

  return (
    <S.ColorRadioContainer>
      <S.ColorRadioInput
        id={`${id}+${value}`}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        hidden
      />
      <S.ColorRadioLabel htmlFor={`${id}+${value}`} color={value} />
    </S.ColorRadioContainer>
  );
}

export default ColorRadio;
