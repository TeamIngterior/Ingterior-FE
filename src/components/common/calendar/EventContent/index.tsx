import { EventContentArg } from '@fullcalendar/core/index.js';
import * as S from './styles';
import { useTheme } from 'styled-components';

interface EvnetContentProps {
  eventInfo: EventContentArg;
  colorIndex: number;
}

function EventContent({ eventInfo, colorIndex }: EvnetContentProps) {
  const theme = useTheme();
  const color = [
    '#FBD2DF',
    '#FFE5DC',
    '#F6DFB7',
    '#D6F2D6',
    '#BCE3E1',
    '#DEE9DE',
    '#E2F0FA',
    '#CDD9F1',
    '#E1DCE4',
    '#F1DDF6',
  ];

  return (
    <S.EventContentContainer
      style={{
        color: `${theme.color.gray05}`,
        backgroundColor: color[colorIndex],
      }}
    >
      {eventInfo.event.title}
    </S.EventContentContainer>
  );
}

export default EventContent;
