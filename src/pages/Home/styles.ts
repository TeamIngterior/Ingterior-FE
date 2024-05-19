import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const HomeContainer = styled.div`
  height: 100%;
`;

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;

  &.main {
    flex-direction: column;
    align-items: center;
    height: ${`calc(100vh - ${theme.layoutComponent.header_height}px)`};
    height: ${`calc(100dvh - ${theme.layoutComponent.header_height}px)`};
    text-align: center;
  }

  &:not(.main) {
    height: 596px;
  }

  &:nth-child(odd) {
    background-color: ${theme.color.gray02};
  }
`;

//  섹션 공통
export const HomeSectionInner = styled.div`
  display: flex;
  gap: 0 103px;
  margin: 0 auto;

  svg {
    align-self: flex-end;
  }
`;

export const HomeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  line-height: 1.5;

  .simpleEstimate & {
    text-align: left;
  }

  .defact & {
    align-items: flex-end;
    text-align: right;
  }
`;

export const HomeSectionLabel = styled.span`
  display: inline-flex;
  width: fit-content;
  margin-bottom: ${theme.gap.gap1};
  padding: ${theme.gap.gap1};
  border-radius: 8px;
  font-weight: 500;
  color: ${theme.color.secondary05};
  background-color: ${theme.color.secondary01};
`;

export const HomeSectionTitle = styled.h2`
  margin-bottom: ${theme.gap.gap2};
`;

export const HomeSectionDescription = styled.p`
  margin-bottom: ${theme.gap.gap4};
`;

// 메인 영역
export const HomeMainDescription = styled.p`
  margin-bottom: ${theme.gap.gap1};
`;

export const HomeMainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${theme.color.gray06};
  margin-bottom: ${theme.gap.gap4};
  line-height: 1.5;
`;
