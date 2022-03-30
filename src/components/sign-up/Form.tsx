import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms";
import useInput from "../../hooks/useInput";
import UserService from "../../services/UserService";
import Loading from "../loading/Loading";
import * as S from "./style";

function Form() {
  const [email, handleEmailChange] = useInput("");
  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [passwordConfirm, handlePasswordConfirmChange] = useInput("");
  const [loading, setLoading] = useState<boolean>(false);

  const [user, setUser] = useRecoilState(userState);

  const mutation = useMutation(UserService.signUp, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
      return;
    }

    mutation.mutate({
      email,
      username,
      password,
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        <S.Label htmlFor="username">이름</S.Label>
        <S.Input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          type="password"
          id="pw"
          value={password}
          onChange={handlePasswordChange}
        />
        <S.Label htmlFor="pwConfirm">비밀번호 재확인</S.Label>
        <S.Input
          type="password"
          id="pwConfirm"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        <S.Button type="submit">회원 가입</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
