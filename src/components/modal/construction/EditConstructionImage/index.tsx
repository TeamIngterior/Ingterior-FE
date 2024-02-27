import { useEffect, useRef, useState } from 'react';
import { useImageEdit } from '@/hooks/useImageEdit';

import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';
import ImageEditor from '@/components/common/FileUploader/ImageEditor';
import { useModal } from '@/hooks/useModal';

function EditConstructionImage() {
  const canvasRef = useRef(null);

  const { changeImage, applyChanges } = useImageEdit(canvasRef);
  const { closeModal } = useModal('editConstructionImage');

  return (
    <DefaultModal
      name="editConstructionImage"
      className="editConstructionImage"
    >
      {/* 모달 컨텐츠 */}
      <CS.ModalContentContainer>
        <CS.ModalHeader>영역 안에 이미지를 맞춰주세요.</CS.ModalHeader>
        <CS.ModalContent>
          <ImageEditor isEditor={true} canvasRef={canvasRef} />
        </CS.ModalContent>

        <CS.ModalButtonContainer>
          <Button
            size="lg"
            $fullWidth={true}
            $styleType="revert"
            style={{
              marginBottom: '16px',
            }}
            onClickHandler={() => {
              changeImage();
            }}
          >
            이미지 변경
          </Button>

          <Button
            size="lg"
            $fullWidth={true}
            onClickHandler={() => {
              applyChanges();
              closeModal();
            }}
          >
            추가하기
          </Button>
        </CS.ModalButtonContainer>
      </CS.ModalContentContainer>
    </DefaultModal>
  );
}

export default EditConstructionImage;
