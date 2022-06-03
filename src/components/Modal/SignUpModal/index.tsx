import React from 'react';
import { ModalContent, ModalInput, ModalTitle, ModalWrapper } from './style';
import { modalAnimation } from '../../Variants/variants';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../../atoms';

const SignInModal = () => {
  const modal = useRecoilValue(modalState);
  return (
    <ModalWrapper
      variants={modalAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'end'}
    >
      <ModalTitle>토티에 오신 것을 환영합니다!</ModalTitle>
      <ModalContent>닉네임을 기입해주세요.</ModalContent>
      <ModalInput />
    </ModalWrapper>
  );
};

export default SignInModal;
