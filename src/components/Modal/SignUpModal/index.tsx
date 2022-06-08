import React from 'react';
import { ModalButton, ModalContent, ModalTitle, ModalWrapper } from './style';
import { modalAnimation } from '../../Variants/variants';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atoms';

const Page1 = () => {
  return (
    <>
      <ModalTitle>첫 번째 페이지에요</ModalTitle>
      <ModalContent>우와 멋져요</ModalContent>
    </>
  );
};
const Page2 = () => {
  return (
    <>
      <ModalTitle>두 번째 페이지에요</ModalTitle>
      <ModalContent>우와 멋져요</ModalContent>
    </>
  );
};
const Page3 = () => {
  return (
    <>
      <ModalTitle>세 번째 페이지에요</ModalTitle>
      <ModalContent>우와 멋져요</ModalContent>
    </>
  );
};
const Page4 = () => {
  return (
    <>
      <ModalTitle>네 번째 페이지에요</ModalTitle>
      <ModalContent>우와 멋져요</ModalContent>
    </>
  );
};

const SignUpModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  console.log(modal);
  return (
    <ModalWrapper
      variants={modalAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'end'}
      id={'signUpModal'}
    >
      {modal.page == 1 && <Page1 />}
      {modal.page == 2 && <Page2 />}
      {modal.page == 3 && <Page3 />}
      {modal.page == 4 && <Page4 />}
      <ModalButton onClick={() => setModal({ ...modal, page: modal.page + 1 })}>
        다음으로
      </ModalButton>
    </ModalWrapper>
  );
};

export default SignUpModal;