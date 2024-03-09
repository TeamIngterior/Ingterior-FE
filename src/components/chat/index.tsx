import { useState } from 'react';

import ChatRoomList from './ChatRoomList';

import * as S from './styles';

const rooms: any[] = [
  {
    chatRoomId: 1,
    name: '영통구 인계동 5동 912호 1 전체 공사 현장',
    thumbnail_image_url: 'https://via.placeholder.com/100',
    member_count: 3,
    last_message:
      '제일 최근에 주고받은 메세지의 대화 내용이 두줄이나 한줄 형태로 들어갈 예정입니다',
    last_message_time: '2월 8일',
  },
  {
    chatRoomId: 2,
    name: '영통구 인계동 5동 912호 2 전체 공사 현장',
    thumbnail_image_url: 'https://via.placeholder.com/100',
    member_count: 3,
    last_message:
      '제일 최근에 주고받은 메세지의 대화 내용이 두줄이나 한줄 형태로 들어갈 예정입니다',
    last_message_time: '오후 2:30',
  },
  {
    chatRoomId: 3,
    name: '영통구 인계동 5동 912호 3 전체 공사 현장',
    thumbnail_image_url: 'https://via.placeholder.com/100',
    member_count: 3,
    last_message:
      '제일 최근에 주고받은 메세지의 대화 내용이 두줄이나 한줄 형태로 들어갈 예정입니다',
    last_message_time: '23.8.16',
  },
  {
    chatRoomId: 4,
    name: '영통구 인계동 5동 912호 4 전체 공사 현장',
    thumbnail_image_url: 'https://via.placeholder.com/100',
    member_count: 3,
    last_message: '',
    last_message_time: '',
  },
];

function Chatting() {
  const [isChattingOpened, setIsChattingOpened] = useState(false);

  return (
    <S.ChattingContainer>
      <ChatRoomList rooms={rooms} isChattingOpened={isChattingOpened} />

      <S.ChattingButton
        type="button"
        onClick={() => setIsChattingOpened(!isChattingOpened)}
      >
        채팅
      </S.ChattingButton>
    </S.ChattingContainer>
  );
}

export default Chatting;
