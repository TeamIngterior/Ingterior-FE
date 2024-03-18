import { useEffect, useState } from 'react';

import PageNav from '@/components/common/PageNav';

import * as S from './styles';
import * as CS from '@components/template/styles';
import DetailDefact from '@/components/construction/detail/DetailDefact';
import DetailManage from '@/components/construction/detail/DetailManage';

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
  // 탭 상태 : defect - 하자 체크(default), manage - 공사 관리
  const [selectedTab, setSelectedTab] = useState<string>('defect');

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
          {selectedTab === 'defect' ? <DetailDefact /> : <DetailManage />}
        </S.DetailConstructionContent>
      </S.DetailConstructionContentContainer>
    </S.DetailConstructionContainer>
  );
}

export default DetailConstruction;
