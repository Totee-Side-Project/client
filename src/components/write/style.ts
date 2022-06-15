import styled from '@emotion/styled';

export const Base = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 30px;

  h2 {
    font-size: 32px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: 0;
  box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.25);
  outline: none;
  border-radius: 20px;
  width: 820px;
  height: 100px;
  font-size: 24px;
  padding-left: 20px;
  text-align: left;
  font-family: 'Nunito', sans-serif;
  margin-top: 50px;
  margin-bottom: 50px;

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
  //margin: 10px;
  text-align: center;
`;

export const Radio = styled.input`
  display: inline-block;
  cursor: pointer;
  margin-right: 6px;
`;

export const Category = styled.div`
  background: #ffffff;
  border: 0;
  box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.25);
  outline: none;
  border-radius: 20px;
  width: 800px;
  height: 100px;
  font-size: 16px;
  padding: 0 40px;
  text-align: left;
  border: 1px dashed #083a50;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center; /* 방향이 row 기준: 세로 중앙 정렬*/
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;

  input[type='radio'] + label {
    display: inline-block;
    cursor: pointer;
    padding-right: 10px;
  }

  input[type='radio'] + label {
    color: #caced8;
  }

  category input[type='radio']:checked + label {
    color: #083a50;
  }
`;
