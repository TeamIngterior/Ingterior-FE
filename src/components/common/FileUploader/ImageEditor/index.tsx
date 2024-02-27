import { useImageEdit } from '@/hooks/useImageEdit';
import { useId } from 'react';

import { MdAdd } from 'react-icons/md';

import * as S from './styles';
import * as CS from '@/components/common/Input/styles';
import { useModal } from '@/hooks/useModal';

function ImageEditor({
  label,
  labelOption,
  onImageChange,
  isEditor,
  isMultiple = false,
}: {
  label?: string;
  labelOption?: React.ReactNode;
  onImageChange: (editedImage: string) => void;
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
    resetChanges,
    editedImage,
    changeImage,
    deleteImage,
    canvasRef,
    applyChanges,
  } = useImageEdit((editedImage: string) => {
    onImageChange(editedImage);
  });

  const labelID = useId();
  const { openModal } = useModal('editConstructionImage');

  // 편집 기능 O 단일 이미지 업로드
  const renderEditorButtons = () => (
    <div>
      <button onClick={rotate}>Rotate</button>
      <button onClick={flipHorizontally}>Flip Horizontally</button>
      <button onClick={flipVertically}>Flip Vertically</button>
      <button onClick={resetChanges}>Reset Changes</button>
      <button onClick={applyChanges}>Apply Changes</button>
      <button onClick={deleteImage}>Delete Image</button>
      <br />
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          height: 'auto',
          border: '1px solid black',
        }}
      />
    </div>
  );

  // 편집 기능 X 단일 이미지 업로드
  const renderImageView = () => (
    <div>
      <img src={image || editedImage} alt="Thumbnail" />
      <button onClick={openModal}>도면 편집</button>
      <button onClick={deleteImage}>이미지 삭제</button>
    </div>
  );

  return (
    <CS.InputContainer>
      <CS.InputLabel style={{ marginBottom: '4px' }}>
        {label}
        {labelOption}
      </CS.InputLabel>
      <S.ImageEditorContext>
        마커 기능을 사용하여 현장관리를 더 효율적으로 이용할 수 있습니다.
      </S.ImageEditorContext>

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
