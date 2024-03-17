import { useEffect, useState, useRef } from 'react';

import { useRecoilState } from 'recoil';
import {
  chatRoomIdState,
  chatSidebarInfoState,
  chatSidebarState,
} from '@/atom/chatState';

import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

import Send from '@/assets/icon/send.svg?react';
import BackArrow from '@/assets/icon/arrow_back.svg?react';
import Menu from '@/assets/icon/menu.svg?react';
import RoomMessageCard from '../RoomMessageCard';
import ChatSidebar from '../ChatSidebar';

import * as S from './styles';
import * as CS from '../styles';

function combineMessages(messages: any): any[] {
  const seenIds = new Set();

  const resultArray = messages.filter((message: any) => {
    // 현재 아이템의 messageId가 이미 나온 적이 있는지 확인
    const isDuplicate = seenIds.has(message.messageId);

    // 나온 적이 없으면 Set에 추가하고 true 반환 (유지)
    if (!isDuplicate) {
      seenIds.add(message.messageId);
    }

    // 나온 적이 있으면 false 반환 (필터링)
    return !isDuplicate;
  });

  // messageId 순으로 정렬
  resultArray.sort((a: { messageId: number }, b: { messageId: number }) => {
    if (a.messageId && b.messageId) {
      return a.messageId - b.messageId;
    }
    return 0;
  });

  return resultArray;
}

function RoomMessageList() {
  // TODO : 임의의 데이터로 대체
  const [data, setData] = useState<any>([]);

  const [roomId, setRoomId] = useRecoilState(chatRoomIdState);
  const [info, setInfo] = useRecoilState(chatSidebarInfoState);
  const [isMenu, setIsMenu] = useRecoilState(chatSidebarState);
  const [page, setPage] = useState<number>(0);

  // 채팅방 목록 페이지 진입 시 호출된 메세지가 message에, 실시간 메세지가 liveMessageList에 저장
  const [messages, setMessages] = useState<any>([]);
  const [liveMessageList, setLiveMessageList] = useState<any>([]);

  const { ref } = useInView({
    rootMargin: '0px',
    threshold: 1,
    onChange: (inView) => {
      if (inView) {
        if (data && !data.last) {
          // 마지막 페이지 데이터가 아닌 경우에만 setPage
          setPage((prev) => prev + 1);
        }
      }
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    // TODO : 메시지 전송 API 호출
    console.log('메시지 전송', data);
  };

  useEffect(() => {
    // roomId 변경 시 state 초기화(채팅방 변경 시)
    setPage(0);
    setMessages([]);
  }, [roomId]);

  useEffect(() => {
    // TODO : 채팅방 목록 페이지 진입 시, 채팅방 목록을 가져오는 API 호출
    console.log(`${roomId} 번 채팅방 진입`);
    setData({
      title: '영통구 인계동 5동 912호 전체공사 채팅방 총 4명이 참여 중입니다.',
    });

    setMessages([
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 1,
        messageId: 1,
        content: '안녕하세요1',
        time: new Date('2024-03-10T15:30:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 1,
        messageId: 2,
        content: '안녕하세요2 1유저입니다. 긴 텍스트의 테스트 문구입니다.',
        time: new Date('2024-03-10T15:30:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 1,
        messageId: 3,
        content: '안녕하세요3',
        time: new Date('2024-03-10T15:30:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 2,
        messageId: 4,
        content: '안녕하세요4 2유저입니다. 긴 텍스트의 테스트 문구입니다.',
        time: new Date('2024-03-10T15:31:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 1,
        messageId: 5,
        content: '안녕하세요5',
        time: new Date('2024-03-10T15:32:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 2,
        messageId: 6,
        content: '안녕하세요6',
        time: new Date('2024-03-10T15:33:00'),
      },
      {
        user_profile: 'https://via.placeholder.com/150',
        userId: 2,
        messageId: 7,
        content: '안녕하세요7',
        time: new Date('2024-03-10T15:33:00'),
      },
    ]);

    setInfo([
      {
        id: 1,
        title: '영통구 인계동 5동 912호 전체공사 진행중',
        createdAt: '2024.01.19',
        user: {
          usercode: '1GA001',
          profileImg: 'https://via.placeholder.com/150',
        },
        constructionSiteCode: '1GA001A001',
        isOwner: true,
      },
      {
        title: '채팅방 멤버',
        content: [
          {
            userId: 1,
            user_profile: 'https://via.placeholder.com/150',
            user_name: '1GA001',
          },
          {
            userId: 2,
            user_profile: 'https://via.placeholder.com/150',
            user_name: '1GA001',
          },
          {
            userId: 3,
            user_profile: 'https://via.placeholder.com/150',
            user_name: '1GA001',
          },
          {
            userId: 4,
            user_profile: 'https://via.placeholder.com/150',
            user_name: '1GA001',
          },
        ],
      },
    ]);
  }, [roomId]);

  //   useEffect(() => {
  //     // TODO : 데이터가 변경되면 메세지 목록을 업데이트
  //   }, [data]);

  // useForm 디버그용 코드
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    console.log(
      'combineMessages',
      combineMessages([...(messages || []), ...liveMessageList])
    );
  }, [messages]);

  return (
    <S.RooomMessageListContainer>
      {/* 채팅방 헤더  */}
      <CS.ChatRoomHeader>
        <CS.ChatRoomHeaderInner>
          {/* 이전 버튼 */}
          <S.ArrowButton
            type="button"
            onClick={() => {
              setRoomId(null);
            }}
          >
            <BackArrow />
          </S.ArrowButton>

          {/* 타이틀 */}
          <S.RoomMessageListHeading>{data.title}</S.RoomMessageListHeading>

          {/* 메뉴 버튼  */}
          <S.MenuButton type="button" onClick={() => setIsMenu(!isMenu)}>
            <Menu />
          </S.MenuButton>
        </CS.ChatRoomHeaderInner>
      </CS.ChatRoomHeader>

      {/* 채팅방 컨텐츠 */}
      <S.RoomMessageListContent>
        {combineMessages([...(messages || []), ...liveMessageList]).map(
          (userSentMessage, index, array) => {
            const nextMessage = array[index + 1];

            // 다음 메세지가 현재 메세지와 다른 유저가 보낸 메세지라면 시간을 표시
            const differentUserSentNextMessage =
              nextMessage?.userId !== userSentMessage.userId;

            // 1분 이상 차이나는 경우 시간을 표시
            const isShowTime =
              differentUserSentNextMessage ||
              nextMessage?.time.getTime() - userSentMessage.time.getTime() >
                1000 * 60;

            // 1분 이내에 해당 유저가 보낸 첫번째 메세지에만 프로필 이미지 표시
            const isFirstMessageOfUser =
              index === 0 || array[index - 1].userId !== userSentMessage.userId;

            return (
              <RoomMessageCard
                message={userSentMessage}
                key={userSentMessage.messageId}
                isShowTime={isShowTime}
                isShowProfile={isFirstMessageOfUser}
              />
            );
          }
        )}
      </S.RoomMessageListContent>

      {/* 메세지 전송 */}
      <S.RoomMessageSendForm
        className="messageSendForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          autoComplete="off"
          spellCheck="false"
          className="messageSendInput"
          {...register('chatMessage')}
        />
        <button>
          <Send />
        </button>
      </S.RoomMessageSendForm>

      {isMenu && <ChatSidebar />}
    </S.RooomMessageListContainer>
  );
}

export default RoomMessageList;
