import React, { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atoms';
import UserService from '../../../services/UserService';
import { modalAnimation } from '../../Variants/variants';
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

const Page1 = () => {
  const [nickname, setName] = useState({
    nickname: ``,
  });
  const [error, setError] = useState<string>('');

  const mutation = useMutation(UserService.nickName, {
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: (data) => {
      if (data.header.code === 200) {
        if (data.body.data === true) {
          setError('사용 가능한 닉네임입니다.');
        } else {
          setError('중복된 닉네임입니다.');
          return;
        }
      }
      // console.log('d');
    },
    onSettled: () => {
      // setLoading(false);
    },
  });

  const onSubmit = () => {
    mutation.mutate(nickname);
  };

  const postOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setName((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(nickname);
  };

  return (
    <>
      <ModalTitle>토티에 처음 방문하셨군요!</ModalTitle>
      <ModalContent>닉네임을 기입해주세요! ( 1/3 )</ModalContent>
      <NickNameWrapper>
        <NickNameInput
          type="text"
          name="nickname"
          value={nickname.nickname}
          onChange={postOnChange}
        />
        <NickNameButton onClick={onSubmit}>중복 확인 </NickNameButton>
        <ErrorMsg>{error}</ErrorMsg>
      </NickNameWrapper>
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

const AddInfoModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  console.log(modal);
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
