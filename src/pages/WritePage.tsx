import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';

function WritePage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  return <div>Write</div>;
}

export default WritePage;
