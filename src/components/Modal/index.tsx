import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms';
import styled from '@emotion/styled';
import SignUpModal from './SignUpModal';
import OutsideClickHandler from '../../Utils/OutsideClickHandler';
import { backgroundAnimation } from '../Variants/variants';
import { AnimatePresence, motion } from 'framer-motion';
import AddInfoModal from './AddInfoModal';

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
`;

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <AnimatePresence>
      {modal.isOpen && (
        <ModalBackground
          variants={backgroundAnimation}
          initial={'initial'}
          animate={'animate'}
          exit={'end'}
        >
          <OutsideClickHandler
            outsideClick={() => setModal({ ...modal, isOpen: false })}
          >
            {modal.type === 'signUp' && <SignUpModal />}
            {modal.type === 'addInfo' && <AddInfoModal />}
          </OutsideClickHandler>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
};

export default Modal;
