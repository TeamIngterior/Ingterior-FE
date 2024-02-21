import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRemodelingList } from '@/pages/remodeling/RemodelingList/useRemodelingList';
import { useModal } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';
import * as LS from '@components/remodeling/list/RemodlingListCard/styles';
import Input from '@/components/common/Input';

function AddRemodlingSite() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const { joinSiteMutation, isValidateData } = useRemodelingList();
  const { closeModal } = useModal('addRemodelingSite');

  const [isValidate, setIsValidate] = useState<{ status: number | null }>({
    status: null,
  });

  const [validData, setValidData] = useState<any>();

  // 현장 코드 검증
  const onEnterCodeSubmit = async (data: any) => {
    try {
      const response = await isValidateData(data.siteCode);
      const status = response.data?.status;
      const responseData = response.data?.data ?? null;

      setIsValidate({ status });

      if (status === 409) {
        setValidData(responseData);
      } else if (status === 200) {
        setValidData(responseData);
        console.log(responseData);
      }
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  // 현장 코드 추가
  const onSubmit = async (data: any) => {
    try {
      joinSiteMutation(data.siteCode);

      closeModal(() => {
        reset();
        setIsValidate({ status: null });
        setValidData(null);
      });
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  const onReset = () => {
    reset();
    setIsValidate({ status: null });
    setValidData(null);
  };

  return (
    <DefaultModal
      name="addRemodelingSite"
      className="addRemodelingSite"
      onReset={onReset}
    >
      {/* 모달 컨텐츠 */}
      <CS.ModalContentContainer>
        <CS.ModalHeader>현장 코드 입력</CS.ModalHeader>
        <CS.ModalContent>
          <form onSubmit={handleSubmit(onEnterCodeSubmit)}>
            <Input
              type="text"
              size="sm"
              inputType="input"
              $isHorizontal={true}
              placeholder="공유받은 코드를 입력해 주세요."
              {...register('siteCode')}
              errors={errors}
            >
              <Button size="sm" $styleType="revert">
                코드 입력
              </Button>
            </Input>
          </form>

          {
            // 현장 코드 검증 결과
            isValidate.status === 404 ? (
              <>
                <S.ValidateError>
                  코드를 잘못 입력했습니다. <br />
                  입력하신 코드명을 다시 확인해 주세요.
                </S.ValidateError>
              </>
            ) : isValidate.status === 409 ? (
              <>
                <S.ValidateError>
                  이미 등록된 현장입니다. <br />
                  다른 현장 코드를 입력해 주세요.
                </S.ValidateError>
              </>
            ) : isValidate.status === 200 ? (
              <>
                <S.ListCardModalContainer>
                  <S.ListCardModalTitle>
                    {validData?.title}
                  </S.ListCardModalTitle>

                  <LS.ListCardInfoContainer>
                    <LS.ListCardInfo>
                      <LS.ListCardProfileImg>
                        <img
                          src={validData?.user?.profileImg}
                          alt="현장 이미지"
                        />
                      </LS.ListCardProfileImg>
                      <LS.ListCardProfileInfo>
                        <p>생성자: {validData?.user?.usercode}</p>
                        <p>{validData?.createdAt}</p>
                      </LS.ListCardProfileInfo>
                    </LS.ListCardInfo>
                  </LS.ListCardInfoContainer>
                </S.ListCardModalContainer>
              </>
            ) : null
          }
        </CS.ModalContent>

        <CS.ModalButtonContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              $styleType={isValidate.status === 200 ? 'solid' : 'disabled'}
              size="lg"
              $fullWidth={true}
            >
              추가하기
            </Button>
          </form>
        </CS.ModalButtonContainer>
      </CS.ModalContentContainer>
    </DefaultModal>
  );
}

export default AddRemodlingSite;
