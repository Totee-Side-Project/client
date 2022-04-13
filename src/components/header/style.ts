import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Base = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding: 0 30px;
  background-color: #fff;
  z-index: 10;

  > span {
    margin-left: auto;
    font-size: 20px;
    color: #40a9ff;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  letter-spacing: 6px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  > span {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  line-height: 24px;
`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
  padding: 0.25rem 1rem;
  font-size: 14px;
  line-height: 24px;
`;

export const Space = styled.div`
  height: 100px;
`;
