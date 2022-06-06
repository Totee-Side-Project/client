import styled from '@emotion/styled';

export const Base = styled.section`
  padding: 30px 10px;
  background-color: #fff;
  color: #1f221f;
  text-align: center;

  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'yg-jalnan';
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;
  font-size: 26px;

  :first-of-type {
    font-weight: 700;
  }

  :last-of-type {
    @media (max-width: 540px) {
      display: none;
    }
  }

  > img {
    margin-right: -10px;
  }
`;
