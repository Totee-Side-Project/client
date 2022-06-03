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
