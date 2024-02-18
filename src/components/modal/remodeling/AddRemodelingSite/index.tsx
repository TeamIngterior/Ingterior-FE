import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';

function AddRemodlingSite() {
  return (
    <DefaultModal name="addRemodelingSite">
      <S.ModalContainer>
        {/* 모달 컨텐츠 */}
        <S.ModalContent>
          <S.ModalHeader>현장 코드를 입력해 주세요.</S.ModalHeader>
        </S.ModalContent>

        {/* 모달 하단 버튼 */}
        <S.ModalButtonContainer>
          <Button
            type="button"
            $styleType="disabled"
            size="lg"
            $fullWidth={true}
            onClickHandler={() => console.log('confirm')}
          >
            추가하기
          </Button>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </DefaultModal>
  );
}

export default AddRemodlingSite;
