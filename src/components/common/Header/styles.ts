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
  max-width: calc(588px + 16px * 2);
  height: 100%;
  padding: 0 16px;

  .logo {
    cursor: pointer;

    @media (max-width: 500px) {
      width: 120px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  margin-left: auto;

  @media (max-width: 500px) {
    width: 40px;
    min-width: 40px;
    height: 40px;

    svg {
      width: 24px;
    }
  }
`;
