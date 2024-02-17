import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const RemodelingListCardContainer = styled.article`
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

// 현장 라벨 (카테고리)
export const ListCardLabelContainer = styled.div`
  display: flex;
  gap: ${theme.gap.gap1};
  margin-bottom: ${theme.gap.gap1};
`;

export const ListCardLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${theme.color.secondary01};
  color: ${theme.color.secondary05};
  padding: 4px 8px;
`;

// 현장 제목 & 즐겨찾기
export const ListCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.gap.gap1};
`;

export const ListCardTitle = styled.h3`
  ${({ theme }) => theme.typography.title.h3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 40px;
  min-width: 40px;

  .bookmarkIcon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    color: #ffd700;
  }
`;

// 현장 정보
export const ListCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.gap.gap2};
  border-radius: 4px;
  background-color: ${theme.color.gray02};
  &.owner {
    background-color: ${theme.color.primary01};
  }
`;

// 유저 프로필, 유저 코드, 생성일
export const ListCardInfo = styled.div`
  display: flex;
  margin-bottom: ${theme.gap.gap1};

  .detailButton {
    display: inline-flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 24px;
    min-width: 24px;
    height: 24px;
    color: ${theme.color.gray04};

    svg {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
`;

export const ListCardProfileImg = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ListCardProfileInfo = styled.div`
  ${({ theme }) => theme.typography.body.b2}

  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.color.gray05};
  padding: 0 ${theme.gap.gap1};

  p {
    line-height: 1.5;

    &:first-of-type {
      margin-bottom: 6px;
    }
  }
`;

export const LinkShareContainer = styled.div`
  display: flex;
  gap: 0 ${theme.gap.gap1};
`;

export const LinkShareText = styled.div`
  ${({ theme }) => theme.typography.body.b2}
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  background-color: ${theme.color.gray01};
  color: ${theme.color.gray04};
  padding: 0 ${theme.gap.gap1};

  span {
    color: ${theme.color.gray06};
  }
`;
