import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import TokenService from '../services/TokenService';

function OauthRedirectPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    token && TokenService.set(token);
    navigate('/');
  }, [searchParams]);

  return <Loading />;
}

export default OauthRedirectPage;
