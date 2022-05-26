import styled from '@emotion/styled';

export const Base = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 10%;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 2.9rem;
  color: black;
  //margin-top: 10px;
`;

export const Name = styled.div`
  cursor: pointer;
  color: black;
  font-size: 17px;
  font-weight: 700;
  padding-right: 15px;
  border-right: 2px solid #e1e1e1;
  display: inline-block;
`;

export const Date = styled.div`
  padding-left: 15px;
  display: inline-block;
  padding-right: 15px;
  border-right: 2px solid #e1e1e1;
`;

export const Content = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  padding-bottom: 32px;
  border-bottom: 3px solid gray;
  border-bottom-width: 10%;
  grid-gap: 15px;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  margin-top: 2.5rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  //margin: 40px auto 0;
  line-height: 1.7;
`;

export const iconWrapper = styled.div`
  //margin-top: 10px;
`;

export const BtnWrapper = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  height: 30px;
  padding: 1px 10px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 8px;
  :hover {
    background-color: darkorange;
  }
`;
