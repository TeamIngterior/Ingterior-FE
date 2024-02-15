import { useNavigate } from 'react-router-dom';

import { IoMdArrowBack } from 'react-icons/io';
import Button from '../Button';

import * as S from './styles';

interface RemodelingListProps {
  prevLink: string;
  title: string;
}

function MobileHeader({ prevLink, title }: RemodelingListProps) {
  const navigate = useNavigate();

  return (
    <S.MobileHeaderContainer>
      <Button
        type="button"
        size="initial"
        $bgType="initial"
        $styleType="icon"
        className="prevButton"
        onClickHandler={() => navigate(prevLink)}
      >
        <IoMdArrowBack />
      </Button>
      <S.MobileHeading>{title}</S.MobileHeading>
    </S.MobileHeaderContainer>
  );
}

export default MobileHeader;
