import { useRecoilState } from 'recoil';
import { infoState } from '../../../../atoms';
import { ModalContent, ModalTitle } from '../../SignUpModal/style';

export const Page4 = () => {
  const [info, setInfo] = useRecoilState(infoState);
  console.log(info);
  return (
    <>
      <ModalTitle>네 번째 페이지에요</ModalTitle>
      <ModalContent>우와 멋져요</ModalContent>
      <select>
        <option>우리과</option>
        <option>너네과</option>
      </select>
    </>
  );
};
