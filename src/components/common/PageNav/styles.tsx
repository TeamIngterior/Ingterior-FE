import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const PageNavContainer = styled.nav`
  .AddConstructionContainer & {
    margin-bottom: ${theme.gap.gap7};
  }
`;

export const PageNavList = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: inline-flex;
    align-items: center;
  }
`;

export const PageNavItem = styled.span`
  ${theme.typography.link.l2};
  margin-right: ${theme.gap.gap1};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const PageNavArrow = styled.span`
  display: inline-flex;
  align-items: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  color: ${theme.color.gray04};
`;
