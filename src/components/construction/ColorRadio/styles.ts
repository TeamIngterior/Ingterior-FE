import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ColorRadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.gap.gap2} 0;
`;

export const ColorRadioTitleContainer = styled.div``;

export const ColorRadioTitle = styled.p`
  ${theme.typography.title.h5};
  margin-bottom: ${theme.gap.gap2};

  .required {
    color: ${theme.color.secondary05};
  }
`;

export const ColorRadioContainer = styled.div`
  margin-right: ${theme.gap.gap2};
`;

export const ColorRadioInput = styled.input`
  display: none;
`;

export const ColorRadioLabel = styled.label`
  display: inline-flex;
  width: 48px;
  min-width: 48px;
  height: 48px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;

  ${ColorRadioInput}:checked + & {
    border: 1px solid ${theme.color.primary07};
  }
`;
