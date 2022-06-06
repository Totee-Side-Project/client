import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ProfileDropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 5px 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;
  width: 150px;
`;
export const MenuElement = styled(motion.button)`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  padding: 10px 0;
  border: 0 solid;
  border-radius: 5px;
  background-color: white;
`;
export const UserInfoWrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export const Username = styled.span`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const UserInfoText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey500};
  display: flex;
  justify-content: flex-start;
`;
