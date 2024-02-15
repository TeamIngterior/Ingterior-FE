import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoHorizontal from '@assets/ingteriorLogo_horizon.svg?react';
import CloseIcon from '@assets/icon/close.svg?react';
import MenuIcon from '@assets/icon/menu.svg?react';
import Sidebar from '../Sidebar';

import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderInner>
        <LogoHorizontal
          onClick={() => {
            navigate('/');
          }}
        />

        {/* 메뉴 버튼 */}
        <S.MenuContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </S.MenuContainer>

        {isMenuOpen && <Sidebar />}
      </S.HeaderInner>
    </S.HeaderContainer>
  );
}

export default Header;
