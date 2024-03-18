import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const CanvasContainer = styled.div`
  width: 100%;
  height: 588px;
  background-color: #f4f4f4;
  margin-bottom: ${theme.gap.gap3};
`;

export const DefectListContainer = styled.div`
  margin-bottom: ${theme.gap.gap9};
`;

export const NoDefectContainer = styled.div`
  ${theme.typography.body.b1};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border: 1px dashed ${theme.color.gray03};
  border-radius: 4px;
`;

export const DetailConstructionInfoContainer = styled.div`
  margin-bottom: ${theme.gap.gap3};
`;

export const DetailConstructionInfoTitle = styled.h3`
  ${theme.typography.title.h1};
  margin-bottom: ${theme.gap.gap3};
`;

export const DetailConstructionMebmerContainer = styled.div``;

export const MemberListHeader = styled.div`
  ${theme.typography.title.h5};
  padding-left: ${theme.gap.gap2};
  margin-bottom: ${theme.gap.gap1};
`;

export const MemberList = styled.ul`
  margin-bottom: ${theme.gap.gap5};
`;

export const MemberListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${theme.gap.gap1} ${theme.gap.gap2};

  &:hover {
    background-color: ${theme.color.primary01};
  }
`;

export const MemberProfileImage = styled.div`
  width: 24px;
  height: 24px;
  margin-right: ${theme.gap.gap1};
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
