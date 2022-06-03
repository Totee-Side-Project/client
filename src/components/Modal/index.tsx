import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms';
import styled from '@emotion/styled';
import SignUpModal from './SignUpModal';
import OutsideClickHandler from '../../Utils/OutsideClickHandler';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <>
      {modal?.isOpen && modal.type && (
        <ModalBackground>
          <OutsideClickHandler
            outsideClick={() => setModal({ ...modal, isOpen: false })}
          >
            <SignUpModal />
          </OutsideClickHandler>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
