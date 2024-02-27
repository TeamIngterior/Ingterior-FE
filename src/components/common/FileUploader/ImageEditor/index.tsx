import { useImageEdit } from '@/hooks/useImageEdit';

function ImageEditor({
  onImageChange,
  isEditor,
}: {
  onImageChange: (editedImage: string) => void;
  isEditor?: boolean;
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
      <button onClick={changeImage}>Change Image</button>
    </div>
  );

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>이미지 드래그 앤 드랍 영역</p>
      </div>
      {image && <>{isEditor ? renderEditorButtons() : renderImageView()}</>}
    </div>
  );
}

export default ImageEditor;
