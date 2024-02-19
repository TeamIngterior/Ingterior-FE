import {
  joinRemodelingRequest,
  remodelingListByCodeRequest,
  remodelingListRequest,
} from '@/apis/remodeling';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useRemodelingList = () => {
  const queryClient = useQueryClient();

  // 현장 목록 조회
  const { data: remodelingListData } = useQuery({
    queryKey: ['remodelingList'],
    queryFn: async () => {
      try {
        const response = await remodelingListRequest();
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
      const response = await remodelingListByCodeRequest(siteCode);
      return response;
    } catch (error) {
      console.error('Error Fetching data: ', error);
      throw error;
    }
  };

  // 코드로 현장 추가
  const { mutate: joinSiteMutation } = useMutation({
    mutationFn: joinRemodelingRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['remodelingList'],
      });
    },
  });

  return { remodelingListData, isValidateData, joinSiteMutation };
};
