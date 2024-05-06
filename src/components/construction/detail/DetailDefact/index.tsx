import { useLocation, useNavigate } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import ConstructionListCard from '@/components/construction/list/ConstructionListCard';
import Button from '@/components/common/Button';

import * as CS from '../styles';
import * as S from './styles';

// TODO : Type 정의 필요
function DetailDefact({ detailData }: { detailData: any }) {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const navigate = useNavigate();

  const defectList = [];

  return (
    <CS.DetailContent>
      {/* 버튼 */}
      <CS.DetailConstructionFunctionContainer>
        <Button
          type="button"
          size="md"
          className="addDefectButton"
          onClickHandler={() => navigate(`/construction/defect/addition/${id}`)}
        >
          <FiPlus />새 하자 추가
        </Button>
      </CS.DetailConstructionFunctionContainer>

      {/* 캔버스 영역 */}
      <S.CanvasContainer>
        <img src={detailData?.drawingImageUrl} alt="도면 이미지" />
      </S.CanvasContainer>

      {/* 하자 리스트 */}
      <S.DefectListContainer>
        {defectList.length !== 0 ? (
          <></>
        ) : (
          <S.NoDefectContainer
            onClick={() => navigate(`/construction/defect/addition/${id}`)}
          >
            새로운 하자를 추가해 보세요!
          </S.NoDefectContainer>
        )}
      </S.DefectListContainer>

      {/* 현장 정보 */}
      <S.DetailConstructionInfoContainer>
        <S.DetailConstructionInfoTitle>현장 정보</S.DetailConstructionInfoTitle>

        {/* 현장 정보 카드 */}
        <ConstructionListCard type="card" cardData={detailData} />

        {/* 참여자 목록 */}
        <S.DetailConstructionMebmerContainer>
          <S.MemberListHeader>현장 참여자</S.MemberListHeader>

          <S.MemberList>
            {/* 프로필 이미지  */}
            {detailData?.memberThumnails?.map((info: any, index: number) => (
              <S.MemberListItem>
                <S.MemberProfileImage key={index}>
                  <img src={info?.imgUrl[index]} alt="프로필 이미지" />
                </S.MemberProfileImage>

                {/* 참여자 정보 */}
                {detailData?.memberCode}
              </S.MemberListItem>
            ))}
          </S.MemberList>
        </S.DetailConstructionMebmerContainer>
      </S.DetailConstructionInfoContainer>
    </CS.DetailContent>
  );
}

export default DetailDefact;
