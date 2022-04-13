import styled from '@emotion/styled';

export const Base = styled.section`
  padding: 30px 10px;
  background-color: #fff;
  text-align: center;
`;

export const Content = styled.p`
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
`;

export const Text = styled.strong`
  letter-spacing: 6px;
  color: #4f46e5;
`;
