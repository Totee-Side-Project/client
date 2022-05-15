import styled from '@emotion/styled';

export const Base = styled.section`
  padding: 30px 10px;
  background-color: #fff;
  text-align: center;
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;
  font-size: 24px;

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
