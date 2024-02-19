import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const RemodelingListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.gap.gap1};

  min-height: ${`calc(100dvh - ${theme.layoutComponent.header_height}px - ${theme.layoutComponent.footer_height}px - ${theme.layoutComponent.main_template_padding}px *2 - ${theme.gap.gap1})`};

  .constructionButtonContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    min-height: ${`calc(100dvh - ${theme.layoutComponent.header_mobile_height}px - ${theme.layoutComponent.footer_mobile_height}px -${theme.gap.gap7}*2 - ${theme.gap.gap1})`};
  }

  @media (max-width: 500px) {
    min-height: ${`calc(100dvh - ${theme.layoutComponent.header_mobile_height}px - ${theme.layoutComponent.footer_mobile_height}px - 16px*2 - ${theme.gap.gap1})`};
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

export const NoDataContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  border: 1px dashed ${theme.color.gray04};
  border-radius: 4px;

  p {
    display: inline-flex;
    align-self: center;
    ${theme.typography.body.b1};
    color: ${theme.color.gray05};
    line-height: 1.5;
    text-align: center;
  }
`;
