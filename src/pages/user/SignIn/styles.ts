import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const LoginHeader = styled.div`
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
  margin-bottom: 60px;

  .logo {
    margin-bottom: ${theme.gap.gap1};
  }
`;

export const LoginTitle = styled.h1`
  ${({ theme }) => theme.typography.title.h2}
  margin-bottom: ${theme.gap.gap1};
`;

export const LoginSubTitle = styled.p`
  ${({ theme }) => theme.typography.label.l1}
  color: ${theme.color.gray04};

  strong {
    color: ${theme.color.primary};
  }
`;
