import PageNav from '@/components/common/PageNav';

import * as CS from '@/components/template/styles';
import * as IS from '@components/common/Input/styles';
import * as S from './styles';
import Input from '@/components/common/Input';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import CkeckOption from '@/components/common/CheckOption';
import CheckOption from '@/components/common/CheckOption';
import { useEffect } from 'react';

const CONTACT_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '설정',
    path: '/setting',
  },
  {
    title: '개발자에게 문의하기',
    path: '',
  },
];

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const maxDefectDescriptionLength = 200;

  const autoResize = (element: EventTarget & HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  const handleFormKeyPress = (event: any) => {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
      event.preventDefault();
    }
    trigger();
  };

  const onSubmit = async (data: any) => {
    console.log('새 현장 추가', data);
  };

  console.log(watch('agreement'));

  return (
    <S.ContactContainer className="setting">
      <CS.TemplateTitle>개발자에게 문의하기</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={CONTACT_NAV} />

      <S.ContactForm
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleFormKeyPress}
      >
        {/* 이메일 주소 */}
        <Input
          type="text"
          inputType="input"
          label="이메일 주소"
          labelOption={<span className="required">*</span>}
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
          placeholder="답변받을 이메일을 입력해 주세요"
          errors={errors}
        />

        {/* 문의 제목 */}
        <Input
          type="text"
          inputType="input"
          label="문의 제목"
          labelOption={<span className="required">*</span>}
          {...register('title', { required: true })}
          placeholder="문의 제목을 입력해 주세요"
          errors={errors}
        />

        {/* 문의 내용 */}
        <Controller
          name="content"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: 1,
            maxLength: maxDefectDescriptionLength,
          }}
          render={({ field, fieldState: { error } }) => (
            <div>
              <IS.InputLabel>
                문의 내용
                <span className="required">*</span>
                <span className="subLabel">
                  &nbsp;&#40;최대 200자 까지 &#41;
                </span>
              </IS.InputLabel>
              <IS.Textarea
                {...field}
                className="valiableHeight"
                spellCheck="false"
                autoComplete="off"
                placeholder="문의 내용을 입력해 주세요"
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

        {/* 개인 정보 수집 및 이용 동의  */}
        <Controller
          name="agreement"
          control={control}
          render={({ field: { onChange } }) => (
            <S.AgreementContainer>
              <S.AgreementTitle>개인정보 수집 및 이용 동의</S.AgreementTitle>
              <S.AgreementContent>
                저메이킷&#40;jum8kit&#41;에서는 문의처리를 위해 이메일주소와
                내용을 수집하며, 전자상거래법에 따라 3년 보관 후 파기합니다.
                동의 거부 시 문의에 제한이 있을 수 있습니다.
              </S.AgreementContent>
              <S.AgreementCheck>
                <CheckOption
                  onSelectedOption={(option: any) => onChange(option)}
                />
                <p>개인정보 수집 및 이용에 동의 합니다.</p>
              </S.AgreementCheck>
            </S.AgreementContainer>
          )}
        />

        <Button
          $styleType={
            isValid && watch('agreement') !== false ? 'solid' : 'disabled'
          }
          $fullWidth
        >
          문의하기
        </Button>
      </S.ContactForm>
    </S.ContactContainer>
  );
}

export default Contact;
