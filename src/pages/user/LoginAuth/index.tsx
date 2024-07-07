import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function LoginAuth() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log('로그인 페이지');
    // accessToken, refreshToken을 로컬 스토리지에 저장
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    localStorage.setItem('accessToken', accessToken || '');
    localStorage.setItem('refreshToken', refreshToken || '');

    // 메인 페이지로 이동
    navigate('/');
  }, []);
  return <div></div>;
}

export default LoginAuth;
