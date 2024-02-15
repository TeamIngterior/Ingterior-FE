import { remodelingListRequest } from '@/apis/remodeling';
import { useQuery } from '@tanstack/react-query';

export const useRemodelingList = () => {
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

  return { remodelingListData };
};
