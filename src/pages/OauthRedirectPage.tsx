import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../atoms';
import Loading from '../components/loading/Loading';
import TokenService from '../services/TokenService';
import { GetDataType } from '../types';

function OauthRedirectPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const setUser = useSetRecoilState(userState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const userInfo = async () => {
    await axios
      .get(`https://api.totee.link/api/v1/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then((respose) => {
        setUser({ ...user, ...respose.data.body.data});
      });
  };

  useEffect(() => {
    const token = searchParams.get('token');
    token && TokenService.set(token);
    userInfo();
    navigate('/');
  }, [searchParams]);

  return <Loading />;
}

export default OauthRedirectPage;
