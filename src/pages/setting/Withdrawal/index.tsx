import { Controller, useForm } from 'react-hook-form';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';

import * as CS from '@/components/template/styles';
import * as S from './styles';
import Button from '@/components/common/Button';
import AgreementBox from '@/components/setting/AgreementBox';

// TODO : NAV 리팩토링
const WITHDRAWAL_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '설정',
    path: '/setting',
  },
  {
    title: '회원 탈퇴',
    path: '',
  },
];

function Withdrawal() {
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

  const onSubmit = async (data: any) => {
    console.log('새 현장 추가', data);
  };

  return (
    <S.WithdrawalContainer>
      <CS.TemplateTitle>회원 탈퇴</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={WITHDRAWAL_NAV} />

      <S.WithdrawalForm onSubmit={handleSubmit(onSubmit)}>
        {/* 회원 탈퇴 사유 */}
        <Input
          type="text"
          inputType="input"
          label="회원 탈퇴 사유"
          labelOption={<span className="required">*</span>}
          {...register('reason', { required: true })}
          placeholder="회원탈퇴 사유를 입력해 주세요"
          errors={errors}
        />

        <Controller
          name="agreement"
          control={control}
          render={({ field: { onChange } }) => (
            <AgreementBox
              title="유의사항"
              content={
                <>
                  <p>
                    -회원탈퇴 처리 후에는 회원님의 개인정보를 복원할 수 없으며,
                    해당 아이디는 영구적으로 삭제되어 재가입이 불가합니다.
                    <br />
                    -유료로 구매한 상품 정보가 삭제되며 복구가 불가능합니다.
                    <br />
                    -구독서비스의 경우 회원탈퇴 해당 월 까지 결제되며, 이 후
                    자동해지됩니다.
                  </p>
                </>
              }
              agreementContext="해당 내용을 모두 확인했으며, 회원탈퇴에 동의합니다."
              onChange={onChange}
            />
          )}
        />

        <Button
          style={{
            marginTop: '164px',
          }}
          $styleType={isValid !== false ? 'solid' : 'disabled'}
          $fullWidth
        >
          회원 탈퇴
        </Button>
      </S.WithdrawalForm>
    </S.WithdrawalContainer>
  );
}

export default Withdrawal;
