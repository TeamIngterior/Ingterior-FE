import { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export const useImageEdit = (onImageChange: (image: string) => void) => {
  const [image, setImage] = useState<any>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [flippedHorizontally, setFlippedHorizontally] = useState(false);
  const [flippedVertically, setFlippedVertically] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //   캔버스 요소가 생성되고 이미지가 변경될 때마다 캔버스에 이미지를 그리고, 그 이미지를 editedImage에 저장
  useEffect(() => {
    if (canvasRef.current && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.src = image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        const dpr = window.devicePixelRatio;
        canvas.width = canvas.width * dpr;
        canvas.height = canvas.height * dpr;
        ctx?.scale(dpr, dpr);

        ctx?.save();
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.translate(canvas.width / 2, canvas.height / 2);
        ctx?.rotate((rotation * Math.PI) / 180);
        if (flippedHorizontally) ctx?.scale(-1, 1);
        if (flippedVertically) ctx?.scale(1, -1);
        ctx?.drawImage(img, -img.width / 2, -img.height / 2);
        ctx?.restore();
        setEditedImage(canvas.toDataURL());
      };
    }
  }, [image, rotation, flippedHorizontally, flippedVertically]);

  //   이미지가 변경되고, editedImage가 없을 때 이미지를 editedImage에 저장
  useEffect(() => {
    if (image && !editedImage) {
      onImageChange(image);
    }
  }, [editedImage, image, onImageChange]);

  const onDrop = (acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
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
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };
    input.click();
  };

  const resetChanges = () => {
    setRotation(0);
    setFlippedHorizontally(false);
    setFlippedVertically(false);
    setEditedImage(null);
  };

  const deleteImage = () => {
    setImage(null);
    setEditedImage(null);
  };

  const applyChanges = () => {
    if (editedImage && editedImage !== canvasRef.current?.toDataURL()) {
      console.log('이미지 변경', editedImage);
      onImageChange(editedImage);
    } else {
      console.log('오리지널이미지');
      onImageChange(canvasRef.current?.toDataURL() || '');
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
    canvasRef,
    applyChanges,
  };
};
