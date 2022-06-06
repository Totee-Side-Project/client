import { css } from '@emotion/react';
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
  position: relative;

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
  padding: 0 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: bold;
`;

export const Space = styled.div`
  height: 100px;
`;
export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 150px;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey200};
  }
`;
export const StyledProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const StyledUsername = styled.p`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: bold;
`;
