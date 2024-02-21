import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useConstructionList } from './useConstructionList';
import { useModal } from '@/hooks/useModal';

import { ConstructionListDataModel } from '@/apis/construction';

import { FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdInput } from 'react-icons/md';
import ConstructionListCard from '@/components/construction/list/ConstructionListCard';
import AddConstructionCodeSite from '@/components/modal/construction/AddConstructionCodeSite';
import Button from '@/components/common/Button';

import { theme } from '@/assets/styles/theme';
import * as CS from '@/components/template/styles';
import * as S from './styles';

function ConstructionList() {
  const { openModal } = useModal('addConstructionSite');
  const { constructionListData } = useConstructionList();
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      inView
        ? setIsButtonContainerVisible(true)
        : setIsButtonContainerVisible(false);
    },
  });

  const [isButtonContainerVisible, setIsButtonContainerVisible] =
    useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      <AddConstructionCodeSite />

      <S.ConstructionListContainer className="constructionList">
        <CS.TemplateTitle>현장 목록</CS.TemplateTitle>

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

        <div className={`constructionButtonContainer`} ref={ref}>
          <S.AddConstructionConatiner
            style={{
              position: isButtonContainerVisible ? 'static' : 'fixed',
            }}
          >
            {isButtonClicked && (
              <S.AddConstructionList>
                <li>
                  <Button
                    type="button"
                    size="md"
                    onClickHandler={openModal}
                    style={{
                      borderColor: `${theme.color.primary05}`,
                      backgroundColor: `${theme.color.primary05}`,
                      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <MdInput />
                    코드로 현장 추가
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    size="md"
                    onClickHandler={() => console.log('click')}
                    style={{
                      borderColor: `${theme.color.primary05}`,
                      backgroundColor: `${theme.color.primary05}`,
                      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <FiPlus />
                    <span>새 현장 추가</span>
                  </Button>
                </li>
              </S.AddConstructionList>
            )}
            <Button
              type="button"
              size="md"
              onClickHandler={() => setIsButtonClicked(!isButtonClicked)}
            >
              {isButtonClicked ? <AiOutlineClose /> : <FiPlus />}
              현장 추가
            </Button>
          </S.AddConstructionConatiner>
        </div>
      </S.ConstructionListContainer>
    </>
  );
}

export default ConstructionList;
