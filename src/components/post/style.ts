import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1300px;
  margin: auto;
  padding: 50px 30px;
  gap: 24px;

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
  padding: 24px;
  transition: 0.3s;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h3``;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Info = styled.span`
  display: flex;
  margin-left: 10px;
  font-size: 12px;

  > svg {
    margin-right: 2px;
    font-size: 14px;
    color: #9a9a9a;
  }

  :last-of-type {
    > svg {
      color: #ef4343;
    }
  }
`;
