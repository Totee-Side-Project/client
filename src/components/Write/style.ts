import styled from '@emotion/styled';

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  width: 100%
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
  &:focus{
    outline: none;
    border-bottom: 2px solid #ccc;
    text-decoration: none;
  }
  @media(max-width: 540px){
    padding-top: 10px;
    font-size: 20px;
    height: 40px;
  }
`;

export const ul = styled.ul`
margin: auto;
display: block;
`;

export const Select = styled.select`
  width: 400px;
  //display: block;
  margin: 5% auto;
  height: 60px;
  font-size: 20px;
  padding: 7px;
  border: 1px solid #999;
  color: #404040;
  border-radius: 5px;
  background-size: 20px;
  appearance: none;
  cursor: pointer;
  @media(max-width: 540px){
    height: 40px;
    font-size: 15px;
    width: 200px;
  }
  @media(max-width: 600px){
    width: 300px
  }
`;


export const li = styled.li`
  list-style: none;
`;

export const label = styled.label`
  margin: auto;
  padding: 10px;
  font-size: 20px;
  @media(max-width: 540px){
    font-size: 0;
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
  &::placeholder{
    font-style: italic;
    font-family: "210 스무살의봄 L";
  };
  &:focus{
    outline: gray;
  };
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

export const btn = styled.div`
  width: 100%;
  text-align: center;
`;