import { useNavigate } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useConstruction } from '@/hooks/page/useContruction';

import { ConstructionListDataModel } from '@/apis/construction';

import { formatDate } from '@/utils/date';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import MoreIcon from '@assets/icon/menuMore.svg?react';
import DeleteIcon from '@assets/icon/delete.svg?react';
import EditIcon from '@assets/icon/edit.svg?react';

import DropdownMenu from '@/components/common/DropdownMenu';
import Button from '@/components/common/Button';

import * as S from './styles';

function ConstructionListCard({
  cardData,
  type,
}: {
  cardData: ConstructionListDataModel;
  type?: string;
}) {
  const navigate = useNavigate();
  const { handleDeleteConstruction, handleLikeConstruction } =
    useConstruction();

  const regDate = formatDate(cardData.regDate);

  console.log('cardData', cardData);

  return (
    <>
      <S.RemodelingListCardContainer>
        {type !== 'card' && (
          <>
            {/* 현장 라벨 */}
            <S.ListCardLabelContainer>
              {cardData.usage === 0 ? (
                <>
                  <S.ListCardLabel>하자체크</S.ListCardLabel>
                  <S.ListCardLabel>공사관리</S.ListCardLabel>
                </>
              ) : (
                <S.ListCardLabel>하자체크</S.ListCardLabel>
              )}

              {/* 편집, 삭제 */}
              <DropdownMenu
                options={[
                  {
                    label: '편집',
                    icon: <EditIcon />,
                    onClickHandler: () =>
                      navigate(`/construction/${cardData.constructionId}/edit`),
                  },
                  {
                    label: '삭제',
                    icon: <DeleteIcon />,
                    onClickHandler: () =>
                      handleDeleteConstruction(cardData.constructionId),
                  },
                ]}
              >
                <MoreIcon />
              </DropdownMenu>
            </S.ListCardLabelContainer>
            {/* 현장 제목 & 즐겨찾기  */}{' '}
            <S.ListCardTitleContainer>
              <S.ListCardTitle>{cardData.constructionName}</S.ListCardTitle>

              {/* 즐겨찾기 아이콘 */}
              <S.IconContainer
                onClick={() => handleLikeConstruction(cardData.constructionId)}
              >
                {cardData.liked ? (
                  <TiStarFullOutline className="bookmarkIcon active" />
                ) : (
                  <TiStarOutline className="bookmarkIcon" />
                )}
              </S.IconContainer>
            </S.ListCardTitleContainer>
          </>
        )}

        {/* 현장 정보 */}
        <S.ListCardInfoContainer className={cardData.creator ? 'owner' : ''}>
          {type === 'card' && (
            <S.ListCardTitle className="constructionManage">
              {cardData.constructionName}
            </S.ListCardTitle>
          )}

          <S.ListCardInfo>
            {/* 프로필 사진 */}
            <S.ListCardProfileImg>
              {/* TODO : 이미지 4장 템플릿 */}
              {/* <img src={cardData.memberImgUrls[0]} alt="프로필 사진" /> */}
              <img src={'https://via.placeholder.com/150'} alt="프로필 사진" />
            </S.ListCardProfileImg>

            {/* 유저 코드 & 생성일 */}
            <S.ListCardProfileInfo>
              <p>생성자:&nbsp;{cardData.memberCode}</p>
              <p>{regDate}</p>
            </S.ListCardProfileInfo>

            {type !== 'card' && (
              <>
                {/* 상세보기 버튼 */}
                <Button
                  type="button"
                  size="initial"
                  $styleType="initial"
                  className="detailButton"
                  onClickHandler={() =>
                    navigate(`/construction/${cardData.constructionId}`)
                  }
                >
                  <IoIosArrowForward />
                </Button>
              </>
            )}
          </S.ListCardInfo>

          {/* 코드 공유 버튼 */}
          <S.LinkShareContainer>
            <S.LinkShareText>
              현장코드:&nbsp;
              <span>{cardData.constructionCode}</span>
            </S.LinkShareText>

            <CopyToClipboard
              text={cardData.constructionCode}
              onCopy={() => alert('클립보드에 복사되었습니다.')}
            >
              <Button size="sm" $styleType="revert">
                코드 공유
              </Button>
            </CopyToClipboard>
          </S.LinkShareContainer>
        </S.ListCardInfoContainer>
      </S.RemodelingListCardContainer>
    </>
  );
}

export default ConstructionListCard;
