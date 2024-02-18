import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';

function AddRemodlingSite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <DefaultModal name="addRemodelingSite">
      <S.ModalContainer>
        {/* 모달 컨텐츠 */}
        <S.ModalContent>
          <S.ModalHeader>현장 코드를 입력해 주세요.</S.ModalHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              size="sm"
              inputType="input"
              isHorizontal={true}
              placeholder="공유받은 코드를 입력해 주세요."
              {...register('siteCode')}
              errors={errors}
            >
              <Button size="sm" $styleType="revert">
                코드 입력
              </Button>
            </Input>
          </form>
        </S.ModalContent>

        {/* 모달 하단 버튼 */}
        <S.ModalButtonContainer>
          <Button
            type="button"
            $styleType="disabled"
            size="lg"
            $fullWidth={true}
            onClickHandler={() => console.log('confirm')}
          >
            추가하기
          </Button>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </DefaultModal>
  );
}

export default AddRemodlingSite;
