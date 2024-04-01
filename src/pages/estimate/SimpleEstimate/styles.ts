import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const SimpleEstimateContainer = styled.div``;

export const SimpleEstimateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  margin-top: ${theme.gap.gap7};
`;

export const SimpleEstimateTip = styled.div`
  position: relative;

  .infoIcon {
    position: absolute;
    top: 5px;
    right: 0;
    display: inline-flex;
    width: 18px;
    height: 18px;
    color: ${theme.color.primary07};
    cursor: pointer;
  }
`;
