import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <p>잉테리어 메인 페이지입니다</p>
      <Button onClickHandler={() => navigate('/signin')}>
        로그인 페이지 바로가기
      </Button>
      <Button onClickHandler={() => navigate('/remodeling/list')}>
        현장목록 페이지 바로가기
      </Button>
      <Button onClickHandler={() => navigate('/remodeling/addition')}>
        현장추가 페이지 바로가기
      </Button>
    </div>
  );
}

export default Home;
