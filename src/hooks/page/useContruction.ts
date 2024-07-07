import {
  addConstructionRequest,
  constructionDetailRequest,
  deleteConstructionRequest,
  leaveConstructionRequest,
  likeConstructionRequest,
  uploadConstructionImageRequest,
} from '@/apis/construction';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AddConstructionFormModel } from './model';

export const useConstruction = (constructionId?: string) => {
  const queryClient = useQueryClient();

  // 현장 개별 조회
  const {
    data: constructionDetailData,
    isLoading: isConstructionDetailLoading,
  } = useQuery({
    queryKey: constructionId ? ['constructionDetail', constructionId] : [],
    queryFn: async () => {
      try {
        if (constructionId) {
          const response = await constructionDetailRequest(constructionId);
          return response.data;
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error Fetching data: ', error);
        throw error;
      }
    },
  });

  //  현장 추가
  const { mutate, isPending: isAddConstructionPending } = useMutation({
    mutationFn: (formData: any) => addConstructionRequest(formData),
    onSuccess: () => {
      alert('Construction added successfully');
    },
    onError: (error: any) => {
      console.error('Failed to add construction:', error);
    },
  });

  const { mutate: imageUpload } = useMutation({
    mutationFn: (formData: any) => uploadConstructionImageRequest(formData),
    onSuccess: () => {
      alert('Construction added successfully');
    },
    onError: (error: any) => {
      console.error('Failed to add construction:', error);
    },
  });

  const handleImageUpload = async (data: any) => {
    const formData = new FormData();
    const requestBlob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });

    formData.append('photo', requestBlob);

    imageUpload(formData);
  };

  const handleFormSubmit = async (data: AddConstructionFormModel) => {
    // 폼 데이터 추가
    const formData = {
      memberId: 111,
      usage: Number(data.usage),
      constructionName: data.constructionName,
    };

    mutate(formData);
  };

  //  현장 삭제
  const handleDeleteConstruction = async (constructionId: number) => {
    try {
      await deleteConstructionRequest(String(constructionId));

      queryClient.invalidateQueries({
        queryKey: ['constructionList'],
      });
    } catch (error) {
      console.error('Failed to delete construction:', error);
    }
  };

  // 현장 좋아요
  const handleLikeConstruction = async (constructionId: number) => {
    try {
      await likeConstructionRequest(String(constructionId));

      queryClient.invalidateQueries({
        queryKey: ['constructionList'],
      });
    } catch (error) {
      console.error('Failed to like construction:', error);
    }
  };

  // 현장 나가기
  const handleLeaveConstruction = async (constructionId: number) => {
    try {
      await leaveConstructionRequest(String(constructionId));

      queryClient.invalidateQueries({
        queryKey: ['constructionList'],
      });
    } catch (error) {
      console.error('Failed to leave construction:', error);
    }
  };

  return {
    constructionDetailData,
    handleFormSubmit,
    handleImageUpload,
    handleDeleteConstruction,
    handleLikeConstruction,
    handleLeaveConstruction,
    isAddConstructionPending,
  };
};
