import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import * as S from './styles';
import * as CS from '@components/template/styles';
import * as IS from '@components/common/Input/styles';

const DEFECT_ADDITION_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '현장 목록',
    path: '/construction/list',
  },
  {
    title: '하자 체크',
    path: '/construction/detail',
  },
  {
    title: '새 하자 추가',
    path: '',
  },
];

function AddDefect() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  // 한글 글자수 200자 제한
  const watchDefectDescription = watch('defectDescription');
  const maxDefectDescriptionLength = 200;

  const autoResize = (element: EventTarget & HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  const onSubmit = async (data: any) => {
    console.log('하자 추가', data);
  };

  return (
    <S.AddDefectContainer>
      <CS.TemplateTitle>하자 체크</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={DEFECT_ADDITION_NAV} />

      <S.AddDefectForm onSubmit={handleSubmit(onSubmit)}>
        {/* 컨텐츠 */}
        <S.AddDefectContent>
          {/* 캔버스 영역 */}
          <S.CanvasContainer></S.CanvasContainer>

          {/* 인풋 영역  */}
          <S.AddDefectInputContainer>
            {/* 하자 위치 */}
            <Input
              type="text"
              inputType="input"
              label="하자 위치"
              labelOption={<span className="required">*</span>}
              {...register('defectLocation', {
                required: '빈 칸으로 남겨둘 수 없습니다',
              })}
              placeholder="하자 위치(이름)을 입력해 주세요"
              errors={errors}
            />

            {/* 하자 설명 */}
            <Controller
              name="defectDescription"
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <div>
                  <IS.InputLabel>
                    하자 설명
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
          </S.AddDefectInputContainer>
        </S.AddDefectContent>

        {/* 버튼 */}
        <Button
          type="button"
          size="lg"
          className="addDefectButton"
          $styleType={'disabled'}
          $fullWidth={true}
        >
          추가하기
        </Button>
      </S.AddDefectForm>
    </S.AddDefectContainer>
  );
}

export default AddDefect;
