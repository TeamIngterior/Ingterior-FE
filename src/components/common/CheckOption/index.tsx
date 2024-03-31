import { useEffect, useState } from 'react';
import * as S from '../Input/styles';
import { BsCheckLg } from 'react-icons/bs';

interface OptionProps {
  onSelectedOption: any;
}

function CkeckOption({ onSelectedOption }: OptionProps) {
  const [selectedOptions, setSelectedOptions] = useState<boolean>(false);

  useEffect(() => {
    onSelectedOption(selectedOptions);
  }, [selectedOptions]);

  const toggleSelectedOption = () => {
    setSelectedOptions((prevState) => !prevState);
  };

  return (
    <S.InputCheckOptionbox>
      <input
        type="checkbox"
        checked={selectedOptions}
        onChange={toggleSelectedOption}
      />
      <span>
        <BsCheckLg fill={'#fff'} />
      </span>
    </S.InputCheckOptionbox>
  );
}

export default CkeckOption;
