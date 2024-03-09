import ChatRoomCard from '../ChatRoomCard';

import * as S from './styles';
import * as CS from '../styles';
import { useRecoilState } from 'recoil';
import { chatRoomIdState } from '@/atom/chatState';
import RoomMessageList from '../RoomMessageList';

interface ChatRoomListProps {
  isChattingOpened: boolean;
  rooms: any[];
}

function ChatRoomList({ isChattingOpened, rooms }: ChatRoomListProps) {
  const [selectedRoomId, setSelectedRoomId] = useRecoilState(chatRoomIdState);

  return (
    <>
      {isChattingOpened && (
        <S.ChatRoomListContainer>
          {selectedRoomId === null ? (
            <>
              {/* 헤더 */}
              <CS.ChatRoomHeader>
                <CS.ChatRoomHeaderInner>채팅 목록</CS.ChatRoomHeaderInner>
              </CS.ChatRoomHeader>
              {/* 콘텐츠 */}
              <S.ChatRoomListContent>
                {rooms.length > 0 ? (
                  <>
                    {rooms.map((room: any) => (
                      <ChatRoomCard key={room.name} room={room} />
                    ))}
                  </>
                ) : (
                  <S.NoChatRoom>
                    메세지가 없습니다
                    <br />
                    현장을 추가하고 대화를 나눠보세요!
                  </S.NoChatRoom>
                )}
              </S.ChatRoomListContent>
            </>
          ) : (
            <>
              <RoomMessageList />
            </>
          )}
        </S.ChatRoomListContainer>
      )}
    </>
  );
}

export default ChatRoomList;
