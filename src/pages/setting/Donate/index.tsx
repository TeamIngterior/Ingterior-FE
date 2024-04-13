import PageNav from '@/components/common/PageNav';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SETTING_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '설정',
    path: '/setting',
  },
  {
    title: '개발자에게 후원하기',
    path: '',
  },
];

import * as CS from '@/components/template/styles';
import * as S from './styles';
import Button from '@/components/common/Button';

const account = '000-000-0000 (00)은행';

function Donate() {
  return (
    <S.DonatetContainer>
      <CS.TemplateTitle>개발자 후원하기</CS.TemplateTitle>
      <PageNav navList={SETTING_NAV} />
      <S.DonateContent>
        <S.AccountNumberContainer>
          <S.AccountNumberTitle>개발 후원 계좌번호</S.AccountNumberTitle>
          <p>{account}</p>
        </S.AccountNumberContainer>
        {/* 계좌번호 복사 */}
        <CopyToClipboard
          text={account}
          onCopy={() => alert('클립보드에 복사되었습니다.')}
        >
          <Button
            size="sm"
            $styleType="revert"
            style={{
              marginLeft: 'auto',
              padding: '0.5rem 1rem',
            }}
          >
            계좌번호 복사
          </Button>
        </CopyToClipboard>
      </S.DonateContent>
    </S.DonatetContainer>
  );
}

export default Donate;
