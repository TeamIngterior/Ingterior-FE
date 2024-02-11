import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const TemplateContainer = styled.main`
  width: 100%;
  min-height: ${`calc(100% - ${theme.layoutComponent.header_height}px - ${theme.layoutComponent.footer_height}px)`};
  padding: 104px 0;
  position: relative;
`;

export const TemplateInner = styled.div`
  width: 100%;
  max-width: calc(1200px + 24px * 2);
  padding: 0 16px;
  margin: 0 auto;
`;
