import styled from "@emotion/styled";
import { FormEvent, MouseEvent, useState } from "react";
import Input from "./Input";

function Form() {
  const [level, setLevel] = useState<number>(1);

  const handleLevel = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === "다음") {
      setLevel((prev) => prev + 1);
    } else {
      setLevel((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Base>
      <StyledForm onSubmit={handleSubmit}>
        <Input />
        {level === 2 && <Button>회원가입</Button>}
      </StyledForm>
      <div>
        {level === 1 ? (
          <Button onClick={handleLevel}>다음</Button>
        ) : (
          <Button onClick={handleLevel}>이전</Button>
        )}
      </div>
    </Base>
  );
}

export default Form;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledForm = styled.form``;

const Button = styled.button``;
