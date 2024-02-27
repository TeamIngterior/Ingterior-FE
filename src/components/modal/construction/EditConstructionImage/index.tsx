import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';
import ImageEditor from '@/components/common/FileUploader/ImageEditor';

function EditConstructionImage() {
  const handleImageChange = (editedImage: string | null) => {
    //    수정된 이미지 데이터를 받아서 처리하는 로직
  };

  return (
    <DefaultModal
      name="editConstructionImage"
      className="editConstructionImage"
    >
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

export default EditConstructionImage;
