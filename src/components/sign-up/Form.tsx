import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import UserService from "../../services/UserService";
import { Gender } from "../../types";
import Loading from "../loading/Loading";
import * as S from "./style";

function Form() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [gender, setGender] = useState<Gender>("male");
  const [email, handleEmailChange] = useInput("");
  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [passwordConfirm, handlePasswordConfirmChange] = useInput("");
  const [major, handleMajorChange] = useInput("");
  const [phone, handlePhoneChange] = useInput("");
  const [studentId, handleStudentIdChange] = useInput("");

  const mutation = useMutation(UserService.signUp, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        navigate("/");
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value === "male" ? setGender("male") : setGender("female");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      username,
      password,
      major,
      phone,
      studentId,
      gender,
    });

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
      return;
    }

    mutation.mutate({
      email,
      username,
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
        <S.Label htmlFor="major">학과</S.Label>
        <S.Input
          type="text"
          id="major"
          value={major}
          onChange={handleMajorChange}
        />
        <S.Label htmlFor="phone">연락처</S.Label>
        <S.Input
          type="text"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <S.Label htmlFor="studentId">학번</S.Label>
        <S.Input
          type="text"
          id="studentId"
          value={studentId}
          onChange={handleStudentIdChange}
        />
        <span>성별</span>
        <div>
          <S.Label htmlFor="male">남</S.Label>
          <S.Label htmlFor="female">여</S.Label>
          <S.Input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <S.Input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
        </div>
        <S.Button type="submit">회원 가입</S.Button>
      </S.StyledForm>
    </S.Base>
  );
}

export default Form;
