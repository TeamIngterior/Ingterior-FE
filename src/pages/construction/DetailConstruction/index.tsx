import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useConstruction } from '@/hooks/page/useContruction';

import PageNav from '@/components/common/PageNav';

import * as S from './styles';
import * as CS from '@components/template/styles';
import * as DS from '@components/construction/detail/DetailManage/styles';
import * as CAS from '@components/construction/list/ConstructionListCard/styles';
import DetailDefact from '@/components/construction/detail/DetailDefact';
import DetailManage from '@/components/construction/detail/DetailManage';
import Button from '@/components/common/Button';

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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const constructionId = pathname.split('/')[2];

  const [detailInfo, setDetailInfo] = useState([]);
  const { constructionDetailData, handleLeaveConstruction } =
    useConstruction(constructionId);

  // 탭 상태 : defect - 하자 체크(default), manage - 공사 관리
  const [selectedTab, setSelectedTab] = useState<string>('manage');

  console.log(constructionDetailData, 'constructionDetailData');

  return (
    <S.DetailConstructionContainer
      className={selectedTab === 'defect' ? 'defect' : 'manage'}
    >
      <S.DetailConstructionCenterContent>
        <CAS.ListCardLabelContainer>
          <div className="labelContainer">
            {constructionDetailData?.usage === 0 ? (
              <>
                <CAS.ListCardLabel>하자체크</CAS.ListCardLabel>
                <CAS.ListCardLabel>공사관리</CAS.ListCardLabel>
              </>
            ) : (
              <CAS.ListCardLabel>하자체크</CAS.ListCardLabel>
            )}
          </div>
        </CAS.ListCardLabelContainer>

        <CS.TemplateTitle>{constructionDetailData?.name}</CS.TemplateTitle>

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
      </S.DetailConstructionCenterContent>

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
          {selectedTab === 'defect' ? <DetailDefact /> : <DetailManage />}
        </S.DetailConstructionContent>

        {/* 버튼 */}
        <S.DetailConstructionCenterContent>
          {/* 하자 체크 리스트 다운 / 현장 메세지 바로가기 / 현장 나가기 버튼 */}
          <S.DetailConstructionButtonContainer>
            <Button type="button" $styleType="revert" $fullWidth={true}>
              하자체크 리스트 다운받기
            </Button>
            <Button type="button" $styleType="revert" $fullWidth={true}>
              현장 메세지 바로가기
            </Button>
            <Button
              type="button"
              $styleType="revert"
              $fullWidth={true}
              // onClick={() => {
              //   handleLeaveConstruction(info[0].constructionId);
              //   navigate('/construction/list');
              // }}
            >
              현장 나가기
            </Button>
          </S.DetailConstructionButtonContainer>
        </S.DetailConstructionCenterContent>
      </S.DetailConstructionContentContainer>
    </S.DetailConstructionContainer>
  );
}

export default DetailConstruction;
