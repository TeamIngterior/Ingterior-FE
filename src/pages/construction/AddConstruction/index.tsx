import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { useModal } from '@/hooks/useModal';

import { IoMdCheckmark } from 'react-icons/io';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Checkbox from '@/components/common/Checkbox';
import Button from '@/components/common/Button';
import AddConstructionImage from '@/components/modal/construction/AddConstructionImage';
import MultiUploader from '@/components/common/FileUploader/MultiUploader';

import * as S from './styles';
import * as CS from '@components/template/styles';

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
  const { openModal } = useModal('addConstructionImage');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    console.log('새 현장 추가', data);
  };

  useEffect(() => {
    openModal();
  }, []);

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
            name="constructionType"
            control={control}
            render={({ field: { onChange } }) => (
              <Checkbox
                label="현장의 유형을 선택해주세요."
                labelOption={
                  <>
                    <span className="required">*</span>&nbsp;
                    <span className="subLabel">다중선택가능</span>
                  </>
                }
                name="constructionType"
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
          <MultiUploader onSelectItem={(files) => setSelectedFiles(files)} />

          {/* 제출 버튼 */}
          <Button
            $styleType={
              watch('constructionName') && watch('constructionType')
                ? 'solid'
                : 'disabled'
            }
            $fullWidth={true}
          >
            새 현장 추가하기
          </Button>
        </S.AddConstructionForm>
      </S.AddConstructionContainer>

      {/* 현장 도면 이미지 업로드 모달 */}
      <AddConstructionImage />
    </>
  );
}

export default AddConstruction;
