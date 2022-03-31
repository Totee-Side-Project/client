import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { userState } from "../../atoms";
import { ERROR_MESSAGE } from "../../constants/message";
import useInput from "../../hooks/useInput";
import { EMAIL_REGEX } from "../../lib/regExp";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import * as S from "./style";

function Form() {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const setUser = useSetRecoilState(userState);

  const mutation = useMutation(UserService.signIn, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        TokenService.set(data.body.data.token);
        setUser(data.body.data);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError(ERROR_MESSAGE.require);
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError(ERROR_MESSAGE.email);
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError(ERROR_MESSAGE.email);
      return;
    }

    mutation.mutate({ email, password });
  };

  if (loading) return <Loading />;

  return (
    <S.Base>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          validate={emailError ? true : false}
        />
        <Error>{emailError}</Error>
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          type="password"
          id="pw"
          value={password}
          onChange={handlePasswordChange}
          validate={passwordError ? true : false}
        />
        <Error>{passwordError}</Error>
        <S.Button type="submit">로그인</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
