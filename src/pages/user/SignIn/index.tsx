import { SOCIAL_LOGIN } from '@/constants/socialLogin';

import Logo from '@assets/ingteriorLogo.svg?react';
import Button from '@/components/common/Button';

import * as S from './styles';

function SignIn() {
  return (
    <>
      <S.LoginHeader>
        <Logo width={56} height={56} className="logo" />
        <S.LoginTitle>잉테리어의 더 많은 서비스를 시작해 보세요!</S.LoginTitle>
        <S.LoginSubTitle>
          <strong>1분</strong>이면 회원가입 가능해요.
        </S.LoginSubTitle>
      </S.LoginHeader>

      <S.LoginContent>
        {SOCIAL_LOGIN.map(
          (item, index) => (
            console.log('item', SOCIAL_LOGIN[index].style),
            (
              <Button
                key={index}
                type="button"
                icon={SOCIAL_LOGIN[index].icon}
                $fullWidth={SOCIAL_LOGIN[index].$fullWidth}
                $bgType="revert"
                style={SOCIAL_LOGIN[index].style}
                onClickHandler={() => console.log(`${item.title}`)}
              >
                {item.title}
              </Button>
            )
          )
        )}
      </S.LoginContent>
    </>
  );
}

export default SignIn;
