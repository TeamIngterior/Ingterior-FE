import * as S from './styles';
import { SIDE_MENU_LINK } from '@/constants/link';

function Sidebar() {
  return (
    <S.SideMenu>
      <nav>
        <S.SideMenuList>
          {SIDE_MENU_LINK.map((item, index) => (
            <S.SideMenuItem key={index}>{item.name}</S.SideMenuItem>
          ))}
        </S.SideMenuList>
      </nav>
    </S.SideMenu>
  );
}

export default Sidebar;
