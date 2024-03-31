import Button from '@/components/common/Button';
import * as S from './styles';

function LogoutBox() {
  return (
    <S.LogoutBoxContainer>
      <S.UserProfileContainer>
        {/* 유저 프포맆 이미지 */}
        <S.UserProfile>
          <img src="https://via.placeholder.com/48" alt="user profile" />
        </S.UserProfile>

        {/* 유저 정보 */}
        <S.UserInfo>
          <S.UserName>김영진&nbsp;님</S.UserName>
          <S.UserMail>jum8kit@gmail.com</S.UserMail>
        </S.UserInfo>
      </S.UserProfileContainer>

      {/* 로그아웃 버튼  */}
      <Button
        type="button"
        size="sm"
        $styleType="revert"
        onClickHandler={() => console.log('로그아웃')}
      >
        로그아웃
      </Button>
    </S.LogoutBoxContainer>
  );
}

export default LogoutBox;
