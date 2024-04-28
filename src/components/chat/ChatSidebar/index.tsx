import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { useConstruction } from '@/hooks/page/useContruction';

import { chatSidebarInfoState, chatSidebarState } from '@/atom/chatState';

import { IoCloseSharp } from 'react-icons/io5';

import * as S from './styles';

function ChatSidebar() {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useRecoilState(chatSidebarState);
  const [info, setInfo] = useRecoilState(chatSidebarInfoState);

  const { handleLeaveConstruction } = useConstruction();

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    isMenu && (
      <>
        <S.ChattingSidebarDimmed>
          <S.ChattingSidebarContainer>
            {/* 현장 정보 */}
            <S.ChattingSidebarHeader>
              {/* 닫기 버튼 */}
              <S.ChattingCloseButton
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                <IoCloseSharp />
              </S.ChattingCloseButton>

              <S.CahttingSidebarHeading>현장 정보</S.CahttingSidebarHeading>

              {/* 현장 타이틀 */}
              <S.ChattingSidebarAddress>
                {info[0].title}
              </S.ChattingSidebarAddress>

              {/* 현장 정보 */}
              <S.ChattingInfoContainer>
                {/* 프로필 이미지 */}
                <S.ChattingInfoImage>
                  <img src={info[0].user.profileImg} alt="프로필 이미지" />
                </S.ChattingInfoImage>

                {/* 생성자 정보 */}
                <S.ChattingInfoContent>
                  <S.ChattingInfoName>
                    생성자:&nbsp;{info[0].user.usercode}
                  </S.ChattingInfoName>
                  <p>{info[0].createdAt}</p>
                </S.ChattingInfoContent>
              </S.ChattingInfoContainer>
            </S.ChattingSidebarHeader>

            {/* 현장 참여자 */}
            <S.ChattingSidebarContentContainer>
              <S.CahttingSidebarHeading className="contentTitle">
                현장 참여자
              </S.CahttingSidebarHeading>

              {/* 참여자 목록 */}
              <S.ChattingParticipantsList>
                {info[1].content.map((user: any) => (
                  <S.ChattingParticipants>
                    <img src={user.user_profile} alt="프로필 이미지" />
                    {user.user_name}
                  </S.ChattingParticipants>
                ))}
              </S.ChattingParticipantsList>
            </S.ChattingSidebarContentContainer>

            {/* 현장 상세 바로가기, 현장 메세지 기록 다운받기, 현장 나가기 */}
            <S.ChattingSidebarFooter>
              <S.ChattingSidebarFooterButton>
                현장 상세 바로가기
              </S.ChattingSidebarFooterButton>
              <S.ChattingSidebarFooterButton>
                현장 메세지 기록 다운받기
              </S.ChattingSidebarFooterButton>
              <S.ChattingSidebarFooterButton
                onClick={() => {
                  handleLeaveConstruction(info[0].constructionId);
                  navigate('/construction/list');
                }}
              >
                현장 나가기
              </S.ChattingSidebarFooterButton>
            </S.ChattingSidebarFooter>
          </S.ChattingSidebarContainer>
        </S.ChattingSidebarDimmed>
      </>
    )
  );
}

export default ChatSidebar;
