import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const DonatetContainer = styled.div``;

export const DonateContent = styled.div`
  display: flex;
  margin-top: ${theme.gap.gap7};
  padding-bottom: ${theme.gap.gap3};
  border-bottom: 1px solid #d9d9d9;
`;

export const AccountNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

export const AccountNumberTitle = styled.h2`
  ${theme.typography.title.h5};
  margin-bottom: 4px;

  & + p {
    ${theme.typography.body.b1};
    color: ${theme.color.gray04};
  }
`;
