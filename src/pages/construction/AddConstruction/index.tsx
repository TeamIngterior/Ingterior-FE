import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';

import { useConstruction } from '@/hooks/page/useContruction';
import { useModal } from '@/hooks/useModal';

import { IoMdCheckmark } from 'react-icons/io';
import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Checkbox from '@/components/common/Checkbox';
import Button from '@/components/common/Button';
import EditConstructionImage from '@/components/modal/construction/EditConstructionImage';

import * as S from './styles';
import * as CS from '@components/template/styles';
import ImageEditor from '@/components/common/FileUploader/ImageEditor';

const ADD_CONSTRUCTION_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '현장 목록',
    path: '/construction/list',
  },
  {
    title: '새 현장 추가',
    path: '/construction/add',
  },
];

function AddConstruction() {
  const navigate = useNavigate();
  const { handleFormSubmit, handleImageUpload } = useConstruction();
  const [selectedFiles, setSelectedFiles] = useState<any>();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const handleSelectedFiles = (fileData: string) => {
    try {
      // TODO : 111 을 memberId로 변경
      const fileName = `${new Date().getTime()}${111}`;

      // MIME 타입 및 base64 데이터 추출
      const matches = fileData.match(/^data:(.*);base64,(.*)$/);
      if (!matches || matches.length !== 3) {
        throw new Error('올바른 파일 형식이 아닙니다.');
      }

      const mimeType = matches[1];
      const base64Data = matches[2];
      const bytes = atob(base64Data);
      const byteNumbers = new Array(bytes.length);

      for (let i = 0; i < bytes.length; i++) {
        byteNumbers[i] = bytes.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });

      const file = new File([blob], fileName + '.' + mimeType.split('/')[1], {
        type: mimeType,
      });

      setSelectedFiles(file);
    } catch (error) {
      console.error('base64 파일 변환을 실패했습니다:', error);
    }
  };

  const onSubmit = async (data: any) => {
    console.log('새 현장 추가', data);

    const constructionName = data.constructionName;
    const usage = data.usage.length > 1 ? '0' : '1';

    const response = await handleFormSubmit({ constructionName, usage });

    console.log('응답값', response);

    if (selectedFiles) {
      handleImageUpload(selectedFiles);
    }

    // navigate('/construction/list');
  };

  // 디버깅용 코드
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    console.log('selectedFiles:', selectedFiles);
  }, [selectedFiles]);

  return (
    <>
      <S.AddConstructionContainer className="addConstructionContainer">
        <CS.TemplateTitle>새 현장 추가</CS.TemplateTitle>

        {/* 페이지 네비게이션 */}
        <PageNav navList={ADD_CONSTRUCTION_NAV} />

        <S.AddConstructionForm onSubmit={handleSubmit(onSubmit)}>
          {/* 현장 주소 */}
          <Input
            type="text"
            inputType="input"
            label="현장 주소(이름)를 입력해 주세요."
            labelOption={<span className="required">*</span>}
            {...register('constructionName')}
            placeholder="공백 포함 최대 00자"
            errors={errors}
          />

          {/* 현장 유형 */}
          <Controller
            name="usage"
            control={control}
            render={({ field: { onChange } }) => (
              <Checkbox
                label="현장의 유형을 선택해주세요."
                style={{ border: 'none' }}
                labelOption={
                  <>
                    <span className="required">*</span>&nbsp;
                    <span className="subLabel">다중선택가능</span>
                  </>
                }
                name="usage"
                options={[
                  {
                    id: 'constructionType1',
                    icon: <IoMdCheckmark />,
                    text: '하자체크',
                  },
                  {
                    id: 'constructionType2',
                    icon: <IoMdCheckmark />,
                    text: '공사관리',
                  },
                ]}
                onSelectedOption={(option: any) => onChange(option)}
                errors={errors}
              />
            )}
          />

          {/* 현장 도면 이미지 */}
          <ImageEditor
            label="현장 도면 이미지를 업로드해주세요."
            onSelectedFiles={(files: any) => {
              handleSelectedFiles(files);
            }}
            labelOption={
              <>
                <span className="subLabel">&nbsp;&#40;선택&#41;</span>
              </>
            }
            isEditor={false}
          />

          {/* 제출 버튼 */}
          <Button
            $styleType={
              watch('constructionName') && watch('usage') ? 'solid' : 'disabled'
            }
            $fullWidth={true}
          >
            새 현장 추가하기
          </Button>
        </S.AddConstructionForm>
      </S.AddConstructionContainer>

      {/* 현장 도면 이미지 업로드 모달 */}
      <EditConstructionImage />
    </>
  );
}

export default AddConstruction;
