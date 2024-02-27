import { useImageEdit } from '@/hooks/useImageEdit.1';
import { useEffect, useId, useRef } from 'react';

import { useModal } from '@/hooks/useModal';

import { MdAdd } from 'react-icons/md';
import { RiPencilLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../../Button';

import * as S from './styles';
import * as CS from '@/components/common/Input/styles';

function ImageEditor({
  label,
  labelOption,
  canvasRef,
  isEditor,
  isMultiple = false,
}: {
  label?: string;
  labelOption?: React.ReactNode;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
  isEditor?: boolean;
  isMultiple?: boolean;
}) {
  const {
    image,
    getRootProps,
    getInputProps,
    rotate,
    flipHorizontally,
    flipVertically,
    // changeImage,
    resetChanges,
    editedImage,
    deleteImage,
  } = useImageEdit(canvasRef);

  const labelID = useId();
  const { openModal } = useModal('editConstructionImage');

  // 편집 기능 O 단일 이미지 업로드
  const renderEditorButtons = () => (
    <S.ImageEditorCanvasContainer>
      <button onClick={rotate}>Rotate</button>
      <button onClick={flipHorizontally}>Flip Horizontally</button>
      <button onClick={flipVertically}>Flip Vertically</button>
      <button onClick={resetChanges}>Reset Changes</button>
      <br />
      <canvas ref={canvasRef} />
      <br />
      {/* <button onClick={applyChanges}>Apply Changes</button> */}
      {/* <button onClick={changeImage}>Change Image</button> */}
    </S.ImageEditorCanvasContainer>
  );

  // 편집 기능 X 단일 이미지 업로드
  const renderImageView = () => (
    <>
      <S.ImageEditorThumbnail>
        <img src={editedImage || image} alt="Thumbnail" />
      </S.ImageEditorThumbnail>

      <S.ImageEditorButtonContainer>
        <Button
          type="button"
          $styleType="revert"
          $fullWidth={true}
          icon={<RiPencilLine />}
          style={{
            minWidth: 'initial',
          }}
          onClickHandler={openModal}
        >
          도면 편집
        </Button>
        <Button
          type="button"
          $styleType="revert"
          $fullWidth={true}
          icon={<AiOutlineClose />}
          style={{
            minWidth: 'initial',
          }}
          onClickHandler={deleteImage}
        >
          이미지 삭제
        </Button>
      </S.ImageEditorButtonContainer>
    </>
  );

  return (
    <CS.InputContainer>
      <CS.InputLabel style={{ marginBottom: '4px' }}>
        {label}
        {labelOption}
      </CS.InputLabel>

      {!isEditor && (
        <S.ImageEditorContext>
          마커 기능을 사용하여 현장관리를 더 효율적으로 이용할 수 있습니다.
        </S.ImageEditorContext>
      )}

      {image ? (
        <>{isEditor ? renderEditorButtons() : renderImageView()}</>
      ) : (
        <>
          <S.ImageEditorDropzone {...getRootProps()}>
            <input id={labelID} multiple={isMultiple} {...getInputProps()} />
            <MdAdd />
            <p>이미지 첨부하기</p>
          </S.ImageEditorDropzone>

          <S.ImageEditorContext className="detail">
            &#8211;&nbsp;최대 {isMultiple ? '8개' : '1개'}개까지 추가
            가능합니다.
            <br />
            &#8211;&nbsp;파일 형식은 Jpg, Jpeg, Png, Gif만 가능합니다.
            <br />
            &#8211;&nbsp;최대 5MB까지 업로드 가능합니다.
          </S.ImageEditorContext>
        </>
      )}
    </CS.InputContainer>
  );
}

export default ImageEditor;
