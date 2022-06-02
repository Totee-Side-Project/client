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
  font-size: 24px;
  font-weight: 700;
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
  padding: 0.25rem 0.75rem;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  @font-face {
    font-family: 'Happiness-Sans-Title';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Happiness-Sans-Title';
`;

export const Space = styled.div`
  height: 100px;
`;
