import styled from '@emotion/styled';

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 3rem;
  font-weight: 630;
  margin: 4% auto;
  width: 70%;
  height: 80px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ccc;
    text-decoration: none;
  }

  @media (max-width: 540px) {
    padding-top: 10px;
    font-size: 20px;
    height: 40px;
  }
`;

export const textarea = styled.textarea`
  resize: none;
  display: block;
  margin: auto;
  border-radius: 5px;
  width: 75%;
  height: 500px;
  font-size: 20px;
  padding: 20px;

  &::placeholder {
    font-style: italic;
    font-family: '210 스무살의봄 L';
  }

  &:focus {
    outline: gray;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin: 30px 10px auto;
  cursor: pointer;
  height: 30px;
  padding: 1px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 3px;
`;

export const Label = styled.label`
  display: block;
  margin: 20px auto;
  text-align: center;
`;
