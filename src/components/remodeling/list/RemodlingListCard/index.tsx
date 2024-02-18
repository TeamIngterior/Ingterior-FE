import { useNavigate } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { RemodelingListDataModel } from '@/apis/remodeling';

import { TiStarFullOutline } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '@/components/common/Button';

import * as S from './styles';

function RemodelingListCard({
  cardData,
}: {
  cardData: RemodelingListDataModel;
}) {
  const navigate = useNavigate();

  return (
    <S.RemodelingListCardContainer>
      {/* 현장 라벨 */}
      <S.ListCardLabelContainer>
        {cardData.category.map((category, index) => (
          <S.ListCardLabel key={index}>{category}</S.ListCardLabel>
        ))}
      </S.ListCardLabelContainer>

      {/* 현장 제목 & 즐겨찾기  */}
      <S.ListCardTitleContainer>
        <S.ListCardTitle>{cardData.title}</S.ListCardTitle>

        {/* 즐겨찾기 아이콘 */}
        <S.IconContainer>
          <TiStarFullOutline className="bookmarkIcon" />
        </S.IconContainer>
      </S.ListCardTitleContainer>

      {/* 현장 정보 */}
      <S.ListCardInfoContainer className={cardData.isOwner ? 'owner' : ''}>
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

          {/* 상세보기 버튼 */}
          <Button
            type="button"
            size="initial"
            $bgType="initial"
            $styleType="icon"
            className="detailButton"
            onClickHandler={() => console.log('이동')}
          >
            <IoIosArrowForward />
          </Button>
        </S.ListCardInfo>

        {/* 코드 공유 버튼 */}
        <S.LinkShareContainer>
          <S.LinkShareText>
            현장코드:&nbsp;
            <span>{cardData.remodelingSiteCode}</span>
          </S.LinkShareText>

          <CopyToClipboard
            text={cardData.remodelingSiteCode}
            onCopy={() => alert('클립보드에 복사되었습니다.')}
          >
            <Button size="sm" $bgType="revert">
              코드 공유
            </Button>
          </CopyToClipboard>
        </S.LinkShareContainer>
      </S.ListCardInfoContainer>
    </S.RemodelingListCardContainer>
  );
}

export default RemodelingListCard;
