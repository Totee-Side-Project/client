import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1300px;
  margin: auto;
  padding: 50px 30px;
  gap: 20px;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
    width: 1100px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    width: 800px;
  }
  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  transition: 0.3s;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;
