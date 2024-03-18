import { useLocation, useNavigate } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import Button from '@/components/common/Button';

import * as CS from '../styles';
import * as S from './styles';

function DetailManage() {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const navigate = useNavigate();

  return (
    <>
      <CS.DetailConstructionFunctionContainer>
        <Button
          type="button"
          size="md"
          className="addDefectButton"
          onClickHandler={() => navigate(`/construction/work/addition/${id}`)}
        >
          <FiPlus />새 공사 추가
        </Button>
      </CS.DetailConstructionFunctionContainer>
    </>
  );
}

export default DetailManage;
