import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${theme.layoutComponent.header_height}px;
  border-bottom: 1px solid ${theme.color.gray03};

  @media (max-width: 500px) {
    height: ${theme.layoutComponent.header_mobile_height}px;
  }
`;

export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: calc(1200px + 16px * 2);
  height: 100%;
  padding: 0 16px;

  ${theme.typography.link.l2};

  .logo {
    width: 120px;
    min-width: 120px;
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div`
  margin-left: ${theme.gap.gap3};

  @media (max-width: 719px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 ${theme.gap.gap3};
`;
export const MenuListItem = styled.li`
  cursor: pointer;
`;

// 유저 프로필, 메뉴 액션 컨테이너를 감싸는 컨테이너
export const UserActionsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0 ${theme.gap.gap1};
  padding: 0 ${theme.gap.gap1};
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

export const MenuActionContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 40px;
    min-width: 40px;
    height: 40px;

    svg {
      width: 24px;
    }
  }
`;
