import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    if (response && response.status) {
      switch (response.status) {
        case 400:
        case 404:
          return Promise.reject('API 요청에 실패했습니다.');
        case 500:
          return Promise.reject('서버에 오류가 발생했습니다.');
        default:
          return Promise.reject('알 수 없는 에러가 발생했습니다.');
      }
    } else {
      return Promise.reject('네트워크 오류가 발생했습니다.');
    }
  }
);

export default instance;
