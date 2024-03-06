import { useGoogleLogin } from '@react-oauth/google';
import { SOCIAL_LOGIN } from '@/constants/socialLogin';
import Button from '@/components/common/Button';

const GoogleLoginButton = () => {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <>
      <Button
        type="button"
        icon={SOCIAL_LOGIN[2].icon}
        $fullWidth={SOCIAL_LOGIN[2].$fullWidth}
        $styleType="revert"
        style={SOCIAL_LOGIN[2].style}
        onClickHandler={() => {
          handleGoogleLogin();
        }}
      >
        구글로 로그인하기
      </Button>
    </>
  );
};

export default GoogleLoginButton;
