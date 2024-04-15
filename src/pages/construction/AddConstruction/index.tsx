import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

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
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploaedFiles, setUploadedFiles] = useState<any>([]);

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

  // 디버깅용 코드
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

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
          <Controller
            name="constructionImage"
            control={control}
            render={({ field: { onChange } }) => (
              <ImageEditor
                label="현장 도면 이미지를 업로드해주세요."
                labelOption={
                  <>
                    <span className="subLabel">&nbsp;&#40;선택&#41;</span>
                  </>
                }
                isEditor={false}
              />
            )}
          />

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
      <EditConstructionImage />
    </>
  );
}

export default AddConstruction;
