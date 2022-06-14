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
export const GoogleLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 170px;
  background: white;
  border: 1px solid;
  border-color: #d3d3d3;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  margin: 0px 15px;
  :hover {
    background-color: whitesmoke;
    border-color: #fff;
  }
`;
export const KakoLoginButton = styled.button`
  height: 45px;
  width: 170px;
  background: #fee500;
  border: 1px solid;
  border-color: white;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  margin: 0px 15px;
  :hover {
    background-color: #faf092;
    border-color: #faf092;
  }
`;

export const Img = styled.img`
  margin: -5px 10px -7px 0px;
`;

export const SocialText = styled.div`
  width: fit-content;
`;