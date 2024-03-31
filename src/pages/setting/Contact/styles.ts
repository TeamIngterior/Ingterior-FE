import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ContactContainer = styled.div``;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  margin-top: ${theme.gap.gap7};
`;

// 이용약관 체크 박스 - 약관 동의 체크박스
export const AgreementContainer = styled.div``;

export const AgreementTitle = styled.div`
  ${theme.typography.body.b2}
  margin-bottom: ${theme.gap.gap1};
`;

export const AgreementContent = styled.div`
  ${theme.typography.caption.c2}
  margin-bottom: ${theme.gap.gap2};
  color: ${theme.color.gray04};
  line-height: 1.5;
`;

export const AgreementCheck = styled.div`
  display: flex;
  align-items: center;

  p {
    ${theme.typography.body.b2}
    margin-left: ${theme.gap.gap1};
    color: ${theme.color.gray06};
  }
`;
