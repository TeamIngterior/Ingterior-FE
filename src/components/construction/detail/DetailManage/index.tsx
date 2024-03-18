import { useLocation, useNavigate } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import Button from '@/components/common/Button';

import * as CS from '../styles';
import * as S from './styles';
import Calendar from '@/components/common/calendar/Calendar';

function DetailManage() {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const navigate = useNavigate();

  return (
    <>
      <S.DetailManageContent>
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

        {/* 달력 */}
        <Calendar />
      </S.DetailManageContent>

      {/* 일정 디테일 */}
      <S.DetailManageContainer>
        <S.DetailManageContent></S.DetailManageContent>
      </S.DetailManageContainer>
    </>
  );
}

export default DetailManage;
