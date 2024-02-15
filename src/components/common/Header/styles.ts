import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray03};
`;

export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: calc(588px + 16px * 2);
  height: 100%;
  padding: 0 16px;
`;

export const MenuContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  margin-left: auto;
`;
