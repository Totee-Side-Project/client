import React from 'react';
import { ModalContent, ModalTitle, ModalWrapper } from './style';
import { modalAnimation } from '../../Variants/variants';

const SignInModal = () => {
  return (
    <ModalWrapper
      variants={modalAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'end'}
    >
      <ModalTitle>토티에 오신 것을 환영합니다!</ModalTitle>
      <ModalContent>닉네임을 기입해주세요.</ModalContent>
    </ModalWrapper>
  );
};

export default SignInModal;
