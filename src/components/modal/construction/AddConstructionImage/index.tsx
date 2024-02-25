import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';
import ImageEditor from '@/components/common/ImageEditor';

function AddConstructionImage() {
  const handleImageChange = (editedImage: string | null) => {
    // 이 함수에서 editedImage를 처리하거나 다른 작업을 수행합니다.
    console.log('Edited image:', editedImage);
  };

  return (
    <DefaultModal name="addConstructionImage" className="addConstructionImage">
      {/* 모달 컨텐츠 */}
      <CS.ModalContentContainer>
        <CS.ModalHeader>영역 안에 이미지를 맞춰주세요.</CS.ModalHeader>
        <CS.ModalContent>
          <ImageEditor onImageChange={handleImageChange} />
        </CS.ModalContent>

        <CS.ModalButtonContainer>
          <Button size="lg" $fullWidth={true}>
            추가하기
          </Button>
        </CS.ModalButtonContainer>
      </CS.ModalContentContainer>
    </DefaultModal>
  );
}

export default AddConstructionImage;
