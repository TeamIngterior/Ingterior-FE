import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import * as S from './styles';
import * as CS from '@components/template/styles';
import * as CRS from '@/components/construction/ColorRadio/styles';
import * as IS from '@components/common/Input/styles';
import * as IES from '@components/common/FileUploader/ImageEditor/styles';

import { RiPencilLine } from 'react-icons/ri';
import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import ColorRadio from '@/components/construction/ColorRadio';
import MultiUploader from '@/components/common/FileUploader/MultiUploader';
import Button from '@/components/common/Button';
import DateInput from '@/components/common/DateInput';

const ADD_WORK_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '현장 목록',
    path: '/construction/list',
  },
  {
    title: '공사관리',
    path: '/construction/add',
  },
  {
    title: '새 공사 추가',
    path: '',
  },
];

const colors = [
  '#FBD2DF',
  '#FFE5DC',
  '#F6DFB7',
  '#D6F2D6',
  '#BCE3E1',
  '#DEE9DE',
  '#E2F0FA',
  '#CDD9F1',
  '#E1DCE4',
  '#F1DDF6',
];

function AddWork() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  // 한글 글자수 200자 제한
  const maxDefectDescriptionLength = 200;
  const autoResize = (element: EventTarget & HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  const handleFormKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

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
    <S.AddWorkContainer className="addWork">
      <CS.TemplateTitle>새 공사 추가</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={ADD_WORK_NAV} />

      {/* 공사 폼 */}
      <S.AddWorkForm
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleFormKeyPress}
      >
        {/* 현장 도면 이미지 */}
        <div>
          <IS.InputLabel>
            현장 도면 이미지
            <span className="subLabel">&nbsp;&#40;선택&#41;</span>
            <p className="subLabel" style={{ marginTop: '4px' }}>
              현장 도면 이미지를 참고하여 더 체계적인 공사관리를 하세요.
            </p>
          </IS.InputLabel>

          <div style={{ marginBottom: '16px' }}>
            <img src="https://via.placeholder.com/588" alt="" />
          </div>

          <Button
            size="lg"
            $fullWidth={true}
            $styleType="revert"
            icon={<RiPencilLine />}
            style={{
              marginBottom: '16px',
            }}
            onClickHandler={() => {
              console.log('도면 편집 버튼 클릭');
            }}
          >
            도면 이미지 변경하기
          </Button>
        </div>

        {/* 공사 현장 이름 */}
        <Input
          type="text"
          inputType="input"
          label="공사 현장 이름"
          labelOption={<span className="required">*</span>}
          {...register('constructionName')}
          placeholder="공사 현장 이름을 입력해 주세요"
          errors={errors}
        />

        {/* 폴더 색 선택 */}
        <Controller
          name="folderColor"
          control={control}
          render={({ field }) => (
            <div>
              {/* 타이틀 */}
              <CRS.ColorRadioTitleContainer>
                <CRS.ColorRadioTitle>
                  폴더 색 선택<span className="required">*</span>
                </CRS.ColorRadioTitle>
              </CRS.ColorRadioTitleContainer>
              {/* 색 그룹  */}
              <CRS.ColorRadioGroup>
                {colors.map((color) => (
                  <ColorRadio
                    key={color}
                    value={color}
                    onChange={() => field.onChange(color)}
                    checked={field.value === color}
                  />
                ))}
              </CRS.ColorRadioGroup>
            </div>
          )}
        />

        {/* 공사 설명 */}
        <Controller
          name="constructionDescription"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <div>
              <IS.InputLabel>
                공사 설명
                <span className="subLabel">
                  &nbsp;&#40;선택 / 최대 200자 까지 &#41;
                </span>
              </IS.InputLabel>
              <IS.Textarea
                {...field}
                className="valiableHeight"
                spellCheck="false"
                autoComplete="off"
                placeholder="하자 설명을 입력해 주세요"
                onChange={(e) => {
                  if (e.target.value.length <= maxDefectDescriptionLength) {
                    field.onChange(e);
                    autoResize(e.target);
                  }
                }}
              />
              {error && (
                <IS.InputErrorMessage>
                  {error.message === 'maxLength'
                    ? error.message
                    : '빈 칸으로 남겨둘 수 없습니다'}
                </IS.InputErrorMessage>
              )}
            </div>
          )}
        />

        {/* 일정 선택 */}
        <DateInput
          control={control}
          name={'constructionDate'}
          label={'일정 선택'}
          errors={errors}
        ></DateInput>

        {/* 공사 참고 이미지  */}
        <Controller
          name="constructionImage"
          control={control}
          render={({ field: { onChange } }) => (
            <div>
              <IS.InputLabel>
                공사 참고 이미지 추가하기
                <span className="subLabel">&nbsp;&#40;선택&#41;</span>
              </IS.InputLabel>
              <MultiUploader
                onSelectItem={(files) => {
                  setSelectedFiles(files);
                  onChange(files);
                }}
              />
              <IES.ImageEditorContext className="detail">
                &#8211;&nbsp;최대 8장까지 추가 가능합니다.
                <br />
                &#8211;&nbsp;파일 형식은 Jpg, Jpeg, Png만 가능합니다.
                <br />
                &#8211;&nbsp;최대 5MB까지 업로드 가능합니다.
              </IES.ImageEditorContext>
            </div>
          )}
        />

        {/* 제출 버튼 */}
        <Button $styleType={'disabled'} $fullWidth={true}>
          추가하기
        </Button>
      </S.AddWorkForm>
    </S.AddWorkContainer>
  );
}

export default AddWork;
