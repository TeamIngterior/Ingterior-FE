import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useRemodelingList } from './useRemodelingList';
import { useModal } from '@/hooks/useModal';

import { RemodelingListDataModel } from '@/apis/remodeling';

import { FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdInput } from 'react-icons/md';
import RemodelingListCard from '@/components/remodeling/list/RemodlingListCard';
import AddRemodlingSite from '@/components/modal/remodeling/AddRemodelingSite';
import Button from '@/components/common/Button';

import { theme } from '@/assets/styles/theme';
import * as CS from '@/components/template/styles';
import * as S from './styles';

function RemodelingList() {
  const { openModal } = useModal('addRemodelingSite');
  const { remodelingListData } = useRemodelingList();
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
      <AddRemodlingSite />

      <S.RemodelingListContainer className="remodelingList">
        <CS.TemplateTitle>현장 목록</CS.TemplateTitle>

        {remodelingListData?.length !== 0 ? (
          <>
            {remodelingListData?.map(
              (item: RemodelingListDataModel, index: number) => (
                <RemodelingListCard cardData={item} key={index} />
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
      </S.RemodelingListContainer>
    </>
  );
}

export default RemodelingList;
