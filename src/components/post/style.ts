import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Base = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 50px 30px;
`;

export const Categories = styled.ul`
  display: flex;
  margin: 30px 0 60px;
`;

export const Category = styled.li<{ isFocus: boolean }>`
  display: flex;
  align-items: center;
  :not(:first-of-type) {
    margin-left: 20px;
  }
  font-size: 28px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }

  opacity: ${({ isFocus }) => (isFocus ? 1 : 0.5)};
`;

export const CategoryName = styled.span`
  margin-left: 6px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;

  /* @media (max-width: 1700px) {
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
  } */
`;

export const Item = styled.li`
  overflow: hidden;
  width: 350px;
  height: 350px;
  transition: 0.3s;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Status = styled.span<{ isDone: boolean }>`
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${({ isDone }) => (isDone ? '#878787' : '#0ac858')};
  color: #fff;
  font-size: 14px;
`;

export const Title = styled.h3`
  font-weight: 600;
  margin-top: 2rem;
`;

export const ImageWrapper = styled.div<{ isDone: boolean }>`
  height: 50px;
  background-color: ${({ isDone }) => (isDone ? '#878787' : '#568a35')};
`;

export const ImageBox = styled.div`
  position: relative;
  top: 50%;
  left: 10%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 1);
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentBox = styled.div`
  padding: 24px;
  padding-top: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid #ccc;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Info = styled.span<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 16px;

  > svg {
    margin-right: 4px;
    font-size: 22px;
    color: #9a9a9a;
  }

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: 700;
    `}

  :not(:first-of-type) {
    margin-left: 10px;
  }

  :last-of-type {
    > svg {
      color: #ef4343;
    }
  }
`;
