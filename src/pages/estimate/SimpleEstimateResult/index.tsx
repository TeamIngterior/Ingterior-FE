import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageNav from '@/components/common/PageNav';
import Button from '@/components/common/Button';

import * as CS from '@components/template/styles';
import * as S from './styles';
import { useRecoilState } from 'recoil';
import { estimateState } from '@/atom/estimateState';

const ESTIMATE_RESULT_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '인테리어 간편견적',
    path: '',
  },
  {
    title: '인테리어 간편견적 결과',
    path: '',
  },
];

const EstimateOption = [
  {
    title: '기본',
    description:
      '기초적인 공사만 진행합니다. 주로 일반적인 수리나 본인이 살지 않는 전/월세 집의 인테리어할 때의 비용 평균값입니다.',
  },
  {
    title: '보통',
    description:
      '일반적인 본인 주거목적 전체 인테리어할때의 비용 평균값입니다.',
  },
  {
    title: '고급',
    description:
      '하이앤드 디자인 인테리어할 때의 비용 평균값입니다. 구조변경, 자재선택에 따라 비용이 크게 차이납니다.',
  },
];

const EstimateData: { [key: string]: string } = {
  area: '공급 면적',
  sash: '샷시교체',
  balcony: '베란다 확장',
  bathroom: '욕실 갯수',
};

function SimpleEstimateResult() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [estimateData, setEstimateData] = useRecoilState<any>(estimateState);
  const [estimateOption, setEstimateOption] = useState<any>({
    default: '~ 4714',
    normal: '9428',
    high: '9428~',
  });

  useEffect(() => {
    // 견적 옵션 설정
  }, []);

  return (
    <S.SimpleEstimateResultContainer>
      <CS.TemplateTitle>인테리어 간편 견적 결과</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={ESTIMATE_RESULT_NAV} />

      <S.SimpleEstimateContent>
        <S.SimpleEstimateInfoContainer onClick={() => setIsOpen(!isOpen)}>
          {/* 견적 정보  */}
          <S.SimpleEstimateInfoHeader className={isOpen ? 'active' : ''}>
            <span>내 견적 정보</span>
          </S.SimpleEstimateInfoHeader>

          {isOpen && (
            <>
              {/* 견적 상세  */}
              <S.SimpleEstimateInfo>
                {Object.keys(estimateData).map((key) => (
                  <div key={key}>
                    <span>{EstimateData[key]}:</span>
                    <span>&nbsp;{estimateData[key]}</span>
                  </div>
                ))}
              </S.SimpleEstimateInfo>
            </>
          )}
        </S.SimpleEstimateInfoContainer>

        {/* 견적 옵션  */}
        <S.SimpleEstimateResultWrapper>
          {Object.keys(estimateOption).map((key, index) => (
            <S.SimpleEstimateResult key={key}>
              {/* 견적 옵션 헤더 */}
              <S.SimpleEstimateResultHeader>
                {/* 타이틀 */}
                <S.SimpleEstimateResultHeading>
                  {EstimateOption[index].title}
                </S.SimpleEstimateResultHeading>
                {/* 설명 */}
                <S.SimpleEstimateResultDescribe>
                  {EstimateOption[index].description}
                </S.SimpleEstimateResultDescribe>
              </S.SimpleEstimateResultHeader>

              {/* 단위 */}
              <S.SimpleEstimateResultPrice>
                <p>{estimateOption[key]}</p>
                <S.SimpleEstimateResultUnit>만원</S.SimpleEstimateResultUnit>
              </S.SimpleEstimateResultPrice>

              {index == Object.keys(estimateOption).length - 1 && (
                <S.SimpleEstimateGuide>
                  위 금액은 서울, 수도권 기준 금액의 평균가 입니다. 참고로
                  활용하시되 정확한 견적은 업체 별 다를 수 있습니다.
                </S.SimpleEstimateGuide>
              )}
            </S.SimpleEstimateResult>
          ))}
        </S.SimpleEstimateResultWrapper>

        {/* 제출 버튼 */}
        <S.SimpleEstimateButtonContainer>
          <p>로그인하고 세부 항목 별 견적을 확인해 보세요!</p>
          <Button onClickHandler={() => navigate('/signin')} $fullWidth>
            로그인
          </Button>
        </S.SimpleEstimateButtonContainer>
      </S.SimpleEstimateContent>
    </S.SimpleEstimateResultContainer>
  );
}

export default SimpleEstimateResult;
