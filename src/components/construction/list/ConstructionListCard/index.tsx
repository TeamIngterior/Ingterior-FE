import { useNavigate } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ConstructionListDataModel } from '@/apis/construction';

import { TiStarFullOutline } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
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

  return (
    <>
      <S.RemodelingListCardContainer>
        {type !== 'card' && (
          <>
            {/* 현장 라벨 */}
            <S.ListCardLabelContainer>
              {cardData.category.map((category, index) => (
                <S.ListCardLabel key={index}>{category}</S.ListCardLabel>
              ))}
            </S.ListCardLabelContainer>
            {/* 현장 제목 & 즐겨찾기  */}{' '}
            <S.ListCardTitleContainer>
              <S.ListCardTitle>{cardData.title}</S.ListCardTitle>

              {/* 즐겨찾기 아이콘 */}
              <S.IconContainer>
                <TiStarFullOutline className="bookmarkIcon" />
              </S.IconContainer>
            </S.ListCardTitleContainer>
          </>
        )}

        {/* 현장 정보 */}
        <S.ListCardInfoContainer className={cardData.isOwner ? 'owner' : ''}>
          {type === 'card' && (
            <S.ListCardTitle className="constructionManage">
              {cardData.title}
            </S.ListCardTitle>
          )}

          <S.ListCardInfo>
            {/* 프로필 사진 */}
            <S.ListCardProfileImg>
              <img src={cardData.user.profileImg} alt="프로필 사진" />
            </S.ListCardProfileImg>

            {/* 유저 코드 & 생성일 */}
            <S.ListCardProfileInfo>
              <p>생성자:&nbsp;{cardData.user.usercode}</p>
              <p>{cardData.createdAt}</p>
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
                    navigate(`/construction/detail/${cardData.id}`)
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
              <span>{cardData.constructionSiteCode}</span>
            </S.LinkShareText>

            <CopyToClipboard
              text={cardData.constructionSiteCode}
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
