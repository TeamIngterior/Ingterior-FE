import { useRecoilState } from 'recoil';
import { modalState } from '@/atom/modalState';
import { useCallback } from 'react';

export const useModal = (name: string) => {
  const [allModalState, setAllModalState] = useRecoilState<{
    [key: string]: any;
  }>(modalState);

  const openModal = useCallback(() => {
    setAllModalState((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  }, [name, setAllModalState]);

  const closeModal = useCallback(
    (callback?: () => void) => {
      setAllModalState((prevState) => ({
        ...prevState,
        [name]: false,
      }));
      callback && callback();
    },

    [name, setAllModalState]
  );

  return { openModal, closeModal };
};
