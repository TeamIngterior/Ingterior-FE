import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const ReadyPageContainer = styled.div`
  ${theme.typography.title.h2};
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  color: ${theme.color.gray04};
  margin: 284px 0;
`;
