import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
  gap: 40px;
  background: #fff;
  border-radius: 10px;
`;
export const ModalTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;
export const ModalContent = styled.p`
  font-size: 16px;
`;
export const ModalInput = styled.input`
  height: 40px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid #e7e7e7;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  &:focus {
    border: 2px solid #568a35;
  }
`;
export const ModalButton = styled.button`
  height: 45px;
  width: 200px;
  background: #568a35;
  color: #fff;
  border: 0 solid;
  border-radius: 10px;
  cursor: pointer;
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
export const GoogleLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 170px;
  background: white;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 15px;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
  :hover {
    background-color: whitesmoke;
    border-color: #fff;
  }
`;
export const KakoLoginButton = styled(GoogleLoginButton)`
  height: 45px;
  width: 170px;
  background: #fee500;
  border: 1px solid #fff;
  :hover {
    background-color: #faf092;
    border-color: #faf092;
  }
`;

export const SocialText = styled.div`
  width: 100%;
`;

export const NickNameInput = styled.input`
  width: 60%;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: 1px solid gray;
  display: inline-block;
`;

export const NickNameButton = styled.button`
  margin-left: 10px;
  height: 35px;
  width: 100px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 5px;
  cursor: pointer;
`;
export const NickNameWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  display: inline-block;
  height: 80px;
`;
export const ErrorMsg = styled.div`
  color: red;
  margin-top: 10px;
  margin-left: 4px;
  font-size: 14px;
`;
