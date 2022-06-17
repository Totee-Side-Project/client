import React, { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { infoState, modalState } from '../../../atoms';
import UserService from '../../../services/UserService';
import { ReqInfo } from '../../../types';
import { modalAnimation } from '../../Variants/variants';
import { Page1 } from '../ModalPage/Page1';
import { Page2 } from '../ModalPage/Page2';
import { Page3 } from '../ModalPage/Page3';
import { Page4 } from '../ModalPage/Page4';
import {
  ErrorMsg,
  ModalButton,
  ModalButtonWrapper,
  ModalContent,
  ModalTitle,
  ModalWrapper,
  NickNameButton,
  NickNameInput,
  NickNameWrapper,
} from '../SignUpModal/style';

const AddInfoModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <ModalWrapper
        variants={modalAnimation}
        initial={'initial'}
        animate={'animate'}
        exit={'end'}
        id={'addInfoModal'}
      >
        {modal.page == 1 && <Page1 />}
        {modal.page == 2 && <Page2 />}
        {modal.page == 3 && <Page3 />}
        {modal.page == 4 && <Page4 />}
        <ModalButtonWrapper>
          {modal.page > 1 && (
            <ModalButton
              onClick={() => setModal({ ...modal, page: modal.page - 1 })}
            >
              이전으로
            </ModalButton>
          )}
          <ModalButton
            onClick={() => setModal({ ...modal, page: modal.page + 1 })}
          >
            다음으로
          </ModalButton>
        </ModalButtonWrapper>
      </ModalWrapper>
    </>
  );
};
export default AddInfoModal;
