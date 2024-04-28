import { useState } from 'react';
import * as S from './styles';

interface OptionProps {
  label: string;
  icon?: React.ReactNode;
  onClickHandler: () => void;
}

interface DropdownMenuProps {
  options: OptionProps[];
  children: React.ReactNode;
  dropdownMunuStyle?: React.CSSProperties;
}

function DropdownMenu({
  options,
  dropdownMunuStyle,
  children,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (event: any, option: any) => {
    event.stopPropagation();
    option.onClickHandler();
    setIsOpen(false);
  };

  return (
    <S.DropdownMenuContainer className="dropdown-menu">
      <div className="dropdown-menu__header" onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && (
        <>
          <S.Dimmed onClick={() => setIsOpen(false)} />
          <S.DropdownMenuList
            className="dropdown-menu__list"
            style={dropdownMunuStyle}
          >
            {options.map((option: any, index: number) => (
              <S.DropdownMenuItem
                key={index}
                onClick={(event) => handleOptionClick(event, option)}
              >
                {option.label}
                {option.icon}
              </S.DropdownMenuItem>
            ))}
          </S.DropdownMenuList>
        </>
      )}
    </S.DropdownMenuContainer>
  );
}

export default DropdownMenu;
