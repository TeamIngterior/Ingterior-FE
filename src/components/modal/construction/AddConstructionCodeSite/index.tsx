import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useConstructionList } from '@/pages/construction/ConstructionList/useConstructionList';
import { useModal } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';
import * as LS from '@components/construction/list/ConstructionListCard/styles';
import Input from '@components/common/Input';

function AddConstructionCodeSite() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const { joinSiteMutation, isValidateData } = useConstructionList();
  const { closeModal } = useModal('addConstructionSite');

  const [isValidate, setIsValidate] = useState<{ status: number | null }>({
    status: null,
  });

  const [validData, setValidData] = useState<any>();

  // 현장 코드 검증
  const onEnterCodeSubmit = async (data: any) => {
    try {
      const response = await isValidateData(data.constructionCode);
      const status = response.status;
      const responseData = response.data ?? null;

      console.log(status, responseData, 'status, responseData');
      setIsValidate({ status });

      if (status === 409) {
        setValidData(responseData);
      } else if (status === 200) {
        setValidData(responseData);
        console.log('responseData', responseData);
      }
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  // 현장 코드 추가
  const onSubmit = async (data: any) => {
    try {
      joinSiteMutation(validData.constructionId);
      console.log(validData, 'validData');

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
      name="addConstructionSite"
      className="addConstructionSite"
      onReset={onReset}
    >
      {/* 모달 컨텐츠 */}
      <CS.ModalContentContainer>
        <CS.ModalHeader>현장 코드 입력</CS.ModalHeader>
        <CS.ModalContent>
          <form
            onSubmit={handleSubmit(onEnterCodeSubmit)}
            style={{
              display: 'flex',
              gap: '0 8px',
            }}
          >
            <Input
              type="text"
              size="sm"
              inputType="input"
              $isHorizontal={true}
              placeholder="공유받은 코드를 입력해 주세요."
              {...register('constructionCode')}
              errors={errors}
            ></Input>
            <Button size="sm" $styleType="revert">
              코드 입력
            </Button>
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
                    {validData?.constructionName}
                  </S.ListCardModalTitle>

                  <LS.ListCardInfoContainer>
                    <LS.ListCardInfo>
                      <LS.ListCardProfileImg>
                        <img
                          src={validData?.memberThumnails[0]}
                          alt="현장 이미지"
                        />
                      </LS.ListCardProfileImg>
                      <LS.ListCardProfileInfo>
                        <p>생성자: {validData?.memberCode}</p>
                        <p>{validData?.regDate}</p>
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

export default AddConstructionCodeSite;
