import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import * as S from './styles';

function SettingMenu({ name, path }: { name: string; path: string }) {
  const navigate = useNavigate();

  return (
    <S.SettingMenuContainer onClick={() => navigate(path)}>
      {name}

      <IoIosArrowForward className="arrowIcon" />
    </S.SettingMenuContainer>
  );
}

export default SettingMenu;
