import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { infoState } from '../../../../atoms';
import UserService from '../../../../services/UserService';
import {
  ErrorMsg,
  ModalContent,
  ModalTitle,
  NickNameButton,
  NickNameInput,
  NickNameWrapper,
} from '../../SignUpModal/style';

export const Page1 = () => {
  const [info, setInfo] = useRecoilState(infoState);
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
    mutation.mutate(info);
  };

  const postOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    console.log(info);
  };
  return (
    <>
      <ModalTitle>토티에 처음 방문하셨군요!</ModalTitle>
      <ModalContent>닉네임을 기입해주세요! ( 1/4 )</ModalContent>
      {/*<ModalContent>한글,영어 2~6 글자</ModalContent>*/}
      <NickNameWrapper>
        <NickNameInput
          type="text"
          name="nickname"
          value={info.nickname}
          onChange={postOnChange}
        />
        <NickNameButton onClick={onSubmit}>중복 확인 </NickNameButton>
        <ErrorMsg>{error}</ErrorMsg>
      </NickNameWrapper>
    </>
  );
};
