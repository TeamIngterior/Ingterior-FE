import instance from '.';

// 소셜 로그인 API
export const googleLoginRequest = async () => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/member/google`, {});
};

export const kakaoLoginRequest = async () => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/member/kakao`, {});
};
