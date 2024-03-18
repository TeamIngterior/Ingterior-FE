import { useLocation, useNavigate } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import ConstructionListCard from '@/components/construction/list/ConstructionListCard';
import Button from '@/components/common/Button';

import * as CS from '../styles';
import * as S from './styles';

function DetailDefact() {
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
      <S.CanvasContainer></S.CanvasContainer>

      {/* 하자 리스트 */}
      <S.DefectListContainer>
        {defectList.length !== 0 ? (
          <></>
        ) : (
          <S.NoDefectContainer>
            새로운 하자를 추가해 보세요!
          </S.NoDefectContainer>
        )}
      </S.DefectListContainer>

      {/* 현장 정보 */}
      <S.DetailConstructionInfoContainer>
        <S.DetailConstructionInfoTitle>현장 정보</S.DetailConstructionInfoTitle>

        {/* 현장 정보 카드 */}
        <ConstructionListCard
          type="card"
          cardData={{
            id: 1,
            title: '현장명',
            category: ['카테고리1', '카테고리2'],
            isOwner: true,
            user: {
              profileImg: 'https://via.placeholder.com/150',
              usercode: 'usercode',
            },
            constructionSiteCode: 'code',
            createdAt: '2024-03-01',
          }}
        />

        {/* 참여자 목록 */}
        <S.DetailConstructionMebmerContainer>
          <S.MemberListHeader>현장 참여자</S.MemberListHeader>

          <S.MemberList>
            <S.MemberListItem>
              {/* 프로필 이미지  */}
              <S.MemberProfileImage>
                <img
                  src="https://via.placeholder.com/150"
                  alt="프로필 이미지"
                />
              </S.MemberProfileImage>
              {/* 참여자 정보 */}
              1GA001
            </S.MemberListItem>
          </S.MemberList>
        </S.DetailConstructionMebmerContainer>
      </S.DetailConstructionInfoContainer>
    </CS.DetailContent>
  );
}

export default DetailDefact;
