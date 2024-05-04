import instance from '.';

// 이용약관 조회
export const getTermsRequest = async () => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/terms`);
};
