import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const EventContentContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  color: #fff;
  border: 1px solid transparent !important;
  font-weight: 600;
  padding: 3px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;
