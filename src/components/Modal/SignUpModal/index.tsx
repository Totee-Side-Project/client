import React from 'react';
import {
  Img,
  GoogleLoginButton,
  KakoLoginButton,
  ModalButton,
  ModalContent,
  ModalTitle,
  ModalWrapper,
  SocialText,
} from './style';
import { modalAnimation } from '../../Variants/variants';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atoms';
import { Link, useNavigate } from 'react-router-dom';

export const API_BASE_URL = 'https://api.totee.link';
export const OAUTH2_REDIRECT_URI = 'https://totee.site';
export const GOOGLE_AUTH_URL =
  API_BASE_URL +
  '/oauth2/authorization/google?redirect_uri=' +
  OAUTH2_REDIRECT_URI;
export const KAKAO_AUTH_URL =
  API_BASE_URL +
  '/oauth2/authorization/kakao?redirect_uri=' +
  OAUTH2_REDIRECT_URI;

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalTitle>토티에 오신 것을 환영합니다!</ModalTitle>
      <ModalContent>소셜아이디로 쉽게 로그인 해보세요!</ModalContent>
      <div>
        <GoogleLoginButton onClick={() => window.open(GOOGLE_AUTH_URL, '_blank')}>
          <Img src="googlelogo.svg" />
          <SocialText>구글 로그인</SocialText>
        </GoogleLoginButton>
        <KakoLoginButton onClick={() => navigate(KAKAO_AUTH_URL)}>
          <Img src="kakaologo.svg" />
          <SocialText>카카오 로그인</SocialText>
        </KakoLoginButton>
      </div>
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
    <>
      <ModalWrapper
        variants={modalAnimation}
        initial={'initial'}
        animate={'animate'}
        exit={'end'}
        id={'signUpModal'}
      >
        {modal.page == 1 && <Page1 />}
      </ModalWrapper>
      {/*<div>*/}
      {/*  {modal.page == 2 && <Page2 />}*/}
      {/*  {modal.page == 3 && <Page3 />}*/}
      {/*  {modal.page == 4 && <Page4 />}*/}
      {/*  <ModalButton onClick={() => setModal({ ...modal, page: modal.page + 1 })}>*/}
      {/*    다음으로*/}
      {/*  </ModalButton>*/}
      {/*</div>*/}
    </>
  );
};

export default SignUpModal;
