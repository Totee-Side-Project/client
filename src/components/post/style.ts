import styled from '@emotion/styled';

export const Base = styled.section`
  width: 1300px;
  margin: auto;
  padding: 50px 30px;

  @media (max-width: 1700px) {
    width: 1100px;
  }
  @media (max-width: 1440px) {
    width: 800px;
  }
  @media (max-width: 830px) {
    width: 95%;
  }
`;

export const Categories = styled.ul`
  display: flex;
  margin: 30px 0 60px;
`;

export const Category = styled.li`
  display: flex;
  align-items: center;

  font-size: 22px;
  cursor: pointer;

  :last-of-type {
    margin-left: 20px;
  }
`;

export const CategoryName = styled.span`
  margin-left: 6px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
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
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  text-align: center;
  font-weight: 600;
`;

export const ImageBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50px;
  margin: 30px auto;
  text-align: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;

  & + & {
    margin-left: 8px;
  }
`;

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
