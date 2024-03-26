import { useNavigate } from 'react-router-dom';

import { SIDE_MENU_LINK } from '@/constants/link';

import * as S from './styles';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <S.SideMenu>
      <nav>
        <S.SideMenuList>
          {SIDE_MENU_LINK.map((item, index) => (
            <S.SideMenuItem
              key={index}
              onClick={() => {
                item.key === 3
                  ? window.open(item.path, '_blank')
                  : navigate(item.path);
              }}
            >
              {item.name}
            </S.SideMenuItem>
          ))}
        </S.SideMenuList>
      </nav>
    </S.SideMenu>
  );
}

export default Sidebar;
