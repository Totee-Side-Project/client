import styled from '@emotion/styled';

export const Footer = styled.div`
  //align-items: center;
  //justify-content: center;
  background-color: white;
  background-image: linear-gradient(rgba(135, 135, 135, 0.2));
  //position: relative;
  display: flex;
  width: 100%;
  font-size: 15px;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  border: 1 chocolate;
`;

export const Th = styled.tr`
  margin-bottom: 20px;
  min-width: 100px;
  font-weight: bold;
  padding: 10px;
`;

export const Td = styled.tr`
  display: flex;
  max-width: 120px;
  margin-bottom: 7px;
  cursor: pointer;
  padding: 10px;
`;
