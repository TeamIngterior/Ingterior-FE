import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRemodelingList } from '@/pages/remodeling/RemodelingList/useRemodelingList';

import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@components/remodeling/list/RemodlingListCard/styles';
import Input from '@/components/common/Input';

function AddRemodlingSite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const { joinSiteMutation, isValidateData } = useRemodelingList();

  const [isValidate, setIsValidate] = useState<boolean | null>(null);
  const [validData, setValidData] = useState<any>();

  // 현장 코드 검증
  const onEnterCodeSubmit = async (data: any) => {
    try {
      const response = await isValidateData(data.siteCode);

      if (response.data?.status === 404) {
        setIsValidate(false);
      } else {
        setIsValidate(true);
        setValidData(response.data);
        console.log(response.data);
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
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  return (
    <DefaultModal name="addRemodelingSite">
      <S.ModalContainer>
        {/* 모달 컨텐츠 */}
        <S.ModalContent>
          <S.ModalHeader>현장 코드를 입력해 주세요.</S.ModalHeader>

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
            isValidate === false ? (
              <>
                <S.ValidateError>
                  코드를 잘못 입력했습니다. <br />
                  입력하신 코드명을 다시 확인해 주세요.
                </S.ValidateError>
              </>
            ) : (
              <>
                <S.ListCardModalContainer>
                  <S.ListCardModalTitle>
                    {validData?.title}
                  </S.ListCardModalTitle>

                  <CS.ListCardInfoContainer>
                    <CS.ListCardInfo>
                      <CS.ListCardProfileImg>
                        <img
                          src={validData?.user.profileImg}
                          alt="현장 이미지"
                        />
                      </CS.ListCardProfileImg>
                      <CS.ListCardProfileInfo>
                        <p>생성자: {validData?.user.usercode}</p>
                        <p>{validData?.createdAt}</p>
                      </CS.ListCardProfileInfo>
                    </CS.ListCardInfo>
                  </CS.ListCardInfoContainer>
                </S.ListCardModalContainer>
              </>
            )
          }
        </S.ModalContent>

        {/* 모달 하단 버튼 */}
        <S.ModalButtonContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              type="button"
              $styleType={isValidate ? 'solid' : 'disabled'}
              size="lg"
              $fullWidth={true}
              onClickHandler={() => console.log('confirm')}
            >
              추가하기
            </Button>
          </form>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </DefaultModal>
  );
}

export default AddRemodlingSite;
