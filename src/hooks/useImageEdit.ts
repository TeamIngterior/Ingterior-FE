import { editImageState, uploadImageState } from '@/atom/imageState';
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRecoilState } from 'recoil';

export const useImageEdit = (
  canvasRef?: React.RefObject<HTMLCanvasElement>
) => {
  const [image, setImage] = useRecoilState(uploadImageState);
  const [editedImage, setEditedImage] = useRecoilState(editImageState);

  const [rotation, setRotation] = useState(0);
  const [flippedHorizontally, setFlippedHorizontally] = useState(false);
  const [flippedVertically, setFlippedVertically] = useState(false);

  //   캔버스 요소가 생성되고 이미지가 변경될 때마다 캔버스에 이미지를 그리고, 그 이미지를 editedImage에 저장
  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.src = image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx?.save();
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.translate(canvas.width / 2, canvas.height / 2);
        ctx?.rotate((rotation * Math.PI) / 180);
        if (flippedHorizontally) ctx?.scale(-1, 1);
        if (flippedVertically) ctx?.scale(1, -1);
        ctx?.drawImage(img, -img.width / 2, -img.height / 2);
        ctx?.restore();
      };
    }
  }, [editedImage, rotation, flippedHorizontally, flippedVertically]);

  useEffect(() => {
    if (editedImage) {
      setImage(editedImage);
    }
  }, [editedImage]);

  const onDrop = (acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const extension = file.name.split('.').pop()?.toLowerCase();

    // 허용 확장자 : jpg, jpeg, gif, png
    // 최대 용량 : 5MB
    // 멀티 업로드 가능 여부 : true라면 최대 8개
    if (!['jpg', 'jpeg', 'gif', 'png'].includes(extension)) {
      alert(
        '지원하지 않는 파일 형식입니다. jpg, jpeg, gif, png 형식의 파일만 업로드할 수 있습니다.'
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImage(result);
      }
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const flipHorizontally = () => {
    setFlippedHorizontally(!flippedHorizontally);
  };

  const flipVertically = () => {
    setFlippedVertically(!flippedVertically);
  };

  const changeImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.jpg, .jpeg, .gif, .png';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
          setEditedImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    };
    input.click();
  };

  const resetChanges = () => {
    setRotation(0);
    setFlippedHorizontally(false);
    setFlippedVertically(false);
    setEditedImage(image);
  };

  const deleteImage = () => {
    setImage('');
    setEditedImage(null);
  };

  const applyChanges = () => {
    // 인자로 받은 캔버스 요소에 이미지를 그리고, 그 이미지를 editedImage에 저장
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const editedImage = canvas.toDataURL('image/jpeg');
      setEditedImage(editedImage);
    }
  };

  return {
    image,
    getRootProps,
    getInputProps,
    rotate,
    flipHorizontally,
    flipVertically,
    resetChanges,
    editedImage,
    deleteImage,
    changeImage,
    applyChanges,
  };
};
