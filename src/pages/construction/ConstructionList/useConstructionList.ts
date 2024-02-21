import {
  joinConstructionRequest,
  constructionListByCodeRequest,
  constructionListRequest,
} from '@/apis/construction';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useConstructionList = () => {
  const queryClient = useQueryClient();

  // 현장 목록 조회
  const { data: constructionListData } = useQuery({
    queryKey: ['constructionList'],
    queryFn: async () => {
      try {
        const response = await constructionListRequest();
        return response.data;
      } catch (error) {
        console.error('Error Fetching data: ', error);
        throw error;
      }
    },
  });

  // 현장 목록을 현장 코드로 조회해서 있는지 검증
  const isValidateData = async (siteCode: string) => {
    try {
      const response = await constructionListByCodeRequest(siteCode);
      return response;
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  // 코드로 현장 추가
  const { mutate: joinSiteMutation } = useMutation({
    mutationFn: joinConstructionRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['constructionList'],
      });
    },
  });

  return { constructionListData, isValidateData, joinSiteMutation };
};
