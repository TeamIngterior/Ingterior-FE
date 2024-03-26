import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoHorizontal from '@assets/ingteriorLogo_horizon.svg?react';
import CloseIcon from '@assets/icon/close.svg?react';
import MenuIcon from '@assets/icon/menu.svg?react';
import Sidebar from '../Sidebar';

import * as S from './styles';
import { MENU_LINK } from '@/constants/link';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.HeaderContainer>
      <S.HeaderInner>
        <LogoHorizontal
          className="logo"
          onClick={() => {
            navigate('/');
          }}
        />

        {/* 메뉴 */}
        <S.MenuContainer>
          <S.MenuList>
            {MENU_LINK.map((menu, index) => (
              <S.MenuListItem
                key={index}
                onClick={() => {
                  menu.key === 3
                    ? window.open(menu.path, '_blank')
                    : navigate(menu.path);
                }}
              >
                {menu.name}
              </S.MenuListItem>
            ))}
          </S.MenuList>
        </S.MenuContainer>

        {/* 메뉴 버튼 */}
        <S.UserActionsContainer>
          {isLogin ? (
            <>
              <S.UserProfile>
                <img src="https://via.placeholder.com/48" alt="user profile" />
                박지현&nbsp;님
              </S.UserProfile>
              <S.MenuActionContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </S.MenuActionContainer>
            </>
          ) : (
            <>
              <S.MenuActionContainer onClick={() => navigate('/signin')}>
                로그인
              </S.MenuActionContainer>
            </>
          )}
        </S.UserActionsContainer>

        {/* 사이드바 */}
        {isMenuOpen && <Sidebar />}
      </S.HeaderInner>
    </S.HeaderContainer>
  );
}

export default Header;
