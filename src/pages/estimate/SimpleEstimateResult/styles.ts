import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const SimpleEstimateResultContainer = styled.div``;

export const SimpleEstimateInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.gap.gap3};
  background-color: ${theme.color.gray02};
  border-radius: 4px;
  cursor: pointer;
`;

export const SimpleEstimateInfoHeader = styled.div`
  ${theme.typography.title.h5};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.gap.gap2};

  &.active {
    padding-bottom: ${theme.gap.gap1};
  }
`;

export const SimpleEstimateInfo = styled.div`
  line-height: 1.5;
  padding: 0 ${theme.gap.gap2};
  margin-bottom: ${theme.gap.gap2};
`;

export const SimpleEstimateContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.gap.gap7};
`;

export const SimpleEstimateResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;

export const SimpleEstimateResult = styled.div`
  padding-bottom: ${theme.gap.gap1};
  border-bottom: 1px solid ${theme.color.gray03};
  margin-bottom: ${theme.gap.gap5};
`;

export const SimpleEstimateResultHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SimpleEstimateResultHeading = styled.h3`
  margin-bottom: 4px;
`;

export const SimpleEstimateResultDescribe = styled.p`
  ${theme.typography.body.b2};
  color: ${theme.color.gray04};
  line-height: 1.5;
  margin-bottom: ${theme.gap.gap1};
`;

export const SimpleEstimateResultPrice = styled.div`
  ${theme.typography.title.h4};
  display: flex;
  padding: 0 ${theme.gap.gap2};
`;

export const SimpleEstimateResultUnit = styled.span`
  ${theme.typography.label.lb1};
  white-space: nowrap;
  margin-left: auto;
`;

export const SimpleEstimateGuide = styled.p`
  ${theme.typography.body.b2};
  color: ${theme.color.gray04};
  margin-top: ${theme.gap.gap2};
`;

export const SimpleEstimateButtonContainer = styled.div`
  text-align: center;

  p {
    ${theme.typography.title.h5};
    color: ${theme.color.gray06};
    margin-bottom: ${theme.gap.gap2};
  }
`;
