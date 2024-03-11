import { useConstructionList } from './useConstructionList';
import { useModal } from '@/hooks/useModal';

import { ConstructionListDataModel } from '@/apis/construction';

import { FiPlus } from 'react-icons/fi';
import { MdInput } from 'react-icons/md';
import ConstructionListCard from '@/components/construction/list/ConstructionListCard';
import AddConstructionCodeSite from '@/components/modal/construction/AddConstructionCodeSite';
import Button from '@/components/common/Button';

import * as CS from '@/components/template/styles';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

function ConstructionList() {
  const navigate = useNavigate();

  const { openModal } = useModal('addConstructionSite');
  const { constructionListData } = useConstructionList();

  return (
    <>
      <AddConstructionCodeSite />

      <S.ConstructionListContainer className="constructionList">
        <CS.TemplateTitle>현장 목록</CS.TemplateTitle>

        <S.AddConstructionConatiner>
          {/* 새 현장 추가 */}
          <Button
            type="button"
            size="md"
            className="addConstructionButton"
            onClickHandler={() => navigate('/construction/addition')}
          >
            <FiPlus />
            <span>새 현장 추가</span>
          </Button>

          {/* 코드로 현장 추가  */}
          <Button
            type="button"
            size="md"
            className="addConstructionButton"
            $styleType="revert"
            onClickHandler={openModal}
          >
            <MdInput />
            코드로 현장 추가
          </Button>
        </S.AddConstructionConatiner>

        {/*  현장 리스트 */}
        {constructionListData?.length !== 0 ? (
          <>
            {constructionListData?.map(
              (item: ConstructionListDataModel, index: number) => (
                <ConstructionListCard cardData={item} key={index} />
              )
            )}
          </>
        ) : (
          <S.NoDataContainer>
            <p>
              아래의 + 버튼을 눌러 <br />
              새로운 현장을 추가해 보세요!
            </p>
          </S.NoDataContainer>
        )}
      </S.ConstructionListContainer>
    </>
  );
}

export default ConstructionList;
