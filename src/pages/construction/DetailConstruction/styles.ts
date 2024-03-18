import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const DetailConstructionContainer = styled.div``;

export const DetailConstructionForm = styled.form`
  margin-top: ${theme.gap.gap7};
`;

export const DetailConstructionContentContainer = styled.div`
  margin-top: ${theme.gap.gap7};
`;

export const DetailConstructionTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${theme.gap.gap3};
  border-bottom: 1px solid ${theme.color.gray03};
`;

export const DetailConstructionTab = styled.div`
  ${theme.typography.label.lb1};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-bottom: 2px solid transparent;
  color: ${theme.color.gray04};
  cursor: pointer;

  &.active {
    color: ${theme.color.primary};
    border-bottom: 2px solid ${theme.color.primary};
  }
`;

export const DetailConstructionContent = styled.div``;
