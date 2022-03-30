import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { userState } from "../../atoms";
import useInput from "../../hooks/useInput";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import Loading from "../loading/Loading";
import * as S from "./style";

function Form() {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [loading, setLoading] = useState<boolean>(false);

  const setUser = useSetRecoilState(userState);

  const mutation = useMutation(UserService.signIn, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        TokenService.set(data.body.token.token);
        setUser(data.body.token);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        />
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          type="password"
          id="pw"
          value={password}
          onChange={handlePasswordChange}
        />
        <S.Button type="submit">로그인</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
