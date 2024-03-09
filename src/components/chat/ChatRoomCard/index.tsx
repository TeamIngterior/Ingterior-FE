import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { chatRoomIdState } from '@/atom/chatState';

import * as S from './styles';

function ChatRoomCard({ room }: { room: any }) {
  const [roomId, setRoomId] = useRecoilState(chatRoomIdState);
  const [newMessage, setNewMessage] = useState<boolean>(false);
  const [newMessageCount, setNewMessageCount] = useState<number>(0);
  const [lastMessage, setLastMessage] = useState(room?.last_Message || '');

  // 컴포넌트 클릭 시, 해당 채팅방의 roomId를 recoil 상태에 저장하고, newMessage 상태를 false로 변경
  const handleClickRoom = () => {
    setRoomId(room.chatRoomId);
    setNewMessage(false);
    console.log('roomId', roomId);
  };

  useEffect(() => {
    // 채팅방의 마지막 메세지가 변경됐을 때 채팅방의 roomId가 현재 선택된 roomId와 다르면, newMessage 상태를 true로 변경하고, 마지막 메세지를 변경한다.
    // TODO : 읽지 않은 메세지 개수를 가져와서 newMessageCount 상태를 변경한다.
    if (room.chatRoomId !== roomId) {
      setNewMessage(true);
      setLastMessage(room.last_Message);
    }
  }, [room.chatRoomId]);

  return (
    <S.ChatRoomCardContainer onClick={handleClickRoom}>
      {/* 프로필 이미지 */}
      {/* TODO : 구성 인원 레이아웃 */}
      <S.ChatRoomProfileImg>
        <img src={room.thumbnail_image_url} alt="프로필 이미지" />
      </S.ChatRoomProfileImg>
      {/* 채팅방 정보 */}
      <S.ChatRoomInfoContainer>
        {/* 채팅방 이름 */}
        <S.ChatRoomName>{room.name}</S.ChatRoomName>
        <S.ChatRoomLastMessage>{room.last_message}</S.ChatRoomLastMessage>
      </S.ChatRoomInfoContainer>

      {/* 구성 인원*/}
      <S.ChatRoomMemberCount>{room.member_count}</S.ChatRoomMemberCount>

      {/* 날짜, 읽지 않은 메세지 */}
      <S.ChatRoomStatusContainer>
        <S.ChatRoomDate>{room.last_message_time}</S.ChatRoomDate>
        {/* {newMessage && <S.NewMessage>{newMessageCount}</S.NewMessage>} */}
      </S.ChatRoomStatusContainer>
    </S.ChatRoomCardContainer>
  );
}

export default ChatRoomCard;
