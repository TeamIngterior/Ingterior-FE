import { useNavigate } from 'react-router-dom';

import GooglePlayIcon from '@assets/main/googlePlaybutton.svg?react';
import EstimateImage from '@assets/main/estimate.svg?react';
import DefactImage from '@assets/main/defact.svg?react';
import ManagementImage from '@assets/main/management.svg?react';
import Button from '@/components/common/Button';

import * as S from './styles';

function Home() {
  const navigate = useNavigate();

  return (
    <S.HomeContainer>
      {/* 메인 영역  */}
      <S.HomeSection className="main">
        <S.HomeMainDescription>
          내손안의 모든 잉(Ing)테리어
        </S.HomeMainDescription>
        <S.HomeMainTitle>
          인테리어 공사관리를 한눈에
          <br />
          빠르고 쉬운 간편견적 까지!
        </S.HomeMainTitle>
        <GooglePlayIcon />
      </S.HomeSection>

      {/* 간편 견적 */}
      <S.HomeSection className="simpleEstimate">
        <S.HomeSectionInner>
          {/* 이미지 영역*/}
          <EstimateImage />

          {/* 설명 영역  */}
          <S.HomeSectionContent>
            <S.HomeSectionLabel>인테리어 간편견적</S.HomeSectionLabel>
            <S.HomeSectionTitle>
              30초면 뚝딱! 무료로 알아보는
              <br />
              우리집 인테리어 리모델링 간편견적
            </S.HomeSectionTitle>
            <S.HomeSectionDescription>
              인테리어 디자이너 5인의 3년간 실제 공사한 현장의 평균견적을 토대로{' '}
              <br /> 우리집 인테리어 비용을 대략적으로 알 수 있어요
            </S.HomeSectionDescription>

            <Button
              type="button"
              className="mainLandingButton"
              onClickHandler={() => navigate('/estimate/simple-estimate')}
            >
              간편견적 바로가기
            </Button>
          </S.HomeSectionContent>
        </S.HomeSectionInner>
      </S.HomeSection>

      {/* 하자 관리 */}
      <S.HomeSection className="defact">
        <S.HomeSectionInner>
          {/* 설명 영역  */}
          <S.HomeSectionContent>
            <S.HomeSectionLabel>하자체크</S.HomeSectionLabel>
            <S.HomeSectionTitle>
              하자의 위치와 내용을 정리하고 공유하여
              <br />
              분쟁을 사전에 방지하세요
            </S.HomeSectionTitle>
            <S.HomeSectionDescription>
              하자의 위치를 사진 또는 도면에 마킹하고 메모하세요.
              <br />
              간편하게 하자를 기록하고 공유할 수 있어요.
            </S.HomeSectionDescription>

            <Button
              type="button"
              className="mainLandingButton"
              onClickHandler={() => navigate('/construction/list')}
            >
              하자체크 바로가기
            </Button>
          </S.HomeSectionContent>

          {/* 이미지 영역*/}
          <DefactImage />
        </S.HomeSectionInner>
      </S.HomeSection>

      {/* 공사 관리 */}
      <S.HomeSection>
        <S.HomeSectionInner>
          {/* 이미지 영역*/}
          <ManagementImage />

          {/* 설명 영역  */}
          <S.HomeSectionContent>
            <S.HomeSectionLabel>공사관리</S.HomeSectionLabel>
            <S.HomeSectionTitle>
              수많은 인테리어 공사현장
              <br />
              잉테리어로 쉽고 빠르게 관리해요
            </S.HomeSectionTitle>
            <S.HomeSectionDescription>
              리모델링 현장의 효율적인 관리를 위해 공사현장 폴더를 생성하고,
              <br />
              캘린더에 작업 일정을 기록하여 고객들과 리모델링 정보를 공유 할 수
              있어요
            </S.HomeSectionDescription>

            <Button
              type="button"
              className="mainLandingButton"
              onClickHandler={() => navigate('/construction/list')}
            >
              공사관리 바로가기
            </Button>
          </S.HomeSectionContent>
        </S.HomeSectionInner>
      </S.HomeSection>
    </S.HomeContainer>
  );
}

export default Home;
