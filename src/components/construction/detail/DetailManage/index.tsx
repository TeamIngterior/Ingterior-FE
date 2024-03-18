import { useLocation, useNavigate } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import Button from '@/components/common/Button';

import * as CS from '../styles';
import * as S from './styles';
import Calendar from '@/components/common/calendar/Calendar';
import { useCalendar } from '@/hooks/useCalendar';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { calendarScheduleListState } from '@/atom/calendarState';

const scheduleList = [
  {
    title: '공사',
    openDate: 'Mar 14 2024 04:01:56 GMT+0900',
    endDate: 'Mar 15 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사1',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사2',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사3',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 16 2024 06:01:56 GMT+0900',
  },
  {
    title: '공사4',
    openDate: 'Mar 15 2024 04:01:56 GMT+0900',
    endDate: 'Mar 15 2024 06:01:56 GMT+0900',
  },
];

const DetailInfo = ({
  open,
  setOpen,
  selectedDate,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedDate: Date | null;
}) => {
  return <div>DetailInfo</div>;
};

function DetailManage() {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const navigate = useNavigate();

  const [scheduleListState, setScheduleListState] = useRecoilState(
    calendarScheduleListState
  );

  const { selectedDate, isOpenScheduleDialog, setIsOpenScheduleDialog } =
    useCalendar();

  useEffect(() => {
    setScheduleListState(scheduleList);
  }, [scheduleList]);

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

      {/* 일정 디테일 - 해당 일자 클릭시에만  DetailInfo */}
      {isOpenScheduleDialog && (
        <S.DetailManageContainer>
          <S.DetailManageContent>
            <DetailInfo
              open={isOpenScheduleDialog}
              setOpen={setIsOpenScheduleDialog}
              selectedDate={selectedDate}
            />
          </S.DetailManageContent>
        </S.DetailManageContainer>
      )}

      {scheduleList.length === 0 && <>일정이 없습니다.</>}
    </>
  );
}

export default DetailManage;
