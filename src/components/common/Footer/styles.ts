import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  height: ${theme.layoutComponent.footer_height}px;
  padding: ${theme.gap.gap6} 0;
  border-top: 1px solid ${theme.color.gray03};

  @media (max-width: 500px) {
    height: ${theme.layoutComponent.footer_mobile_height}px;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.gap.gap4} 0;
  width: 100%;
  max-width: calc(588px + 16px * 2);
  height: 100%;
  margin: 0 auto;

  .logo {
    width: 121px;
    min-width: 121px;
    height: 32px;
    min-height: 32px;
    cursor: pointer;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${theme.gap.gap1} 0;
`;

export const FooterContentList = styled.ul`
  display: flex;
  gap: ${theme.gap.gap1} ${theme.gap.gap2};
  justify-content: center;
  flex-wrap: wrap;
`;

export const FooterContentListItem = styled.li`
  ${theme.typography.body.b2}
`;

export const FooterLinkContainer = styled.ul``;
export const FooterLink = styled.li`
  ${theme.typography.body.b2}
  color: ${theme.color.gray04};
  cursor: pointer;
`;
