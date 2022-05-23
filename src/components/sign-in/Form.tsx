import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../atoms';
import { ERROR_MESSAGE } from '../../constants/message';
import useInput from '../../hooks/useInput';
import TokenService from '../../services/TokenService';
import UserService from '../../services/UserService';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import * as S from './style';

function Form() {
  const [id, handleIdChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const setUser = useSetRecoilState(userState);

  const mutation = useMutation(UserService.signIn, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async (data) => {
      if (data.header.code === 200) {
        const token = data.body.token;
        TokenService.set(token);
        const user = await UserService.check(token);
        // setUser(user.body.data);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id.trim() || !password.trim()) {
      setError(ERROR_MESSAGE.require);
      return;
    }

    mutation.mutate({ id, password });
  };

  if (loading) return <Loading />;

  return (
    <S.Base>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.Label htmlFor="id">아이디</S.Label>
        <S.Input type="text" id="id" value={id} onChange={handleIdChange} />
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          type="password"
          id="pw"
          value={password}
          onChange={handlePasswordChange}
        />
        <Error>{error}</Error>
        <S.Button type="submit">로그인</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
