import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atom/modalState';
import { useModal } from '@/hooks/useModal';

import * as CS from '../styles';
import * as S from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '@/components/common/Button';

interface DefaultModalProps {
  name: string;
  title?: string;
  children: React.ReactNode;
  props?: any;
  button?: React.ReactNode;
  buttonName?: string;
  buttonHandler?: () => void;
  onReset?: () => void;
}

function DefaultModal({
  name,
  title,
  children,
  button,
  buttonName = '확인',
  buttonHandler,
  onReset,
  ...props
}: DefaultModalProps) {
  const [allModalState, setAllModalState] = useRecoilState<{
    [key: string]: any;
  }>(modalState);
  const isOpen = allModalState[name];

  const { closeModal } = useModal(name);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(onReset);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    isOpen && (
      <CS.ModalOverlay onClick={handleModalClick}>
        <CS.ModalContainer {...props}>
          {/* 닫기 버튼 */}
          <Button
            type="button"
            size="initial"
            $styleType="initial"
            onClickHandler={() => closeModal(onReset)}
            className="closeButton"
          >
            <AiOutlineClose />
          </Button>

          {/* 모달 컨텐츠 */}
          <S.ModalContainer>
            <S.ModalContent>
              <S.ModalHeader>{title}</S.ModalHeader>
              {children}
            </S.ModalContent>

            {/* 버튼  */}
            <S.ModalButtonContainer>
              {button ? (
                button
              ) : (
                <>
                  <Button
                    size="lg"
                    $fullWidth={true}
                    onClickHandler={() => buttonHandler && buttonHandler()}
                  >
                    {buttonName}
                  </Button>
                </>
              )}
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </CS.ModalContainer>
      </CS.ModalOverlay>
    )
  );
}

export default DefaultModal;
