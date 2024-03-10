import { useEffect, useState } from 'react';
import { parsedTimeToString } from '@/utils/date';

import * as S from './styles';

function RoomMessageCard({
  message,
  isShowTime,
  isShowProfile,
}: {
  message: any;
  isShowTime: boolean;
  isShowProfile: boolean;
}) {
  // 현재 유저 정보 임의로 지정
  const CURRENT_USER_ID = 2;
  const [isMyMessage, setIsMyMessage] = useState(false);

  useEffect(() => {
    // 현재 유저와 메시지 유저가 같으면 내가 보낸 메시지
    if (message.userId === CURRENT_USER_ID) {
      setIsMyMessage(true);
    }
  }, []);

  return isMyMessage ? (
    <S.MyMessageCardContainer className={`my ${isShowTime ? 'last' : ''}`}>
      <S.MessageContainer>
        {isShowTime && (
          <S.MessageDate>{parsedTimeToString(message.time)}</S.MessageDate>
        )}
        <S.Message>{message.content}</S.Message>
      </S.MessageContainer>
    </S.MyMessageCardContainer>
  ) : (
    <>
      <S.OtherMessageCardContainer
        className={`other ${isShowTime ? 'last' : ''}`}
      >
        <S.UserProfileImg className={isShowProfile ? 'show' : ''}>
          <img src={message.user_profile} alt="프로필 이미지" />
        </S.UserProfileImg>

        <S.MessageContainer>
          <S.Message>{message.content}</S.Message>
          {isShowTime && (
            <S.MessageDate>{parsedTimeToString(message.time)}</S.MessageDate>
          )}
        </S.MessageContainer>
      </S.OtherMessageCardContainer>
    </>
  );
}

export default RoomMessageCard;
