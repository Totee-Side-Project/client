import { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE } from '../../constants/message';
import useInput from '../../hooks/useInput';
import { EMAIL_REGEX, PHONE_REGEX } from '../../lib/regExp';
import UserService from '../../services/UserService';
import { ReqSignUp } from '../../types';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import * as S from './style';

const initialForm: ReqSignUp = {
  id: '',
  email: '',
  gender: 'male',
  major: '',
  password: '',
  phone: '',
  studentId: '',
  nickname: '',
};

function Form() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<ReqSignUp>(initialForm);
  const { id, email, gender, major, password, phone, studentId, nickname } =
    userInfo;
  const [passwordConfirm, handlePasswordConfirmChange] = useInput('');
  const [error, setError] = useState<string>('');

  const mutation = useMutation(UserService.signUp, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        navigate('/signin');
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleUserInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(userInfo).forEach(([key, value]: [string, string]) => {
      if (!value.trim()) {
        isValid = false;
        setError(ERROR_MESSAGE.require);
        return;
      }
      return;
    });

    if (!isValid) return;

    if (!EMAIL_REGEX.test(email)) {
      setError(ERROR_MESSAGE.email);
      return;
    }

    if (password !== passwordConfirm) {
      setError('??????????????? ???????????? ????????? ????????????.');
      return;
    }

    if (!PHONE_REGEX.test(phone)) {
      setError(ERROR_MESSAGE.phone);
      return;
    }

    mutation.mutate({
      id,
      email,
      nickname,
      password,
      major,
      phone,
      studentId,
      gender,
    });
  };

  if (loading) return <Loading />;

  return (
    <S.Base>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.Label htmlFor="id">?????????</S.Label>
        <S.Input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="email">?????????</S.Label>
        <S.Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="username">?????????</S.Label>
        <S.Input
          type="text"
          id="username"
          name="username"
          value={nickname}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="pw">????????????</S.Label>
        <S.Input
          type="password"
          id="pw"
          name="password"
          value={password}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="pwConfirm">???????????? ?????????</S.Label>
        <S.Input
          type="password"
          id="pwConfirm"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        <S.Label htmlFor="major">??????</S.Label>
        <S.Input
          type="text"
          id="major"
          name="major"
          value={major}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="phone">?????????</S.Label>
        <S.Input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="studentId">??????</S.Label>
        <S.Input
          type="text"
          id="studentId"
          name="studentId"
          value={studentId}
          onChange={handleUserInfoChange}
        />
        <S.Label htmlFor="gender">??????</S.Label>
        <S.Select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleUserInfoChange}
        >
          <option value="male">??????</option>
          <option value="female">??????</option>
        </S.Select>
        <Error>{error}</Error>
        <S.Button type="submit">?????? ??????</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
