import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ConstructionListContainer = styled.div`
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
  display: flex;
  gap: 0 ${theme.gap.gap3};
  margin-bottom: ${theme.gap.gap5};
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
    ${theme.typography.body.b1};
    display: inline-flex;
    align-self: center;
    color: ${theme.color.gray05};
    line-height: 1.5;
    text-align: center;
  }
`;
