import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const RemodelingListContainer = styled.div`
  position: relative;
  padding-top: ${theme.gap.gap1};

  .constructionButtonContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 120px;
  }
`;
export const AddConstructionConatiner = styled.div`
  bottom: 16px;
`;

export const AddConstructionList = styled.ul`
  position: absolute;
  right: 0;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: ${theme.gap.gap1};

  li {
    display: flex;
    justify-content: flex-end;
  }
`;
