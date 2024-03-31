import { useForm } from 'react-hook-form';

import {
  SASH_OPTIONS,
  BALCONY_OPTIONS,
  BATHROOM_OPTIONS,
} from '@/constants/estimateOption';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Radiobox from '@/components/common/Radiobox';
import Button from '@/components/common/Button';

import * as CS from '@components/template/styles';
import * as S from './styles';

const ESTIMATE_LINK = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '인테리어 간편견적',
    path: '',
  },
];

function SimpleEstimate() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    console.log('새 현장 추가', data);
  };

  console.log(watch());

  return (
    <S.SimpleEstimateContainer>
      <CS.TemplateTitle>인테리어 간편견적</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={ESTIMATE_LINK} />

      <S.SimpleEstimateForm onSubmit={handleSubmit(onSubmit)}>
        {/* 공급가액 */}
        <Input
          type="text"
          inputType="input"
          label="공급면적"
          labelOption={<span className="required">*</span>}
          {...register('area', {
            required: true,
          })}
          placeholder="공급면적을 입력해주세요. (Ex 112㎡)"
          errors={errors}
        />

        {/* 샷시 교체 */}
        <Radiobox
          label="샷시 교체"
          labelOption={<span className="required">*</span>}
          control={control}
          options={SASH_OPTIONS}
          {...register('sash', {
            required: true,
          })}
        />

        {/* 발코니 확장 */}
        <Radiobox
          label="발코니 확장"
          labelOption={<span className="required">*</span>}
          control={control}
          options={BALCONY_OPTIONS}
          {...register('balcony', {
            required: true,
          })}
        />

        {/* 욕실 갯수 */}
        <Radiobox
          label="욕실 갯수"
          labelOption={<span className="required">*</span>}
          control={control}
          options={BATHROOM_OPTIONS}
          {...register('bathroom', {
            required: true,
          })}
        />

        {/* 제출 버튼 */}
        <Button $styleType={isValid ? 'solid' : 'disabled'} $fullWidth>
          간편 견적 보기
        </Button>
      </S.SimpleEstimateForm>
    </S.SimpleEstimateContainer>
  );
}

export default SimpleEstimate;
