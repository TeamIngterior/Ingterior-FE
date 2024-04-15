import { addConstructionRequest } from '@/apis/construction';
import { useMutation } from '@tanstack/react-query';
import { AddConstructionFormModel } from './model';

export const useConstruction = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => addConstructionRequest(formData),
    onSuccess: () => {
      alert('Construction added successfully');
    },
    onError: (error: any) => {
      console.error('Failed to add construction:', error);
    },
  });

  const handleFormSubmit = async (
    data: AddConstructionFormModel,
    file?: any
  ) => {
    const formData = new FormData();

    const requestBlob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });

    formData.append('memberId', '111');
    formData.append('usage', data.usage);
    formData.append('constructionName', data.constructionName);

    // 이미지 추가
    formData.append('drawingImageUrl', requestBlob);

    if (file && typeof file !== 'string') {
      formData.append('file', file);
    } else {
      formData.append('file', '');
    }

    mutate(formData);
  };

  return {
    handleFormSubmit,
    isPending,
  };
};
