import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useRecoilState } from 'recoil';
import { estimateState } from '@/atom/estimateState';

import { useModal } from '@/hooks/useModal';

import {
  SASH_OPTIONS,
  BALCONY_OPTIONS,
  BATHROOM_OPTIONS,
} from '@/constants/estimateOption';

import { FiInfo } from 'react-icons/fi';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Radiobox from '@/components/common/Radiobox';
import Button from '@/components/common/Button';

import * as CS from '@components/template/styles';
import * as S from './styles';

import EstimateTip from '@/components/modal/EstimateTip';

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
  const theme = useTheme();
  const navigate = useNavigate();
  const { openModal } = useModal('estimateTip');
  const [estimateData, setEstimateData] = useRecoilState(estimateState);

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
    setEstimateData({
      ...estimateData,
      area: data.area,
      sash: data.sash,
      balcony: data.balcony,
      bathroom: data.bathroom,
    });

    navigate('/estimate/simple-estimate/result');
  };

  console.log(watch());

  return (
    <>
      <S.SimpleEstimateContainer>
        <CS.TemplateTitle>인테리어 간편견적</CS.TemplateTitle>

        {/* 페이지 네비게이션 */}
        <PageNav navList={ESTIMATE_LINK} />

        <S.SimpleEstimateForm onSubmit={handleSubmit(onSubmit)}>
          {/* 공급가액 */}
          <S.SimpleEstimateTip>
            <Input
              type="number"
              inputType="input"
              label="공급면적"
              labelOption={<span className="required">*</span>}
              $isHorizontal={true}
              {...register('area', {
                required: true,
              })}
              placeholder="공급면적을 입력해주세요. (Ex 112㎡)"
              errors={errors}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignSelf: 'center',
                  paddingRight: '16px',
                  color: `${theme.color.gray04}`,
                }}
              >
                ㎡
              </span>
            </Input>
            <FiInfo className="infoIcon" onClick={openModal} />
          </S.SimpleEstimateTip>

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
      {/* 팁 모달 */}
      <EstimateTip />
    </>
  );
}

export default SimpleEstimate;
