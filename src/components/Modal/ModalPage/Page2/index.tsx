import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { infoState } from '../../../../atoms';
import {
  ModalContent,
  ModalTitle,
  NickNameWrapper,
} from '../../SignUpModal/style';

export const Page2 = () => {
  const [info, setInfo] = useRecoilState(infoState);
  console.log(info);

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

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <>
      <ModalTitle>학년 선택</ModalTitle>
      <ModalContent>학년을 선택해주세요! (1/4 )</ModalContent>
      <NickNameWrapper>
        <select name="grade" onChange={onChange}>
          <option value="1학년">1학년</option>
          <option value="2학년">2학년</option>
        </select>
      </NickNameWrapper>
    </>
  );
};
