import styled from "@emotion/styled";

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
`;

export const Button = styled.button`
  height: 40px;
  margin-top: 0.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #4f46e5;
  color: #fff;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  height: 32px;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #b9bdbe;
  outline: none;

  &::placeholder {
    color: #b9bdbe;
  }
`;
