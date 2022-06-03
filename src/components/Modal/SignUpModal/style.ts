import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
  gap: 40px;
`;
export const ModalTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;
export const ModalContent = styled.p`
  font-size: 16px;
`;
