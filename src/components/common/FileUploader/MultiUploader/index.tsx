import { useEffect, useState } from 'react';
import * as S from './styles';

import { AiOutlineClose } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';

interface MultiUploaderProps {
  storedImageList?: string[];
  handleStoredImageList?: (imageList: string[]) => void;
  onAlertMessage?: (message: any) => void;
  onSelectItem: (files: File[]) => void;
}

function MultiUploader({
  storedImageList,
  handleStoredImageList,
  onAlertMessage,
  onSelectItem,
}: MultiUploaderProps) {
  const MAX_REGISTER_IMAGE_COUNT = 8; //최대 이미지 등록 개수
  const [imageList, setImageList] = useState<File[]>([]); //이미지 리스트

  const storedLength = storedImageList ? storedImageList.length : 0;
  const totalImageCount =
    storedLength !== undefined
      ? storedLength + imageList.length
      : imageList.length;

  // 디버깅용 코드
  useEffect(() => {
    if (storedImageList) {
      console.log('storedImageList', storedImageList);
    }
  }, [storedImageList]);

  // 상위 컴포넌트(이미지와 폼 데이터를 함께 보내는 컴포넌트)에 이미지 리스트를 전달
  useEffect(() => {
    onSelectItem(imageList);
  }, [imageList]);

  // 수정 페이지에서는 기존에 등록된 이미지를 보여줘야 하기 때문에 props가 존재하면, 이미지 리스트에 추가
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;

    if (!files) return;

    // MAX_RESISTER_IMAGE_COUNT 개수를 초과하면, 이미지 등록 불가
    if (files.length + totalImageCount > MAX_REGISTER_IMAGE_COUNT) {
      alert('최대 이미지 등록 개수를 초과하였습니다.');
      return;
    }

    // 이미지 압축 라이브러리
    // ...

    // 여러 파일 올릴 때, 파일 정보를 imageList에 저장
    setImageList([...imageList, ...files]);
  };

  const onClickFileDelete = (file: File) => {
    const filteredImageList = imageList.filter((image) => image !== file);
    setImageList(filteredImageList);
  };

  return (
    <S.FileUploaderContainer>
      {/* 파일 썸네일 컨테이너 */}
      {storedImageList &&
        storedImageList.length > 0 &&
        storedImageList.map((file, index) => (
          <S.ThumbnailContainer key={index}>
            {/* 파일 썸네일 */}
            <img src={file} />

            {/* 파일 삭제 버튼 */}
            <S.DeleteRegisterImageButton
              type="button"
              onClick={() => {
                handleStoredImageList &&
                  handleStoredImageList(
                    storedImageList.filter((image) => image !== file)
                  );
              }}
            >
              <AiOutlineClose />
            </S.DeleteRegisterImageButton>
          </S.ThumbnailContainer>
        ))}

      {/* 이미지 썸네일 리스트 */}
      {imageList.map((file, index) => (
        <S.ThumbnailContainer key={index}>
          {/* 파일 썸네일 */}
          <img src={URL.createObjectURL(file)} />

          {/* 파일 삭제 버튼 */}
          <S.DeleteRegisterImageButton
            type="button"
            onClick={() => onClickFileDelete(file)}
          >
            <AiOutlineClose />
          </S.DeleteRegisterImageButton>
        </S.ThumbnailContainer>
      ))}

      {/* 파일 업로드 컨테이너 */}
      <S.FileUploaderWrapper>
        {/* 안내 메세지 */}
        <S.FileUploaderGuideText>
          <MdAdd />
          <p>이미지 추가하기</p>
        </S.FileUploaderGuideText>

        {/* 파일 업로드 Input */}
        <S.FileUploaderLabel>
          <S.FileUploaderInput
            type="file"
            accept="image/*"
            onChange={(event) => handleFileUpload(event)}
            multiple
          />
        </S.FileUploaderLabel>
      </S.FileUploaderWrapper>
    </S.FileUploaderContainer>
  );
}

export default MultiUploader;
