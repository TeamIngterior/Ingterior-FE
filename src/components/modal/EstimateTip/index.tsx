import { useModal } from '@/hooks/useModal';
import DefaultModal from '../DefaultModal';

import * as CS from '@/components/modal/styles';
import * as S from './styles';

function EstimateTip() {
  return (
    <DefaultModal name="estimateTip" className="estimateTip">
      <CS.ModalContainer>
        <S.EstimateHeader>
          <S.EstimateHeaderDescribe>
            전용면적이 아닌 <strong>공급면적</strong>을 기입해 주세요.
            <br />
            정확한 정보가 없다면 아래 표를 참고하여 근사치를 입력해 주세요.
          </S.EstimateHeaderDescribe>
        </S.EstimateHeader>

        <S.GridContainer>
          <S.GridHeader>전용면적 m² (평)</S.GridHeader>
          <S.GridHeader>공급면적 m² (평)</S.GridHeader>
          <S.GridItem>49m² (15평)</S.GridItem>
          <S.GridItem>76m² (23평)</S.GridItem>
          <S.GridItem>59m² (18평)</S.GridItem>
          <S.GridItem>86m² (26평)</S.GridItem>
          <S.GridItem>74m² (22평)</S.GridItem>
          <S.GridItem>99m² (30평)</S.GridItem>
          <S.GridItem>85m² (25평)</S.GridItem>
          <S.GridItem>111m² (32평)</S.GridItem>
          <S.GridItem>96m² (29평)</S.GridItem>
          <S.GridItem>128m² (38평)</S.GridItem>
          <S.GridItem>122m² (37평)</S.GridItem>
          <S.GridItem>150m² (46평)</S.GridItem>
        </S.GridContainer>
      </CS.ModalContainer>
    </DefaultModal>
  );
}

export default EstimateTip;
