import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';
import Form from '../components/sign-in/Form';

function SignInPage() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setMounted(true);

    if (mounted && user) {
      setMounted(false);
      return navigate('/');
    }

    setMounted(false);
  }, [navigate, user, mounted]);

  return <Form />;
}

export default SignInPage;
