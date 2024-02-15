import * as S from './styles';

const SIDE_MENU_LIST = [
  {
    name: '현장목록',
    path: '/remodeling/list',
  },
  {
    name: '메세지',
    path: '/message',
  },
  {
    name: '설정',
    path: '/setting',
  },
];

function Sidebar() {
  return (
    <S.SideMenu>
      <S.SideMenuList>
        {SIDE_MENU_LIST.map((item, index) => (
          <S.SideMenuItem key={index}>{item.name}</S.SideMenuItem>
        ))}
      </S.SideMenuList>
    </S.SideMenu>
  );
}

export default Sidebar;
