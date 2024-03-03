import PageNav from '@/components/common/PageNav';
import * as S from './styles';
import * as CS from '@components/template/styles';
import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import { FiPlus } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import ConstructionListCard from '@/components/construction/list/ConstructionListCard';

const DETAIL_CONSTRUCTION_NAV = [
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
];

const DETAIL_CONSTRUCTION_TAB = [
  {
    title: '하자체크',
    key: 'defect',
  },
  {
    title: '공사관리',
    key: 'manage',
  },
];

function DetailConstruction() {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const navigate = useNavigate();

  // 탭 상태 : defect - 하자 체크(default), manage - 공사 관리
  const [selectedTab, setSelectedTab] = useState<string>('defect');
  const defectList = [];

  useEffect(() => {
    console.log('하자 체크 페이지');
  }, []);

  return (
    <S.DetailConstructionContainer>
      <CS.TemplateTitle>하자 체크</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav
        navList={
          selectedTab === 'defect'
            ? DETAIL_CONSTRUCTION_NAV
            : DETAIL_CONSTRUCTION_NAV.map((nav, index) =>
                index === 2 ? { ...nav, title: '공사관리' } : nav
              )
        }
      />

      <S.DetailConstructionContentContainer>
        {/* 탭 */}
        <S.DetailConstructionTabContainer>
          {DETAIL_CONSTRUCTION_TAB.map((tab, index) => (
            <S.DetailConstructionTab
              key={index}
              className={selectedTab === tab.key ? 'active' : ''}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.title}
            </S.DetailConstructionTab>
          ))}
        </S.DetailConstructionTabContainer>

        {/* 컨텐츠 */}
        <S.DetailConstructionContent>
          {selectedTab === 'defect' ? (
            <>
              {/* 버튼 */}
              <S.DetailConstructionFunctionContainer>
                <Button
                  type="button"
                  size="md"
                  className="addDefectButton"
                  onClickHandler={() =>
                    navigate(`/construction/defect/addition/${id}`)
                  }
                >
                  <FiPlus />새 하자 추가
                </Button>
              </S.DetailConstructionFunctionContainer>

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
                <S.DetailConstructionInfoTitle>
                  현장 정보
                </S.DetailConstructionInfoTitle>

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

                {/* 하자 체크 리스트 다운 / 현장 메세지 바로가기 / 현장 나가기 버튼 */}
                <S.DetailConstructionButtonContainer>
                  <Button type="button" $styleType="revert" $fullWidth={true}>
                    하자체크 리스트 다운받기
                  </Button>
                  <Button type="button" $styleType="revert" $fullWidth={true}>
                    현장 메세지 바로가기
                  </Button>
                  <Button type="button" $styleType="revert" $fullWidth={true}>
                    현장 나가기
                  </Button>
                </S.DetailConstructionButtonContainer>
              </S.DetailConstructionInfoContainer>
            </>
          ) : null}
        </S.DetailConstructionContent>
      </S.DetailConstructionContentContainer>
    </S.DetailConstructionContainer>
  );
}

export default DetailConstruction;
