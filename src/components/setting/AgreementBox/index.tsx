import CheckOption from '@/components/common/CheckOption';
import * as S from './styles';

function AgreementBox({
  title,
  content,
  agreementContext,
  onChange,
}: {
  title: string;
  content: string | React.ReactNode;
  agreementContext: string;
  onChange: any;
}) {
  return (
    <S.AgreementContainer>
      <S.AgreementTitle>{title}</S.AgreementTitle>
      <S.AgreementContent>{content}</S.AgreementContent>
      <S.AgreementCheck>
        <CheckOption onSelectedOption={(option: any) => onChange(option)} />
        <p>{agreementContext}</p>
      </S.AgreementCheck>
    </S.AgreementContainer>
  );
}

export default AgreementBox;
