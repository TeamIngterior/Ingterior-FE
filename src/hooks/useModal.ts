import { useSetRecoilState } from 'recoil';
import { modalState } from '@/atom/modalState';

export const useModal = (name: string) => {
  const setAllModalState = useSetRecoilState(modalState);

  const openModal = () => {
    setAllModalState((currentModalState) => ({
      ...currentModalState,
      [name]: true,
    }));
  };

  const closeModal = () => {
    setAllModalState((currentModalState) => ({
      ...currentModalState,
      [name]: false,
    }));
  };

  return { openModal, closeModal };
};
