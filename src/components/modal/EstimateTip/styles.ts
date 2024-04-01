import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const EstimateHeader = styled.div`
  margin: 16px 0;
`;

export const EstimateHeaderDescribe = styled.h3`
  ${theme.typography.body.b2};
  line-height: 1.5;
  color: ${theme.color.gray04};

  strong {
    color: ${theme.color.gray06};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  border-top: 1px solid ${theme.color.gray03};
  border-right: 1px solid ${theme.color.gray03};
  border-left: 1px solid ${theme.color.gray03};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    border-bottom: 1px solid ${theme.color.gray03};
  }
`;

export const GridHeader = styled.div`
  &:nth-child(even) {
    background-color: ${theme.color.primary07};
    color: ${theme.color.gray01};
    border-left: 1px solid ${theme.color.gray03};
  }
`;

export const GridItem = styled.div`
  border-bottom: 1px solid ${theme.color.gray03};

  &:nth-child(even) {
    color: ${theme.color.primary07};
    font-weight: 600;
    border-left: 1px solid ${theme.color.gray03};
  }
`;
